const express = require('express')
const bodyParser=require('body-parser')
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const static = express.static('static');
app.use("/",static);

app.post("/hi",(req,res)=>{
    console.log(req.body)
    //res.send("hello World")
    //http://localhost:4000/hi?phone=12
    /**
     * host: localhost/127.0.0.1
     * port: 4000
     * path:/hi
     * ?key=value
     */
    res.json({
        name:req.body.name,
        description:req.body.description,
        amount:req.body.amount,
        date:req.body.date,


        //form:req.query,
        //phone:req.query.phone*10
    });
});
//  })

app.listen(4000,()=>{
    console.log("App running");
});