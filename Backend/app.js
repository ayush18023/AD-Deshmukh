const express =require('express')
const app=express()
const mongoose = require('mongoose');
const User=require('./model/User')
const cors=require('cors')
const shortid = require('shortid')
const Razorpay = require('razorpay')
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

const razorpay = new Razorpay({
	key_id: 'rzp_test_qTIWsVMiCwwAPF',
	key_secret: '5It2TMNK9LqtGyHBP7guBYVH'
})

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
    const customer=await razorpay.customers.create({
        name: fname.concat(" ",sname),
        email: emailid,
        fail_existing: 0,
        notes: {}
    })
    console.log(customer)
    
    const input=new User({
        emailid:emailid,
        password:password,
        fname:fname,
        sname:sname,
        customerid:customer.id
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
        res.json({result,msg:'exists'})
    }
    else{
        res.json("register first")
    }  
})


app.post('/razorpay', cors(),async (req, res) => {
	console.log(req.body)
    const amount = req.body.totalcost
	const currency = 'INR'
	const options = {
		amount: amount * 100,
		currency,
		receipt: shortid.generate(),
	}
    console.log(options.receipt)
	try {
		const response = await razorpay.orders.create(options)
		console.log(response)
		res.json({
			id: response.id,
			currency: response.currency,
			amount: response.amount
		})
	} catch (error) {
		console.log(error)
	}
})

// app.get('/invoice',async (req,res)=>{//replace get by post  
//     const item = await razorpay.items.create({
//         name: "new item",
//         description: "An indian story, Booker prize winner.",
//         amount: 20000,
//         currency: "INR",
//         fail_existing: 0,
//     })
//     console.log(item)

//     const invoice=razorpay.invoices.create({
//         "type": "invoice",
//         "date": 1589994898,
//         "customer_id": "cust_JoEeMiL0v3f3da",
//         "line_items": 
//            [ item.id]
        
//     }).then(t=>console.log(t)).catch(err=>console.log(err))
//     console.log(invoice)

    
    
//     // razorpay.invoices.notifyBy(invoice.id,'email').then(t=>console.log(t)).catch(err=>console.log(err))
// })