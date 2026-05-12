import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import LearnMore from "./pages/LearnMore";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Buy from "./pages/Buy";
import Rent from "./pages/Rent";
import Financing from "./pages/Financing";
import AboutUs from "./pages/AboutUs";


function App(){
    return(
  <div>

   <Router>
     <Navbar />
     
        <Routes>
         <Route path="/" element={<Home />} /> 
          <Route path="/learnmore" element={<LearnMore />} />  
          <Route path="/buy" element={<Buy />} />  
          <Route path="/rent" element={<Rent />} />  
          <Route path="/financing" element={<Financing />} />  
          <Route path="/aboutus" element={<AboutUs />} />  

        </Routes>
    </Router>
  </div>
    )
}

export default App;