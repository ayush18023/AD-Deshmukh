import React from 'react'
import './Mendrop.css'

const Mendrop = ({ handlemouse }) => {

    const items=[
        {
            title:"Category",
            option:[ "Nehru Jacket Set","Sherwani Set","Kurta set","Jacket set","Britches","Bandhgala","Shirt" ]
        },
        {
            title:"Collection",
            option:[ "Rumeli","Bursa","Bursa Chapter 2","Tabriz","Jhalamand House","Chevron "]
        },
        {
            title:"Jewellery",
            option:["JJ VALAYA X CONFLUENCE"]
        },
        {
            title:"Accesories",
            option:[ "Stole","Pocket Square","Buttons","Shoes","Belts","Safas","Cuff Links","Stoles" ]
        }
        
    ]

  return (

    <div className='itembox' onMouseEnter={()=>handlemouse(1)} onMouseLeave={()=>handlemouse(3)}>
        {items.map((items,i)=>{
            return(
                <span className='item-category' > 
                    <h4>{items.title}</h4>
                    {items.option.map((opt)=>(
                        <p>{opt}</p>
                    ))}
                </span>
            )  
        })} 
    </div>
    
  )
}

export default Mendrop