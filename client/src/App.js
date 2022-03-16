import logo from './logo.svg';
import React, {useState} from "react";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import Home from './components/Home'

function App() {
 
  return (
    
    <div>
      <Router>
        <Routes>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/home' element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
