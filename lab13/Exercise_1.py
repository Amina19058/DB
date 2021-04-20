#Exersize_1
import redis
import json

r = redis.Redis(
host='redis-12217.c261.us-east-1-4.ec2.cloud.redislabs.com',
port="12217",
password='AminaRen2001!')

c1 = {
      "customer_numb":"001", 
      "first_name":"Jane", 
      "last_name":"Doe", 
      "orders": 
        []
     }
c2 = {
      "customer_numb":"002", 
      "first_name":"John", 
      "last_name":"Doe", 
      "orders": 
        [
        {"order_numb":"1001", "order_date":"10/10/09", "order_total":"250.85"},
        {"order_numb":"1002", "order_date":"2/21/10", "order_total":"125.89"}
        ]
     }
c3 = {
      "customer_numb":"003", 
      "first_name":"Jane", 
      "last_name":"Smith", 
      "orders": 
        [
        {"order_numb":"1003", "order_date":"11/15/09", "order_total":"1567.99"}
        ]
     }
c4 = {
      "customer_numb":"004", 
      "first_name":"John", 
      "last_name":"Smith", 
      "orders": 
        [
        {"order_numb":"1004", "order_date":"11/22/09", "order_total":"180.92"},
        {"order_numb":"1005", "order_date":"12/15/09", "order_total":"565.00"}
        ]
     }
c5 = {
      "customer_numb":"005", 
      "first_name":"Jane", 
      "last_name":"Jones", 
      "orders": 
        []
     }
c6 = {
      "customer_numb":"006", 
      "first_name":"John", 
      "last_name":"Jones", 
      "orders": 
        [
        {"order_numb":"1006", "order_date":"11/22/09", "order_total":"25.00"},
        {"order_numb":"1007", "order_date":"10/8/09", "order_total":"85.00"},
        {"order_numb":"1008", "order_date":"12/29/09", "order_total":"109.12"}
        ]
     }
string_c1 = json.dumps(c1)
string_c2 = json.dumps(c2)
string_c3 = json.dumps(c3)
string_c4 = json.dumps(c4)
string_c5 = json.dumps(c5)
string_c6 = json.dumps(c6)

r.mset({"customer_1":string_c1})
r.mset({"customer_2":string_c2})
r.mset({"customer_3":string_c3})
r.mset({"customer_4":string_c4})
r.mset({"customer_5":string_c5})
r.mset({"customer_6":string_c6})

