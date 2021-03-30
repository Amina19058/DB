use lab09

--query 1--

db.restaurants.find({})

--query 2--

db.restaurants.find({}).projection({"restaurant_id":1,"name":1,"borough":1,"cuisine":1})

--query 3--

db.restaurants.find({borough : "Bronx"}).limit(5)

--query 4--

db.restaurants.find({ $or: [ {"cuisine": { $nin: ["American ", "Chinese"] } }, {"name" : { $regex : /^Wil/ } }]}).projection({"restaurant_id":1,"name":1, "borough":1, "cuisine":1})

--query 5--

db.restaurants.find({"name" : { $regex: /mon/} }).projection({"name":1, "borough":1, "address.coord":1, "cuisine":1})

--query 6--

db.restaurants.find({"borough" : { $in : ["Staten Island","Queens","Bronx or Brooklyn"]}}).projection({"restaurant_id":1, "name":1, "borough":1, "cuisine":1})
