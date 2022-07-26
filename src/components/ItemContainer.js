import React from 'react'
import Items from './Items'

function ItemContainer({itemList}) {



  return (

  
   <div id="products" className="row">

     {itemList.map(item=>{
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