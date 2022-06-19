const express =require('express')
const app=express()
const mongoose = require('mongoose');
const User=require('./model/User')
const cors=require('cors')
// const connectDB=require('./db/Connect')
const hostname="localhost"
const port="5000";

//middlewares

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

//
require('dotenv').config()
const connectDB=(url)=>{
    return mongoose.connect(url,{
        UseNewUrlParser:true,
        UseUnifiedTopology:true
    })
}
const start=async ()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`Server listening at http://${hostname}:${port}`))
    } catch (error) {
        console.log(error)
    }
}
start()

// routes

app.post('/reg',async (req,res)=>{
    const {emailid,password,fname,sname}=req.body;
    const input=new User({
        emailid:emailid,
        password:password,
        fname:fname,
        sname:sname
    })
    const result=await User.findOne({emailid:emailid})
    if(result!==null){
        res.json({msg:'already exists'})
    }
    else{
        input.save().then((result)=>{
            res.status(200).send("good")
        }).catch((err)=>{
            console.log(err)
        })
    }  
})

app.post('/log',async (req,res)=>{
    const {emailid,password}=req.body;
    const input=new User({
        emailid:emailid,
        password:password,
    })
    const result=await User.findOne({emailid:emailid})
    if(result!==null){
        res.json({msg:'exists'})
    }
    else{
        res.json("register first")
    }  
})