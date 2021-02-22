import psycopg2
from psycopg2 import connect, extensions, sql
from faker import Faker
import random

con = psycopg2.connect(database="customers", user="postgres",
                       password="AminaRen2001", host="127.0.0.1", port="5432")

print("Database opened successfully")

cur = con.cursor()
#cur.execute('''CREATE TABLE CUSTOMER
       #(ID INT PRIMARY KEY NOT NULL,
       #Name TEXT NOT NULL,
       #Address TEXT NOT NULL,
       #Age INT NOT NULL,
       #review TEXT);''')
#print("Table created successfully")
#fake = Faker()
#for i in range(100000):
    #print(i)
    #cur.execute("INSERT INTO CUSTOMER (ID,Name,Address,Age,review) VALUES ('"+ str(i)+"','"+fake.name()+"','"+fake.address()+"','"+str(random.randint(1, 100))+"','"+fake.text()+"')")
    #con.commit()
cur.execute("""
  EXPLAIN analyze SELECT * FROM CUSTOMER where CUSTOMER.name = 'C'
""")
cur.execute("""
  EXPLAIN analyze SELECT * FROM CUSTOMER where Age = 5
""")
con.commit()
