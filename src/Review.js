import React , {useCallback, useState} from "react";
import data from "./data.js";

export default function Review (){
  const [index , setIndex] = useState(0);  

  if(index===-1){
   setIndex(data.length-1);
  }

  if(index===data.length){
   setIndex(0);
  }

  //  even after setIndex() the bottom javascript is running off course before rerendering
  console.log(index);
  if(index<data.length){
     var {name , job , image , text} = data[index];
  }
  

  const pre = ()=>{
    setIndex(index-1);

  }
  const next = ()=>{
    setIndex(index+1);
  }

  const random =useCallback(()=>{
    let random = Math.floor(Math.random()*data.length);
   
    setIndex(random);
  },[])

  return (
    <>
  
    <h1>{index}</h1>
    <h1>{name}</h1>
    <h1>{job}</h1>
    <img src={image} alt="not found"/> 
    <h1>{text}</h1>

    <button onClick={()=>{pre()}} >Pre</button>
    <button onClick={()=>{random()}} >Random</button>
    <button onClick={()=>{next()}} >Next</button>
      
    </>

  )
}