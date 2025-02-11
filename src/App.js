
import React from "react";
import "./App.css"; // importation du fichier CSS

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


import Navbar from "./components/Navbar1_anima";
import Footer from "./components/Footer";
import Home from "./pages/Home"; 
import About from "./pages/About";
import Membership from "./pages/Membership";
import NosActions from "./pages/Nos_Actions";
import Donations from "./pages/Donations";
import Contact from "./pages/Contact";



function App() {
    return (
        <div className="app-container"> 

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap" rel="stylesheet"></link>
        
        
            {/*<Navbar />  {/* dans la page Accueil : Affiche d'abord navabar, la partie Home ensuite le footer  */}
            <Router>

            <Navbar/>

                <Routes>
              

                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/devenir_membre" element={<Membership />} />
                <Route path="/nos_actions" element={<NosActions />} />
                <Route path="/donations" element={<Donations />} />
                <Route path="/contact" element={<Contact />} />

                </Routes>

                <Footer />
                
            </Router>

            
        </div>
    );
}

export default App;