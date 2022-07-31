import React,{useState,useEffect} from 'react'
import NavBar from './NavBar'

function Cart({newArray}) {
  const [subtotal,setSubtotal]=useState(1)

  const[updatedArray,setUpdatedArray]=useState([])

  // setUpdatedArray(newArray)
  // useEffect(()=>{
  //   console.log(updatedArray)
  // })
  


 function handleChange(event){
     
     
   event.preventDefault()
   
    setSubtotal(event.target.value)
 }
 return (
   <div className='cart-box'>
 


      <table className='cart-table'>
        <thead className='t-head'>
          <tr className='row-1'>
            <th id='th-0'>...</th>
            <th id='th-1'>Product</th>
            <th id='th-2'>quantity</th>
            <th id='th-3'>subtotal</th>
          </tr>
        </thead>

        <tbody>
          {newArray.map(item=>{

            return<tr className='pushed-item'>
              <td className='t-data'>
                <div className='cart-info'>
                  <img className='cart-img' src={item.image}></img>
                </div>
              </td>
          
                <td className='t-data'>{item.title}</td>
                <td  className='t-data'><input className='cart-input' type="number" onChange={handleChange} ></input></td>
                <td  className='cart-price'>{item.price*(subtotal)}</td>
            </tr>
         
        }
        
        )}
        </tbody>

      </table>
    </div>
  )


  }
  export default Cart
