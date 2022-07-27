import React,{useState,useEffect} from 'react'
import NavBar from './NavBar'

function Cart({pushedItems}) {

  return (
    <div>
      <NavBar/>
      <div className="small-container cart-page"></div>
      <table>
        <tr>
          <th></th>
          <th>Product</th>
          <th>quantity</th>
          <th>subtotal</th>
        </tr>
        {pushedItems.map(item=>{
          <tr className='pushed-item'>
            <td>
              <div className='cart-info'>
                <img src={item.image}></img>
              </div>
            </td>
            
              <td>{item.title}{item.price}</td>
              <td><input  type="number"></input></td>
              <td>{item.price}</td>
          </tr>
        })}

      </table>
    </div>
  )
}

export default Cart