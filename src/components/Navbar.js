import React from "react";
import { Link } from 'react-router-dom';
import "./css_components/Navbar.css"; // Fichier CSS spécifique au Navbar

function Navbar() {
    return(
        <nav className="navbar">
            <h1 className="logo">Kingz of Kongo</h1>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/devenir_membre">Membership</Link></li>
                <li><Link to="/nos_actions">Nos Actions</Link></li>
                <li><Link to="/donations">Faire un Don</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;