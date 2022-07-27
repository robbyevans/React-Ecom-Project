import React,{useState} from 'react'
import ItemContainer from './ItemContainer'
import Filter from './Filter';

function Body({itemList}) {

  const [selectedCategory, setSelectedCategory] = useState("All");


  function handleCategoryChange(event) {
    // console.log(event)
    // console.log(event.target.value)
    setSelectedCategory(event.target.value);

  }

    const itemsToDisplay = itemList.filter((item) => {
      if (selectedCategory === "All") return true;

  
     
      return item.category === selectedCategory;
    }
    );
    // console.log(itemsToDisplay)
    // setItemList(itemsToDisplay)

  

  return (
<div>
<Filter handleCategoryChange={handleCategoryChange}/>
  <div className="small-container">
    <ItemContainer itemsToDisplay={itemsToDisplay}/>
  </div>
</div>
  )
}

export default Body