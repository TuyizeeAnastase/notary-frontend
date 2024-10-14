import React from 'react';
import "./App.css"
 import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
 import Navbar from "./components/Navbar/Navbar";
 import Home from './components/pages/Home';
 import Contact from './components/pages/Contact';
 import About from './components/pages/About';
 import BookingForm from './components/pages/BookingForm';

 const App=()=>{
  return (
    <Router>
    <Navbar/>
    <main className='main-content'>
    <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/book/:id" element={<BookingForm />} />
        </Routes>
    </main>
    </Router>
  )
 }

export default App;