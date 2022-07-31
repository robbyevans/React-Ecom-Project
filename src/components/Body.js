import React,{useState} from 'react'
import ItemContainer from './ItemContainer'
import Filter from './Filter';


function Body({itemList,pushItem}) {


  const [selectedCategory, setSelectedCategory] = useState("All");


 


  // setPushedItem(newArray)
  // console.log(pushedItem)




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
    
    
    function handleAddToCart(event){
      console.log(event.target.id)

    }

  return (
<div>
<Filter handleCategoryChange={handleCategoryChange}/>
  <div className="small-container">
    <ItemContainer itemsToDisplay={itemsToDisplay}  pushItem={pushItem}/>
  </div>
</div>
  )
}

export default Body