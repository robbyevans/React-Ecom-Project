import React,{useState} from 'react'
import Items from './Items'

function ItemContainer({itemsToDisplay,pushItem}) {

  



  return (

  
   <div id="products" className="row">

     {itemsToDisplay.map(item=>{
      return <Items 
      key={item.id}
      title={item.title}
      image={item.image}
      price={item.price}
      // newArray={newArray}
      pushItem={pushItem}
      />
     })
     }
   </div>
  )
}

export default ItemContainer