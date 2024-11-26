import csv
import pymysql
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
    try:
        if has_disability_column:
            cursor.execute(f"""
            CREATE TABLE IF NOT EXISTS {table_name} (
                id INT AUTO_INCREMENT PRIMARY KEY,
                facility_address VARCHAR(255),
                facility_detail_address VARCHAR(255),
                disability_type VARCHAR(200),
                course_begin_date DATE,
                course_end_date DATE,
                location point SRID 4326,
                SPATIAL INDEX(location)
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
                location point SRID 4326,
                SPATIAL INDEX(location)
            );
            """)
        conn.commit()
    except Exception as e:
        print(f"테이블 생성 중 오류 발생: {e}")
        conn.rollback()
        return

    # CSV 데이터를 읽어 테이블에 삽입
    with open(csv_path, mode='r', encoding='utf-8') as file:
        reader = csv.DictReader(file)
        for row in reader:
            try:
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
            except Exception as e:
                print(f"데이터 삽입 중 오류 발생: {e}")
                print(f"문제 데이터: {row}")
                conn.rollback()

    conn.commit()
    cursor.close()
    conn.close()
    print(f"Data from {csv_path} saved to MySQL table {table_name}")


# 메인 함수
def main():
    # 출력 CSV 파일 경로
    disabled_output_csv = "data/disabled_sports_classes_filtered.csv"
    general_output_csv = "data/general_sports_classes_filtered.csv"

    # MySQL 테이블 저장
    save_to_mysql(disabled_output_csv, "disabled_sports_classes", has_disability_column=True)
    save_to_mysql(general_output_csv, "general_sports_classes", has_disability_column=False)

if __name__ == "__main__":
    main()
