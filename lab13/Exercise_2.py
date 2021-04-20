import redis
import json

r = redis.Redis(
host='redis-12217.c261.us-east-1-4.ec2.cloud.redislabs.com',
port="12217",
password='AminaRen2001!')

profile = json.dumps({
  "login":"",
  "Id":"",
  "name":"",
  "followers":[],
  "posts":[
    {
      "date":"",
      "data":""
      }
  ]
})
post = json.dumps({
  "date":"",
  "data":""
})
r.hset("hash", profile, post)



