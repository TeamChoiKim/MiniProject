import mariadb
import os

def getConn():
    try:
        return mariadb.connect(
            user=os.getenv('USER'),
            password=os.getenv('PASSWORD'),
            host=os.getenv('HOST'),
            port=int(os.getenv('PORT')),
            database=os.getenv('DATABASE')
        )
    except mariadb.Error as e:
        print(f"MariaDB Error : {e}")
        return None