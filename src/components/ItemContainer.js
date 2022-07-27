import React from 'react'
import Items from './Items'

function ItemContainer({itemsToDisplay}) {



  return (

  
   <div id="products" className="row">

     {itemsToDisplay.map(item=>{
      return <Items 
      key={item.id}
      title={item.title}
      image={item.image}
      price={item.price}
      />
     })
     }
   </div>
  )
}

export default ItemContainer