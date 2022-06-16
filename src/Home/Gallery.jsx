import React, { useState } from 'react'
import Footer from '../footer/Footer'
import './Gallery.css'
import gimages from './Galleryimages'

const Gallery = () => {
  const sort=gimages.filter(gi=>gi.category==='shoots')
  const [cat, setcat] = useState(sort)

  const selectcategory=(selectcat)=>{
    const sorted=gimages.filter(gi=>gi.category===selectcat)
    setcat(sorted)
  }

  return (
    <>
      <div className='container-gallery flex flex-col items-center mt-10 '>
        <div className='text-xl mt-16 text-4xl list-none'>Gallery</div>
        <ul className='flex my-10 cursor-pointer'>
          <li className="px-10" onClick={()=>selectcategory('shoots')}>SHOOTS</li>
          <li className='px-10' onClick={()=>selectcategory('press&media')}>PRESS & MEDIA</li>
          <li className='px-10' onClick={()=>selectcategory('runaway')}>RUNWAY</li>
          <li className='px-10' onClick={()=>selectcategory('celebs')}>CELEBRITIES</li>
        </ul>
    </div>
    <div className='gallery_objects flex justify-center pb-10'>
      {cat.map((cat,index)=>(
        <img src={cat.imlink} key={cat.id} alt="" className='m-1' width="30%"/>
      ))}
    </div>

    <Footer/>
    
    </>
    
  )
}

export default Gallery