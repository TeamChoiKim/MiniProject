import mariadb
from functions.getConn import getConn

def findAll(sql):
    result = []
    try:
        conn = getConn()
        if conn:
            cur = conn.cursor()
            cur.execute(sql)
            rows = cur.fetchall()
            columns = [desc[0] for desc in cur.description]
            cur.close()
            conn.close()
            result = [dict(zip(columns, row)) for row in rows]
    except mariadb.Error as e:
        print(f"MariaDB Error : {e}")
    return result
