import React from 'react'
import NavBar from './NavBar'


function Banner() {
  return (
    <div className='header'>
      <div className='container'>
        <NavBar/>
        <div class="col-2 row row-1" >
        <div class=" col-header">
          <h1>AGROCHEM</h1>
          <h2>Everything Farming </h2>
          <p>All your farm chemicals in one place  <br/>Free delivery countrywide for orders above ksh 2500</p>
          <a href="#explore"class='btn'>Expore Now &#10142; </a>
        </div>
       
      </div>
      </div>
    </div>
  )
}

export default Banner