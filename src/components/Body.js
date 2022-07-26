import React from 'react'
import ItemContainer from './ItemContainer'

function Body({itemList}) {
  return (
    <div className="small-container">
      <ItemContainer itemList={itemList}/>
    </div>
  )
}

export default Body