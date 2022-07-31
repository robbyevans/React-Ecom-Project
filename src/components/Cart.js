import React,{useState,useEffect} from 'react'
import NavBar from './NavBar'

function Cart({newArray}) {

  console.log(newArray)
  return (
    <div className='cart-box'>
      <h1>Hello iam cart</h1>

      {/* <div className= 'cart-page'></div> */}
      <table className='cart-table'>
        <tr className='row-1'>
          <th id='th-0'>...</th>
          <th id='th-1'>Product</th>
          <th id='th-2'>quantity</th>
          <th id='th-3'>subtotal</th>
        </tr>

        {newArray.map(item=>{
          return<tr className='pushed-item'>
            <td>
              <div className='cart-info'>
                <img src={item.image}></img>
              </div>
            </td>
            
              <td>{item.title}{item.price}</td>
              <td><input  type="number"></input></td>
              <td>{item.price}</td>
          </tr>
         
        }
        
        )}

      </table>
    </div>
  )


  }
  export default Cart
