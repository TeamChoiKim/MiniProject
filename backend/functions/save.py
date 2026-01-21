import mariadb
from functions.getConn import getConn

def save(sql):
    result = False
    try:
        conn = getConn()
        if conn:
            cur = conn.cursor()
            cur.execute(sql)
            conn.commit()
            cur.close()
            conn.close()
            result = True
    except mariadb.Error as e:
        print(f"MariaDB Error : {e}")
    return result