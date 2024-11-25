import os
import csv
import pymysql
import requests
from datetime import datetime
import yaml

# MySQL 연결 정보 로드
def load_mysql_config():
    yaml_path = "../src/main/resources/application-local.yml"
    with open(yaml_path, 'r') as file:
        config = yaml.safe_load(file)
        mysql_config = config.get('spring', {}).get('datasource', {})
        return {
            'host': mysql_config.get('url', '').split('//')[1].split(':')[0],
            'database': mysql_config.get('url', '').split('/')[-1],
            'user': mysql_config.get('username', ''),
            'password': mysql_config.get('password', '')
        }

mysql_config = load_mysql_config()

# API 키 로드
def load_api_key(filepath):
    with open(filepath, 'r') as file:
        return file.read().strip()

KAKAO_API_KEY = load_api_key("kakao_api_key.txt")

# Geocoding 함수
def geocode(address):
    url = f"https://dapi.kakao.com/v2/local/search/address.json?query={address}"
    headers = {"Authorization": f"KakaoAK {KAKAO_API_KEY}"}
    response = requests.get(url, headers=headers)

    if response.status_code == 200:
        data = response.json()
        if data['documents']:
            latitude = data['documents'][0]['y']
            longitude = data['documents'][0]['x']
            return latitude, longitude
    else:
        print(f"Geocoding API 요청 실패: 상태 코드 {response.status_code}, 메시지: {response.text}")
        raise RuntimeError("카카오 API 요청 실패")

# CSV 데이터 처리
def process_csv(file_path, output_csv_path, table_name, has_disability_column=False):
    # CSV를 읽고 필요한 데이터를 필터링 및 Geocoding
    with open(file_path, mode='r', encoding='utf-8') as infile, open(output_csv_path, mode='w', encoding='utf-8', newline='') as outfile:
        reader = csv.DictReader(infile)
        fieldnames = [
            'FCLTY_ADDR', 'FCLTY_DETAIL_ADDR', 'COURSE_BEGIN_DE', 'COURSE_END_DE',
            'LATITUDE', 'LONGITUDE'
        ]
        if has_disability_column:
            fieldnames.insert(2, 'TROBL_TY_NM')
        writer = csv.DictWriter(outfile, fieldnames=fieldnames)
        writer.writeheader()

        for row in reader:
            # 날짜 필터링: 2024년 9월 1일 이후
            course_begin_date = datetime.strptime(row['COURSE_BEGIN_DE'], "%Y%m%d").date()
            if course_begin_date >= datetime(2024, 9, 1).date():
                address = row['FCLTY_ADDR']
                detail_address = row['FCLTY_DETAIL_ADDR']
                full_address = f"{address} {detail_address}"
                latitude, longitude = geocode(full_address)

                if latitude and longitude:
                    data = {
                        'FCLTY_ADDR': address,
                        'FCLTY_DETAIL_ADDR': detail_address,
                        'COURSE_BEGIN_DE': course_begin_date,
                        'COURSE_END_DE': row['COURSE_END_DE'],
                        'LATITUDE': latitude,
                        'LONGITUDE': longitude
                    }
                    if has_disability_column:
                        data['TROBL_TY_NM'] = row['TROBL_TY_NM']
                    writer.writerow(data)

    print(f"Filtered and geocoded data saved to {output_csv_path}")

# MySQL 데이터 저장
def save_to_mysql(csv_path, table_name, has_disability_column=False):
    conn = pymysql.connect(
        host=mysql_config['host'],
        user=mysql_config['user'],
        password=mysql_config['password'],
        database=mysql_config['database']
    )
    cursor = conn.cursor()

    # 테이블 생성
    if has_disability_column:
        cursor.execute(f"""
        CREATE TABLE IF NOT EXISTS {table_name} (
            id INT AUTO_INCREMENT PRIMARY KEY,
            facility_address VARCHAR(255),
            facility_detail_address VARCHAR(255),
            disability_type VARCHAR(200),
            course_begin_date DATE,
            course_end_date DATE,
            latitude DECIMAL(10, 8),
            longitude DECIMAL(11, 8)
        );
        """)
    else:
        cursor.execute(f"""
        CREATE TABLE IF NOT EXISTS {table_name} (
            id INT AUTO_INCREMENT PRIMARY KEY,
            facility_address VARCHAR(255),
            facility_detail_address VARCHAR(255),
            course_begin_date DATE,
            course_end_date DATE,
            latitude DECIMAL(10, 8),
            longitude DECIMAL(11, 8)
        );
        """)
    conn.commit()

    # CSV 데이터를 읽어 테이블에 삽입
    with open(csv_path, mode='r', encoding='utf-8') as file:
        reader = csv.DictReader(file)
        for row in reader:
            if has_disability_column:
                cursor.execute(f"""
                INSERT INTO {table_name} (
                    facility_address, facility_detail_address, disability_type, course_begin_date, course_end_date, latitude, longitude
                ) VALUES (%s, %s, %s, %s, %s, %s, %s);
                """, (
                    row['FCLTY_ADDR'], row['FCLTY_DETAIL_ADDR'], row['TROBL_TY_NM'],
                    row['COURSE_BEGIN_DE'], row['COURSE_END_DE'], row['LATITUDE'], row['LONGITUDE']
                ))
            else:
                cursor.execute(f"""
                INSERT INTO {table_name} (
                    facility_address, facility_detail_address, course_begin_date, course_end_date, latitude, longitude
                ) VALUES (%s, %s, %s, %s, %s, %s);
                """, (
                    row['FCLTY_ADDR'], row['FCLTY_DETAIL_ADDR'],
                    row['COURSE_BEGIN_DE'], row['COURSE_END_DE'], row['LATITUDE'], row['LONGITUDE']
                ))

    conn.commit()
    cursor.close()
    conn.close()
    print(f"Data from {csv_path} saved to MySQL table {table_name}")

# 메인 함수
def main():
    # CSV 파일 경로
    disabled_csv = "data/KS_DSPSN_SVCH_UTILIIZA_CRSTAT_INFO_202410.csv"
    general_csv = "data/KS_SVCH_UTILIIZA_CRSTAT_INFO_202410.csv"

    # 출력 CSV 파일 경로
    disabled_output_csv = "data/disabled_sports_classes_filtered.csv"
    general_output_csv = "data/general_sports_classes_filtered.csv"

    # MySQL 테이블 이름
    DISABLED_TABLE = "disabled_sports_classes"
    GENERAL_TABLE = "general_sports_classes"

    # 장애인 강좌 데이터 처리
    print("Processing Disabled Sports Classes CSV...")
    process_csv(disabled_csv, disabled_output_csv, DISABLED_TABLE, has_disability_column=True)

    # 일반 강좌 데이터 처리
    print("Processing General Sports Classes CSV...")
    process_csv(general_csv, general_output_csv, GENERAL_TABLE, has_disability_column=False)

    # MySQL에 저장
    print("Saving Disabled Sports Classes to MySQL...")
    save_to_mysql(disabled_output_csv, DISABLED_TABLE, has_disability_column=True)

    print("Saving General Sports Classes to MySQL...")
    save_to_mysql(general_output_csv, GENERAL_TABLE, has_disability_column=False)

    print("Data processing and storage complete.")

if __name__ == "__main__":
    main()
