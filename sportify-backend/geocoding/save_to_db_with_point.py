import mysql.connector
import random

# 중분류 삽입 시작

from mysql.connector import Error
def create_connection(host_name, user_name, user_password, db_name):
    connection = None
    try:
        connection = mysql.connector.connect(
            host=host_name,
            user=user_name,
            passwd=user_password,
            database=db_name
        )
        print("MySQL Database connection successful")
    except Error as e:
        print(f"The error '{e}' occurred")
    return connection

connection = create_connection("localhost", "root", "1234", "sportify")
def execute_query(connection, query):
    cursor = connection.cursor()
    try:
        cursor.execute(query)
        print("Query executed successfully")
    except Error as e:
        print(f"The error '{e}' occurred")


name = ['격투 및 무술','피트니스 및 체조','구기 및 라켓','레저 및 개인','예술 및 체육','기타']

for i, value in enumerate(name):

    insert_query = f"""
    INSERT INTO middle_category (
        name
    )
    VALUES (
        '{value}'
    )
"""

    execute_query(connection, insert_query)

connection.commit()

# 중분류 삽입 끝

# Latitude, Longitude 를 MySQL 공간데이터 타입으로 변환 후 저장

import mysql.connector

from mysql.connector import Error
def create_connection(host_name, user_name, user_password, db_name):
    connection = None
    try:
        connection = mysql.connector.connect(
            host=host_name,
            user=user_name,
            passwd=user_password,
            database=db_name
        )
        print("MySQL Database connection successful")
    except Error as e:
        print(f"The error '{e}' occurred")
    return connection

connection = create_connection("localhost", "root", "1234", "sportify")
def execute_query(connection, query):
    cursor = connection.cursor()
    try:
        cursor.execute(query)
        print("Query executed successfully")
    except Error as e:
        print(f"The error '{e}' occurred")

for i, row in voucher.iterrows():

    insert_query = f"""
    INSERT INTO sport_voucher (
        BSNS_NO,
        FCLTY_NM,
        ITEM_CD,
        ITEM_NM,
        CTPRVN_CD,
        CTPRVN_NM,
        SIGNGU_CD,
        SIGNGU_NM,
        FCLTY_ADDR,
        FCLTY_DETAIL_ADDR,
        ZIP_NO,
        TEL_NO,
        COURSE_NM,
        COURSE_NO,
        COURSE_ESTBL_YEAR,
        COURSE_ESTBL_MT,
        COURSE_BEGIN_DE,
        COURSE_END_DE,
        COURSE_REQST_NMPR_CO,
        COURSE_PRC,
        point,
        middle_category_id,
        disabled
    )
    VALUES (
        '{row['BSNS_NO']}',
        '{row['FCLTY_NM']}',
        '{row['ITEM_CD']}',
        '{row['ITEM_NM']}',
        '{row['CTPRVN_CD']}',
        '{row['CTPRVN_NM']}',
        '{row['SIGNGU_CD']}',
        '{row['SIGNGU_NM']}',
        '{row['FCLTY_ADDR']}',
        '{row['FCLTY_DETAIL_ADDR']}',
        '{row['ZIP_NO']}',
        '{row['TEL_NO']}',
        '{row['COURSE_NM']}',
        '{row['COURSE_NO']}',
        '{row['COURSE_ESTBL_YEAR']}',
        '{row['COURSE_ESTBL_MT']}',
        '{row['COURSE_BEGIN_DE']}',
        '{row['COURSE_END_DE']}',
        '{row['COURSE_REQST_NMPR_CO']}',
        '{row['COURSE_PRC']}',
        ST_PointFromText('POINT({row['LATITUDE']} {row['LONGITUDE']})',4326),
        '{row['middle_category_id']}',
        false
    )
"""

    execute_query(connection, insert_query,)

connection.commit()