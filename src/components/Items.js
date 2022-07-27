import React from 'react'


function Items({key,title,image,price,pushItem}) {
  // const{title,image,price}=item;
  

  
  function handleAddToCart(){
    const data=({
      "image":image,
      "title":title,
      "price":price
      
    })
    pushItem(data)
   
  }



  return (
    <div className="col-4">
        <img src={image}/>
        <h3>{key}</h3>
        <h4 className='item-title'>{title}</h4>
        
          <p className='item-price'>{price}</p>
          {/* <btn className="btn" onClick={handleAddToCart}>Add to cart</btn> */}
         
        </div>
   
  )
}

export default Items