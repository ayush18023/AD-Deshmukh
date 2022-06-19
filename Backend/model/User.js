const mongoose=require('mongoose')

const UserSchema=new mongoose.Schema({
    emailid:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    fname:{
        type:String,
        required:true
    },
    sname:{
        type:String,
        required:true
    },
})
const collectionname="User"
const User=mongoose.model("User",UserSchema,collectionname)
module.exports=User;