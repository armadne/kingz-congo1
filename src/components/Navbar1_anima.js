import React from "react";
import { Link } from 'react-router-dom';
import "./css_components/Navbar1.css";

function Navbar1() {
    return(
        <div class="navbar">
                    <div class="off-screen-menu">
        <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/devenir_membre">Membership</Link></li>
                <li><Link to="/nos_actions">Nos Actions</Link></li>
                <li><Link to="/donations">Faire un Don</Link></li>
                <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
  
      <nav>
        <div class="ham-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
  

        </div>


    )
}

export default Navbar1;