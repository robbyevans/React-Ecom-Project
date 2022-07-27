import React,{useEffect,useState} from 'react';
import '../App.css';
import Banner from "./Banner"
import Body from './Body'
import Brands from './Brands';
import Footer from './Footer';
import Filter from './Filter';


function App() {
  const [itemList,setItemList]=useState([])
  const [brandsList,setBrandsList]=useState([])

  useEffect(()=>{
    fetch('http://localhost:3000/mainData')
      .then((resp)=>resp.json())
      .then((items)=>setItemList(items))
    
  },[]);
  useEffect(()=>{
    fetch("http://localhost:3000/Brands")
    .then((resp)=>resp.json())
    .then((data)=>setBrandsList(data))
  },[])
  return (
    <div className="App">
      <Banner/>
      <Filter itemList={itemList}/>
      <Body itemList={itemList}/>
      <Brands brandsList={brandsList}/>
      <Footer/>
      
    </div>
  );
}

export default App;
