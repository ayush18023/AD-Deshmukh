import React from 'react'
import Slider from '../Slider/Slider'
import Navbar from '../Navbar/Navbar'
import './Home.css'
import Lightbutton,{Darkbutton} from '../Components/Button'
import Gallery from './Gallery'


const Home = () => {
  return (
    <div>
      {/* <div className="h-20px bg-black text-center text-white absolute w-100%">Contact us:+91-8800554491</div> */}
        <Navbar/>
        
        <div className='slid'><Slider/></div>
      
        <div className="category-container">
          <p className='welcome-head'>SHOP THE COLLECTION</p>
          <b><p className='welcome'>WELCOME TO THE WORLD OF JJ VALAYA AND CELEBRATE LUXURY WITH OUR CAREFULLY CURATED COLLECTIONS.</p></b>
          <div className="options">
            <span className="men relative flex items-end justify-center">
              <div className='absolute text-2xl text-white z-10 shift_up'>MEN</div>
              <img src="https://ik.imagekit.io/thestylist/valaya/pub/media_valaya/HOMEPAGE_IMAGES/13_May_22/Grid-2_(2).jpg" alt="" className='women-img'/>
              <span className="absolute bottom-10"><Lightbutton text={"SHOP NOW"}/></span>
            </span>
            <span className="women relative flex items-end justify-center">
              <img src="https://ik.imagekit.io/thestylist/valaya/pub/media_valaya/HOMEPAGE_IMAGES/13_May_22/Grid-6.jpg" alt="" className='women-img'/>
              <div className='absolute text-2xl text-white z-10 shift_up'>WOMEN</div>
              <span className="absolute bottom-10"><Lightbutton text={"SHOP NOW"}/></span>
            </span>
            <span className="accesories relative flex items-end justify-center">
              <div className='absolute text-2xl text-white z-10 shift_up'>ACCESSORIES</div>
              <img src="https://ik.imagekit.io/thestylist/valaya/pub/media_valaya/HOMEPAGE_IMAGES/13_May_22/collection-belt_(1).jpg" alt="" className='women-img'/>
              <span className="absolute bottom-10"><Lightbutton text={"SHOP NOW"}/></span>  
            </span>
          </div>
          
        </div>
        
        <div className='mt-10 relative contact flex justify-center items-center'>
          <img src="https://ik.imagekit.io/thestylist/valaya/pub/media_valaya/HOMEPAGE_IMAGES/25_Apr_22/appointment-background-e-61-ee-04-b-1-a-9-c-6-f-626-c-2-a.jpg" alt=""/>
          <div className='absolute text-white flex flex-col items-center '>
            <div className='text-6xl'>BOOK AN APPOINTMENT</div>  
            <div className='mt-6 mb-8'>CONSULTATION  |  CUSTOMISATION  |  MEASUREMENT </div>
            <Lightbutton text="BOOK NOW"/>
          </div>
        </div>
        {/* gallery */}
        <div>
          <Gallery/>
        </div>
    </div>
  )
}

export default Home