import React from 'react'

function Filter({onCategoryChange}) {
  return (
    <select name="filter" onChange={onCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Fertilizer</option>
          <option value="Dairy">Herbicides</option>
          <option value="Dessert">Pesticides</option>
          <option value="Dessert"></option>
          <option value="Dessert">Pesticides</option>
        </select>
  )
}

export default Filter