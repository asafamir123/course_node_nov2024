let express = require("express")// import 
let app = express() // instance =  מופע  of express 
app.use(express.json())
let cors = require("cors"); // Import COR
app.use(cors()); // Enable CORS for all routes

app.get("/", function(req, res){
    console.log("get")
    res.send("hello world")
})
//create 
app.post("/", function(req, res){
    console.log(req.body)
    res.json({message:"hello client"})
})
app.delete("/", function(req, res){
    console.log("deleted")
})
//update - update  parts of data 
app.patch("/", function(req, res){
    console.log("patch - update")
})
//put - update all of data 
app.put("/", function(req, res){
    console.log("put - update ")
})
app.listen(3000);

