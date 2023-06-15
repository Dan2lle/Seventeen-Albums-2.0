import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './pages';
import Main from './pages/main'
import About from './pages/about';
 
function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/main' element={<Main />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </Router>
    );
}
 
export default App;