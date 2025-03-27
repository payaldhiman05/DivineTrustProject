import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/Page Components/About";
import TempleTimings from "./Components/Page Components/Templetiming";
import Contact from "./Components/Page Components/Contact";
import Services from "./Components/Page Components/Service";
import History from "./Components/Page Components/History";
import Footer from "./Components/Footer";
import Donate from "./Components/Page Components/Donate"


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/temple-timings" element={<TempleTimings />} />
        <Route path="/history" element={<History />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donatebtn" element={<Donate/>}/>
      </Routes>
      <Footer />
      
    </Router>
  );
};

export default App;
