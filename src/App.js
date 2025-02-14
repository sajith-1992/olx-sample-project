import React from 'react';
import './App.css';
import SignupPage from './Pages/Signup';
import { BrowserRouter, Routes, Route } from "react-router";



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
    </Routes>
      
    
    </div>

    </BrowserRouter>
  );
}

export default App;
