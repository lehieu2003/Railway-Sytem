// import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./home";
import Navbar from "./components/Navbar";
import Register from "./register";
import Login from "./login";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> 
      </Routes>
    </Router>
  );
}

export default App;
