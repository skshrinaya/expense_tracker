const express = require('express')
const bodyParser=require('body-parser')
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const static = express.static('static');
app.use("/",static);

app.get("/hi",(req,res)=>{
    const {amount}=req.query;
    res.json({
        firstName:req.query.name,price:amount,
    ...req.query})
});

app.get("/todos",async (req,res)=>{
//   fetch('https://jsonplaceholder.typicode.com/todos')
//   .then((response)=>response.json()).
//   then((json)=>res.json(json));

  //res.json(todos);

   const response = await fetch('https://jsonplaceholder.typicode.com/todos')
   const todos = await response.json()
   res.json(todos)
});

app.get("/todos/:id",async(req,res)=>{
    const {id:todoId}=req.params;
    res.json({todoId})

});


app.post("/hi",(req,res)=>{
    console.log(req.body)
    res.json({
        name:req.body.name,
        description:req.body.description,
        amount:req.body.amount,
        date:req.body.date,
    });
    
 })

app.listen(4000,()=>{
    console.log("App running");
});