import React from 'react'

function NavBar() {

  return (
    <div className='nav-bar'>
        <nav>
          <ul id="menuItems">
            <li><a id="goBack" href="./index.html">Home</a></li>
            <li><a  href="#products">Products</a></li>
            <li><a  href="#contact">Contact</a></li>
          </ul>
        </nav>
        <img src="" alt=""/>
        <img className="menu-icon" src="../public/images/menu.png" onClick="menutoggle()"/>
    </div>
  )
}

export default NavBar