import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './pages';
import Main from './pages/main'
import About from './pages/about';
import Update from './pages/update';
import { useEffect, useState } from "react";
 
function App() {
    const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://seventeen-albums-right-here.onrender.com")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  },[]);

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/main' element={<Main />} />
                <Route path='/about' element={<About />} />
                <Route path='/update/:id' element={<Update />} />
            </Routes>
        </Router>
    );
}
 
export default App;