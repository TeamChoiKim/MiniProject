import mariadb
from functions.getConn import getConn

def findOne(sql):
    result = None
    try:
        conn = getConn()
        if conn:
            cur = conn.cursor()
            cur.execute(sql)
            row = cur.fetchone()
            columns = [desc[0] for desc in cur.description]
            cur.close()
            conn.close()
            result = dict(zip(columns, row)) if row else None
    except mariadb.Error as e:
        print(f"MariaDB Error : {e}")
    return result