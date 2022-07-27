import React from 'react'

function Brands({brandsList}) {
  return (
    <div className="brands">
      <div className="small-container">
      <div className="row">
        {brandsList.map(brand=>{
          return<div className="col-5">
            <img key={brand.id} src={brand.image} alt=""/>
          </div>
        })}
      </div>
      </div>
    </div>
  )
}

export default Brands