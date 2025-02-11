
import React from "react";
import "./App.css"; // importation du fichier CSS


import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


import Navbar1 from "./components/Navbar1_anima";

import Footer from "./components/Footer";
import Home from "./pages/Home"; 
import About from "./pages/About";
import Membership from "./pages/Membership";
import NosActions from "./pages/Nos_Actions";
import Donations from "./pages/Donations";
import Contact from "./pages/Contact";



function App() {
    return (
        <Router>

        <div className="app-container"> 

        

            

            <Navbar1/>



            <Routes>
              

              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/devenir_membre" element={<Membership />} />
              <Route path="/nos_actions" element={<NosActions />} />
              <Route path="/donations" element={<Donations />} />
              <Route path="/contact" element={<Contact />} />

            </Routes>

            <Footer />

            </div>

            </Router>

    );
}

export default App;