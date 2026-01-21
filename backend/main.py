from fastapi import FastAPI
import mariadb
import os
from dotenv import load_dotenv
load_dotenv(override=True)
from functions import getConn, findOne, findAll, save

app = FastAPI()

@app.get("/")
def read_root():
  return {"project": "2team"}

sql1 ="""
  select * from prj.userinfo;
    """
print(findOne(sql1))