import React from 'react'
import './Mendrop.css'

const Mendrop = ({ handlemouse }) => {

    const items=[
        {
            id:1,
            title:"Category",
            option:[ "Nehru Jacket Set","Sherwani Set","Kurta set","Jacket set","Britches","Bandhgala","Shirt" ]
        },
        {
            id:2,
            title:"Collection",
            option:[ "Rumeli","Bursa","Bursa Chapter 2","Tabriz","Jhalamand House","Chevron "]
        },
        {
            id:3,
            title:"Jewellery",
            option:["JJ VALAYA X CONFLUENCE"]
        },
        {
            id:4,
            title:"Accesories",
            option:[ "Stole","Pocket Square","Buttons","Shoes","Belts","Safas","Cuff Links","Stoles" ]
        }
        
    ]

  return (

    <div className='itembox' onMouseEnter={()=>handlemouse(1)} onMouseLeave={()=>handlemouse(3)}>
        {items.map((items,i)=>{
            return(
                <span className='item-category' key={items.id}> 
                    <h4>{items.title}</h4>
                    {items.option.map((opt,index)=>(
                        <p key={index}>{opt}</p>
                    ))}
                </span>
            )  
        })} 
    </div>
    
  )
}

export default Mendrop