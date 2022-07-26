import React,{useState,useEffect} from 'react'


function Items({key,title,image,price}) {
  // const{id,title,image,price}=item;



  return (
    <div className="col-4">
        <img src={image}/>
        <h3>{key}</h3>
        <h4>{title}</h4>
        
          <p>{price}</p>
         
        </div>
   
  )
}

export default Items