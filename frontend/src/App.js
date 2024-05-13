import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Testimonial from './pages/Testimonial';


const App = () => {
  return (
    <>
      <BrowserRouter>
      
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/service" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/testimonial" element={<Testimonial/>} />
        
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
