
import { useState, useEffect } from 'react';
const ExportToExcel = () => {
 
  const [myData,setMyData]=useState([]);
     
  const getData=async()=>{
 
     const res= await fetch("https://fakestoreapi.com/products");
     setMyData(await res.json())
      console.log(myData)
  }
useEffect(()=>{
 getData()
 },[])
  
    return (
    <div>
      
     
    </div>
  );
};
export default ExportToExcel;