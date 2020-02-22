import mysql.connector
from mysql.connector import errorcode
import pyodbc

#cnx = mysql.connector.connect(user="hackathon@hackathon01", password="qwe123!@#", host="hackathon01.mysql.database.azure.com", port=3306, database="testDB")
#s = cnx._execute_query("selec")

server = "hackathonforhuman.database.windows.net"
username = "hackathon01"
database = "hackathon"
password = "qwe123!@#"

driver= '{ODBC Driver 13 for SQL Server}'

cnxn = pyodbc.connect('DRIVER='+driver+';PORT=1433;SERVER='+server+';PORT=1443;DATABASE='+database+';UID='+username+';PWD='+ password)
cursor = cnxn.cursor()