const mongoose = require("mongoose");

const Schema = mongoose.Schema

const Author = new Schema({
    name: String,
    email:String,
    phone:Number,
});

const author = mongoose.model('author',Author);

module.exports=author