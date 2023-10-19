import { useState } from 'react'
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import './App.css'
import Navbar from './Navbar/Navbar';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  

  return (
    <>
    <Router>

      <Navbar />
      <Routes>
        <Route exact path="/" element = {<Home/>}/>
        <Route Path = "/login" element = {<Login/>} />
        {/* <Route Path = "/auth" element = {<Authentication/>} /> */}
        
      </Routes>
    </Router>
      
    </>
  )
}

export default App