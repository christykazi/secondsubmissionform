import React from "react";/* 
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; */
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";


import Login from "./components/Login";
import Signup from "./components/Signup";


function App() {
  return (
    <> 
      
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Login/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
