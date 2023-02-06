import React from "react";
import {  BrowserRouter, BrowserRouter as  Router, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from "./components/About";
import services from "./components/services";
import contact from "./components/contact";
import policy from "./components/policy";


const App=()=>{
 return(
  <><list/>
  <BrowserRouter>
    
    <Router>
      <Routes exact path="/" element={<Home/>}/>
      <Routes path="/" element={<About/>}/>
      <Routes path="/" element={<services/>}/>
      <Routes path="/" element={<contact/>}/>
      <Routes path="/" element={<policy/>}/>
      </Router>
      
      </BrowserRouter>
    </>
 );

}
export default App;
