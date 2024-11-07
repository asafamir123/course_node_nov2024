const mongoose = require('mongoose');
var express = require('express');

const uri = "mongodb+srv://david:Aa123456@cluster0.gqvy99x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
async function run() {
    try {
        // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
        await mongoose.connect(uri, clientOptions);
        await mongoose.connection.db.admin().command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    }
    catch (err) {
        console.log(err)
    }
    finally {
        // Ensures that the client will close when you finish/error
        //  await mongoose.disconnect();
    }
}
run()

var app = express();
app.use(express.json())
var CurrentProduct = require('./ProductModel');

app.post('/api/v1/products', function (req, res, next) {
    let p1 = req.body;// {title:"ball", "price":100, description:"ddd"}
    console.log(req.body)
    var newItem = new CurrentProduct(p1);
    newItem.save().then(item => {
        res.status(200).json({ item: item })
    }).catch(err => {
        console.log()
        res.status(403).json({ error: "error 😱:" + err })
    });
});
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("Running on port " + port);
})