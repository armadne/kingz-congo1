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
      <div className={`ham-menu ${menuOpen ? "active" : ""}`} 
      onClick={toggleMenu}>
          <span></span> {/* Premiere barre */}
          <span></span> {/* Deuxieme barre */}
          <span></span> {/* Troisieme barre */}
        </div>
      </nav>

</div>
        
    );
}

export default Navbar1; // Export du composant pour pouvoir l'utiliser ailleurs