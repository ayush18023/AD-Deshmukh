import React, { useEffect, useState } from 'react'
import './Navbar.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Mendrop from './Mendrop';

// import { Darkbutton } from '../Components/Button';
import CloseIcon from '@mui/icons-material/Close';
const axios=require('axios')

export const Navbar = () => {
    const [mclass, setmclass] = useState('gayab');
    const [wclass, setwclass] = useState('gayab');
    const [nav, setnav] = useState('')
    const [login, setlogin] = useState(0)
    const [alert, setalert] = useState('')
    const [register, setregister] = useState(0)
    const [userlog, setuserlog] = useState({
        emailid:"",password:""
    })
    const [userreg, setuserreg] = useState({
        emailid:"",fname:"",sname:"",password:"",cpassword:""
    })

    
    const handlemouse=(n)=>{
        switch (n) {
            case 1:
                setmclass('')
                break;
            case 2:
                setwclass('')
                break;
            case 3:
                setmclass('gayab')
                break;
            case 4:
                setwclass('gayab')
                break;
            default:
                break;
        }
    }
    
    const handlescroll=()=>{
        const offset=window.scrollY;
        if(offset > 30 ){
            setnav('mouse-in-nav');
        }
        else{
            setnav('')
        }
    }

    const handlelogin=()=>{
        setlogin(1)
    }

    const dologin=async ()=>{
        console.log(userlog)
        const details=userlog;
        try {
            const response=await axios.post('http://localhost:5000/log',details)
            console.log(response)
            console.log(response.data)
            if(response.data==="exists"){
                setalert("Succesfully Loged in")
            }
            else{
                setalert("Account not found")
            }
            closealert()
        } catch (error) {
            console.log(error)
        }
    }

    const doregister=async ()=>{
        console.log(userreg.password)
        if(userreg.password!==userreg.cpassword || userreg.password===" "){
            setalert("Password incorrect")
            setuserreg({...userreg,password:"",cpassword:""})
            closealert()
        }
        else{
            console.log(userreg)
            const response=await axios.post('http://localhost:5000/reg',userreg)
            if(response.data==="good"){
                setregister(0)
                setlogin(1)
                setalert('Succesfully Registered')
                closealert()
            }
            // console.log(response.data)
        }
    }

    const closealert=()=>{
         setTimeout(() => {
                setalert('')
        }, 4000);
    }
    useEffect(() => {
        window.addEventListener('scroll',handlescroll)
        
    })
    

  return (

    <div className='nav' onMouseEnter={()=>setnav('mouse-in-nav')}  onMouseLeave={()=>handlescroll()}>

        <div className={(alert!=='')?('absolute h-20 w-80 top-32 bg-black right-4 p-4 text-white z-10 alert'):('gayab')}>{alert}
        <span className='absolute top-1 right-1 ' onClick={()=>setalert('')}><CloseIcon/></span></div>

        <div className={`top-header ${nav}`}>
            <div className="socials">
                <span className="space-left"><InstagramIcon/></span>
                <span className="space-left"><FacebookIcon/></span>
                <span className="space-left"><CallIcon/></span>   
            </div>
            <img src={(nav==="")?("https://ik.imagekit.io/thestylist/Assets/JV/Logo/logo-light.svg"):("https://ik.imagekit.io/thestylist/Assets/JV/Logo/logo-dark.svg")} width="192" height="40" className='logo' alt="" />
            <div className="imp">
                <span className="space-right"><WhatsAppIcon/></span>
                <span className="space-right cursor-pointer"><div className='login' onClick={()=>{handlelogin();handlescroll()}} ><PersonOutlineIcon/>Login</div></span>
                <span className="space-right"><SearchIcon/></span>
                <span className="space-right"> <ShoppingCartIcon/></span>
            </div>
        </div>
        <div className={`wears ${nav}`} >
            <p onMouseOver={()=>handlemouse(1)} onMouseLeave={()=>handlemouse(3)}>Men</p>
            <p onMouseEnter={()=>handlemouse(2)} onMouseLeave={()=>handlemouse(4)}>Women</p>
            <p>New Arrivals</p>
        </div>    
        <div className={mclass}><Mendrop handlemouse={handlemouse}/></div>
        <div className={wclass}>hello</div>


        {/* for login         */}
        <div className={(login===1)?('login_window'):("gayab")}>
            <div className={(login===1)?("detailslogin flex flex-col items-center"):("gayab")}>
                <div className="mt-4">LOG IN</div>
                <div className="absolute top-2 right-2 cursor-pointer" onClick={()=>{setlogin(0)}}><CloseIcon/></div>
                <form className="w-full flex flex-col items-center">
                    <input type="text" value={userlog.emailid} className="logininp" name="" id="" placeholder="Enter Email Address"
                    onChange={(e)=>{setuserlog({...userlog,emailid:e.target.value})}} 
                    />

                    <input type="password" value={userlog.password} className="logininp" name="" id=""  placeholder="Enter Password"
                    onChange={(e)=>{setuserlog({...userlog,password:e.target.value})}}
                    />

                    <div className="loginbutt mt-10 text-center" onClick={dologin}>Login to your account</div>
                </form>
                <div className="mt-4 cursor-pointer" onClick={()=>{setregister(1);setlogin(0)}}>or <b>Register</b> an account</div>
            </div>
        </div>


        {/* for registration */}
        <div className={(register===1)?('login_window'):("gayab")}>
            <div className={(register===1)?("detailsregister flex flex-col items-center"):("gayab")}>
                <div className="mt-4">Register</div>
                    <div className="absolute top-2 right-2 cursor-pointer" onClick={()=>{setregister(0)}}><CloseIcon/></div>
                    <form className="w-full flex flex-col items-center">
                        <input type="text" className="logininp" name="" id=""  placeholder="Enter Email Address"
                        value={userreg.emailid}
                        onChange={(e)=>{setuserreg({...userreg,emailid:e.target.value})}} 
                        />
                        <div className="flex">
                            <input type="text" className="registerinp" placeholder="First name"
                            value={userreg.fname}
                            onChange={(e)=>{setuserreg({...userreg,fname:e.target.value})}} 
                            />
                            <input type="text" className="registerinp" placeholder="Second name"
                            value={userreg.sname}
                            onChange={(e)=>{setuserreg({...userreg,sname:e.target.value})}} 
                            />
                        </div>
                        <input type="password" className="rinp" name="" id=""  placeholder="Enter Password"
                        value={userreg.password}
                        onChange={(e)=>{setuserreg({...userreg,password:e.target.value})}} 
                        />
                        <input type="password" className="rinp" name="" id="" placeholder="Confirm password"
                        value={userreg.cpassword}
                        onChange={(e)=>{setuserreg({...userreg,cpassword:e.target.value})}}
                        />

                        <div className="loginbutt mt-10 text-center" onClick={doregister}>Register new account</div>
                    </form>
                    <div className="mt-4 cursor-pointer" onClick={()=>{setregister(0);setlogin(1)}}>or <b>Login</b> into an account</div>
            </div>
        </div>                    
    </div>
  )
}

export default Navbar