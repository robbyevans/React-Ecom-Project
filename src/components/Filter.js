import React from 'react'

function Filter({handleCategoryChange}) {
  

 



  return (
    <div class="filter-wrapper">
      <select  className="filter"  onChange={handleCategoryChange}>
            <option value="All">Filter by category</option>
            <option value="fertilizer">Fertilizer</option>
            <option value="Herbicide">Herbicides</option>
            <option value="pesticide">Pesticides</option>
            <option value="multi-vitamin">Multi-vitamins</option>
            <option value="machinery">Machinery</option>
      </select>
       {/* <btn className="filter-btn" >Search</btn> */}
    </div>
  )
}

export default Filter