
import React,{useState} from 'react'
import Cart from './Cart'

function NavBar({newArray}) {
  const[isTrue,setIsTrue]=useState(true)

  function handleClick(){
    setIsTrue(!isTrue)
  }



  return (
    <div className='nav-bar'>
        <nav>
          <ul id="menuItems">
            <li><a id="goBack" href="./">Home</a></li>
            <li><a  href="#products">Products</a></li>
            <li><a  href="#contact">Contact</a></li>
            <li><img onClick={handleClick} className='cart' src='./images/cart.png'></img></li>
            {isTrue ? <Cart newArray={newArray}  /> : null}
          </ul>
        </nav>
        {/* <img src="" alt=""/>
        <img className="menu-icon" src="../public/images/menu.png" onClick="menutoggle()"/> */}
    </div>
  )
}

export default NavBar