import React, { useState } from "react";
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";
import { Home } from "./Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";


function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const [arrm, setarrm] = useState([
    {
        "Name" : "Samiksha",
        "Email": "samikshaa32@gmail.com",
        "Password" : "Samiksha@2002"
    },
    {
        "Name" : "Lalit",
        "Email": "lalitagarwal8278@gmail.com",
        "Password" : "Lalit@2002"
    },
    {
        "Name" : "Manisha",
        "Email": "manishaa32@gmail.com",
        "Password" : "a@2002"
    },
    {
        "Name" : "Shibu",
        "Email": "shibu32@gmail.com",
        "Password" : "Shibu@2002"
    },
    {
        "Name" : "Kanak",
        "Email": "kanak32@gmail.com",
        "Password" : "Kanak@2002"
    }
])

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }


  return (
    <>
    <Router>
      
    <div className="App">
      <Routes >
        
          <Route path="/" element={<Login arrm={arrm}/>} />
          <Route path="/Login" element={<Login arrm={arrm}/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/Register" element={<Register/>} />        
          </Routes >
          </div>
      </Router>
      </>
  );
}

export default App;