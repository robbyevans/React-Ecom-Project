import React from 'react'

function Brands({brandsList}) {
  return (
    <div className="brands">
      <div className="small-container">
      <div className="row">
        {brandsList.map(brand=>{
          return<div className="col-5">
            <image id={brand.id} src={brand.image} alt=""></image>
          </div>
        })}
          
      </div>

      </div>

    </div>
  )
}

export default Brands