import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from './pages/Home';
import Hosting from './pages/Hosting';
import Domain from './pages/Domain';
import About from './pages/About';
import Contact from './pages/Contact';
import Auth from './pages/Auth';
import Navbar from './components/Navbar';




const App = () => {
  const location = useLocation()
  const hideHeaderFooter = ['/auth'].includes(location.pathname); 
  return (
    <div>
      {!hideHeaderFooter && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hosting" element={<Hosting />} />
        <Route path="/domain" element={<Domain />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </div>
  );
};

export default App;

