import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./css_components/Navbar1.css";

function Navbar1() {
    

      // Etat pour gérer l'affichage du menu
      
      const [menuOpen, setMenuOpen] = useState(true);

      // Fonction pour basculer le menu

      const toggleMenu = () => {
        setMenuOpen(!menuOpen);
      };

      return(


        <div className="navbar">
          {/* Menu latéral */}

          <div className={`off-screen-menu ${menuOpen ? "active" : ""}`}>
        <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/devenir_membre">Membership</Link></li>
                <li><Link to="/nos_actions">Nos Actions</Link></li>
                <li><Link to="/donations">Faire un Don</Link></li>
                <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>

      {/* Icone menu hamburger */}
  
      <nav>

        <div className="logo-container">

      <img src="/kingz-congo-img.jpg" alt="logo" />
      <h1 className="website_title">Kingz Of Kongo</h1>

        </div>
        </nav>





      <div className={`ham-menu ${menuOpen ? "active" : ""}`}   // "menuOpen ? " : Est ce que le menu est ouvert
      onClick={toggleMenu}>
          <span></span> {/* Premiere barre */}
          <span></span> {/* Deuxieme barre */}
          <span></span> {/* Troisieme barre */}
        </div>
</div>


        
    );
}

export default Navbar1; // Export du composant pour pouvoir l'utiliser ailleurs