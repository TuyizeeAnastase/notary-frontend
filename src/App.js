import React from 'react';
import "./App.css"
 import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
 import Navbar from "./components/Navbar/Navbar";
 import Home from './components/pages/Home';
 import Contact from './components/pages/Contact';
 import About from './components/pages/About';

 const App=()=>{
  return (
    <Router>
    <Navbar/>
    <main className='main-content'>
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </main>
    </Router>
  )
 }

export default App;