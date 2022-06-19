import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {useParams }from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Menimages from './Menimages'

const Menclothes = () => {
    const {id}=useParams()
  
    const [cloth, setcloth] = useState({})
    useEffect(() => {
      const sorted=Menimages.filter(mi=>mi.id===id)
      console.log(sorted.id)
    }, [])
    

  return (
    <>
        <div className='bg-black'><Navbar /></div>

    </>
  )
}

export default Menclothes