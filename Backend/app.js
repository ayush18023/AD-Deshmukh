
const express =require('express')
const app=express()

const hostname = '127.0.0.1';
const port = 3000;
const mongoose = require('mongoose');
app.use(express.json())
const connectionstring="mongodb://localhost:27017/newnodedb"
const connectionparams={
    UseNewUrlParser:true,
    UseUnifiedTopology:true
}
mongoose.connect(connectionstring,connectionparams).then(()=>console.log("Connected to DB")).catch((err)=>console.log(err))
