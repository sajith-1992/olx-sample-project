import React from 'react';
import './App.css';
import SignupPage from './Pages/Signup';
import { BrowserRouter, Routes, Route } from "react-router";
import Login from'./Pages/Login'





/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';

function App() {
  return (
    <BrowserRouter>

    <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignupPage/>} />
      <Route path="/login" element={<Login/>}/>



      
   
    </Routes>
      
    
    </div>

    </BrowserRouter>
  );
}

export default App;
