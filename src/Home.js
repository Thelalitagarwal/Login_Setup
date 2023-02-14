import React from "react";
import './App.css';
import { useLocation } from "react-router-dom";

export const Home = () => {
    const location=useLocation();
    const clickhan= ()=>{
      location.state=null;
      window.location="http://localhost:3000/";
    }
    console.log(location.state);
    if(location.state==null){
      window.location="http://localhost:3000/";
    }
    return (
      <>
      
    <div className="container">
        <h1>Welocome - {location.state.name}</h1>
        <br></br>
        <button  onClick={clickhan}>Logout</button>
    </div>
    </>
  )
}






