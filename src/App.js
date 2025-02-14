
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

import { Helmet } from "react-helmet";



function App() {
    return (

        <Router>

<Helmet>
      <title>Kingz Of Kongo</title>
      <link 
                    href="https://fonts.googleapis.com/css2?family=Antonio:wght@100..700&display=swap"
                    rel="stylesheet"
                />
  </Helmet>

  
<Navbar1/>


        <div className="app-container"> 

          <div className="content">
          <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/devenir_membre" element={<Membership />} />
            <Route path="/nos_actions" element={<NosActions />} />
            <Route path="/donations" element={<Donations />} />
            <Route path="/contact" element={<Contact />} />

          </Routes>
          </div>


            </div>

            <Footer/>
            </Router>

    );
}

export default App;