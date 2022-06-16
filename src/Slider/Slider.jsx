import React, { useState } from 'react'
import './Slide.css'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Slider = () => {

    const [current, setcurrent] = useState(0)
    const slides=[
        "https://ik.imagekit.io/thestylist/valaya/pub/media_valaya/HOMEPAGE_IMAGES/13_May_22/Desktop-Banner-3_(7).jpg",
        "https://ik.imagekit.io/thestylist/valaya/pub/media_valaya/HOMEPAGE_IMAGES/13_May_22/Desktop-Banner-1_(20).jpg",
        "https://ik.imagekit.io/thestylist/valaya/pub/media_valaya/HOMEPAGE_IMAGES/13_May_22/Desktop-Banner-5.jpg",
        "https://ik.imagekit.io/thestylist/valaya/pub/media_valaya/HOMEPAGE_IMAGES/13_May_22/Desktop-Banner-2_(16).jpg",
        "https://ik.imagekit.io/thestylist/valaya/pub/media_valaya/HOMEPAGE_IMAGES/13_May_22/Desktop-Banner-1_(10).jpg",
        "https://ik.imagekit.io/thestylist/valaya/pub/media_valaya/HOMEPAGE_IMAGES/13_May_22/Desktop-Banner-4_(1).jpg"
    ]      

    // setInterval(() => {
    //   setcurrent((current+1)%slides.length)
    // }, 5000);
    
  return (
    <div className='slider-container'>
        <span className='icons'><ArrowLeftIcon onClick={()=>setcurrent((current-1)%slides.length)}/></span>
        <img src={slides[current]} alt="" width="100%" className='slide-img'/>
        <span className='icons right'><ArrowRightIcon onClick={()=>setcurrent((current+1)%slides.length)}/></span>
    </div>
  )
}

export default Slider