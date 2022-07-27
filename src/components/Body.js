import React,{useState} from 'react'
import ItemContainer from './ItemContainer'
import Filter from './Filter';


function Body({itemList}) {

  const newArray=[]
  const [selectedCategory, setSelectedCategory] = useState("All");


  function pushItem(item){
    newArray.push(item)
    console.log(newArray)
    // setPushedItem(newArray)
    // console.log(pushedItem)
  }


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
    <ItemContainer itemsToDisplay={itemsToDisplay} newArray={newArray} pushItem={pushItem}/>
  </div>
</div>
  )
}

export default Body