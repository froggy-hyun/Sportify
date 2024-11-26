import csv
import requests
from datetime import datetime
from tqdm import tqdm

# API 키 로드
def load_api_key(filepath):
    with open(filepath, 'r') as file:
        return file.read().strip()

KAKAO_API_KEY = load_api_key("kakao_api_key.txt")

# Geocoding 함수
def geocode(address, detail_address=None):
    # 기본 full_address 설정
    full_address = address if detail_address is None else f"{address} {detail_address}"

    # full_address로 검색
    if detail_address:
        url = f"https://dapi.kakao.com/v2/local/search/address.json?query={full_address}"
        headers = {"Authorization": f"KakaoAK {KAKAO_API_KEY}"}
        response = requests.get(url, headers=headers)

        if response.status_code == 200:
            data = response.json()
            if data.get('documents'):  # documents가 빈 리스트가 아니면 결과 있음
                latitude = data['documents'][0]['y']
                longitude = data['documents'][0]['x']
                return latitude, longitude
        else:
            print(f"Geocoding API 요청 실패: 상태 코드 {response.status_code}, 메시지: {response.text}")
            return None, None

    # full_address가 실패했거나 detail_address가 없는 경우 address로 검색
    url = f"https://dapi.kakao.com/v2/local/search/address.json?query={address}"
    headers = {"Authorization": f"KakaoAK {KAKAO_API_KEY}"}
    response = requests.get(url, headers=headers)

    if response.status_code == 200:
        data = response.json()
        if data.get('documents'):  # documents가 빈 리스트가 아니면 결과 있음
            latitude = data['documents'][0]['y']
            longitude = data['documents'][0]['x']
            return latitude, longitude
    else:
        print(f"Geocoding API 요청 실패: 상태 코드 {response.status_code}, 메시지: {response.text}")

    # 결과를 찾을 수 없는 경우
    return None, None

# CSV를 읽고 필요한 데이터를 필터링 및 Geocoding
def process_csv(file_path, output_csv_path, not_found_csv_path, table_name, has_disability_column=False):
    # 2024년 9월 1일 이후 데이터 개수 계산
    with open(file_path, mode='r', encoding='utf-8') as infile:
        reader = csv.DictReader(infile)
        rows = [
            row for row in reader
            if row['COURSE_BEGIN_DE'] and datetime.strptime(row['COURSE_BEGIN_DE'], "%Y%m%d").date() >= datetime(2024, 9, 1).date()
        ]

    total_rows = len(rows)  # tqdm에서 사용할 총 데이터 개수

    # CSV를 읽고 필요한 데이터를 필터링 및 Geocoding
    with open(output_csv_path, mode='w', encoding='utf-8', newline='') as outfile, \
            open(not_found_csv_path, mode='w', encoding='utf-8', newline='') as not_found_file:

        fieldnames = list(rows[0].keys()) + ['LATITUDE', 'LONGITUDE']  # 기존 필드 + 위도/경도
        writer = csv.DictWriter(outfile, fieldnames=fieldnames)
        not_found_writer = csv.DictWriter(not_found_file, fieldnames=list(rows[0].keys()))

        writer.writeheader()
        not_found_writer.writeheader()

        # tqdm을 사용한 진행도 표시
        for row in tqdm(rows, total=total_rows, desc=f"Processing {table_name}"):
            address = row['FCLTY_ADDR']
            detail_address = row['FCLTY_DETAIL_ADDR']
            facility_name = row['FCLTY_NM']

            latitude, longitude = geocode(address, detail_address)

            if latitude and longitude:
                # 위도와 경도를 추가
                row['LATITUDE'] = latitude
                row['LONGITUDE'] = longitude
                writer.writerow(row)
            else:
                print(f"위도와 경도 정보를 찾을 수 없습니다: 시설명 '{facility_name}', 주소 '{address}'")
                not_found_writer.writerow(row)

    print(f"Filtered and geocoded data saved to {output_csv_path}")
    print(f"Not found data saved to {not_found_csv_path}")

# 메인 함수
def main():
    # CSV 파일 경로
    disabled_csv = "data/KS_DSPSN_SVCH_UTILIIZA_CRSTAT_INFO_202410.csv"
    general_csv = "data/KS_SVCH_UTILIIZA_CRSTAT_INFO_202410.csv"

    # 출력 CSV 파일 경로
    disabled_output_csv = "data/disabled_sports_classes_filtered.csv"
    general_output_csv = "data/general_sports_classes_filtered.csv"

    # 위도와 경도를 찾을 수 없는 데이터 CSV 파일 경로
    disabled_not_found_csv = "data/disabled_sports_classes_not_found.csv"
    general_not_found_csv = "data/general_sports_classes_not_found.csv"

    # 장애인 강좌 데이터 처리
    print("Processing Disabled Sports Classes CSV...")
    process_csv(disabled_csv, disabled_output_csv, disabled_not_found_csv, "disabled_sports_classes", has_disability_column=True)

    # 일반 강좌 데이터 처리
    print("Processing General Sports Classes CSV...")
    process_csv(general_csv, general_output_csv, general_not_found_csv, "general_sports_classes", has_disability_column=False)

    print("Data processing complete.")

if __name__ == "__main__":
    main()
