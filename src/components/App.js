import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import React,{useEffect,useState} from 'react';
import '../App.css';
import Banner from "./Banner"
import Body from './Body'
import Brands from './Brands';
import Footer from './Footer';




function App() {
  const [itemList,setItemList]=useState([])
  const [brandsList,setBrandsList]=useState([])
  const [nwArray,setNewArray]=useState([])

  const newArray=[]




  useEffect(()=>{
    fetch('http://localhost:3000/mainData')
      .then((resp)=>resp.json())
      .then((items)=>setItemList(items))
    

  },[]);
  useEffect(()=>{
    fetch("http://localhost:3000/Brands")
    .then((resp)=>resp.json())
    .then((data)=>setBrandsList(data))
  },[]);

  function pushItem(item){
    newArray.push(item)
    console.log(newArray)
    
    // setPushedItem(newArray)
    // console.log(pushedItem)

  }
  
  // setNewArray(newArray)

  return (
    <div className="App">

      <Banner newArray={newArray}/>

      <Body
       itemList={itemList} 
       setItemList={setItemList}
        
       pushItem={pushItem}/>
      <Brands brandsList={brandsList}/>
      {/* <Comment/> */}
      <Footer/>
      {/* <Cart newArray={newArray}/> */}
      
    </div>
  );

}

export default App;
