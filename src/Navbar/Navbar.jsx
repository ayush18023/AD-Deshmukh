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

export const Navbar = () => {
    const [mclass, setmclass] = useState('gayab');
    const [wclass, setwclass] = useState('gayab');
    const [nav, setnav] = useState('')
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

    useEffect(() => {
        window.addEventListener('scroll',handlescroll)
    })
    

  return (

    <div className='nav' onMouseEnter={()=>setnav('mouse-in-nav')}  onMouseLeave={()=>setnav('')}>
        <div className={`top-header ${nav}`}>
            <div className="socials">
                <span className="space-left"><InstagramIcon/></span>
                <span className="space-left"><FacebookIcon/></span>
                <span className="space-left"><CallIcon/></span>   
            </div>
            <img src={(nav==="")?("https://ik.imagekit.io/thestylist/Assets/JV/Logo/logo-light.svg"):("https://ik.imagekit.io/thestylist/Assets/JV/Logo/logo-dark.svg")} width="192" height="40" className='logo' alt="" />
            <div className="imp">
                <span className="space-right"><WhatsAppIcon/></span>
                <span className="space-right"><div className='login'><PersonOutlineIcon/>Login</div></span>
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
    </div>
  )
}

export default Navbar