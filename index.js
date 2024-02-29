const express = require('express')
const app = express()

const static = express.static('static');
app.use("/",static);

// app.get('/', function (req, res) {
//  res.send("hello World")})

app.listen(4000,()=>{
    console.log("App running");
});