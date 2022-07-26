import React,{useEffect,useState} from 'react';
import '../App.css';
import Banner from "./Banner"
import Body from './Body'
import Brands from './Brands';
import Footer from './Footer';


function App() {
  const [itemList,setItemList]=useState([])

  useEffect(()=>{
    fetch('http://localhost:3000/mainData')
      .then((resp)=>resp.json())
      .then((items)=>setItemList(items))
    
  },[]);
  return (
    <div className="App">
      <Banner/>
      <Body itemList={itemList}/>
      <Brands/>
      <Footer/>
      
    </div>
  );
}

export default App;
