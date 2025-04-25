
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./comnponents/Navbar";
import Home from "./pages/Home";
import Songs from "./pages/Songs";
import SongDetails from "./pages/SongDetails";
import Users from "./pages/Users";
import Login from "./pages/Login";



import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/songs" element={<Songs />} />
          <Route path="/songs:id" element={<SongDetails />} />
          <Route path="/users" element={<Users />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
    
    </Router>
  
  );
}

export default App;
