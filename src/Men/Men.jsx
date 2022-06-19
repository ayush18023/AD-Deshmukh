import React from 'react'
import Navbar from '../Navbar/Navbar'
import Menimages from './Menimages'
import './Men.css'
import Breadcrumbs from '@mui/material/Breadcrumbs';
// import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom'


// custom hook to get the current pathname in React



const Men = () => {
  return (
    <>
        <Navbar active=""/>   
        <div className="absolute top-0"><img src="https://admin-valaya.perniapopup.studio/pub/media_valaya/promobanners/p/a/page-banner.png"  alt="" /></div> 
        <hr className='border-white mt-80'/>
        <div className='Sort_window h-full border-2'>
            <Breadcrumbs aria-label="breadcrumb" >
                <Link to="/men">Home</Link>
                <Typography color="text.primary">Breadcrumbs</Typography>
            </Breadcrumbs>
            <div className="category_men">
                
            </div>
        </div>
        <div className='mt-10 men-container'>
            {Menimages.map((mi)=>(
                <Link to={`/men/${mi.id}`}>
                    <div className='card' key={mi.id} >
                        <img src={mi.img}  alt="" />
                        <p>{mi.title}</p>
                        <p>&#8377;{mi.price}</p>
                    </div> 
                </Link>
                
            ))}
        </div>
    </>
  )
}

export default Men