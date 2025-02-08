import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <div className="header-content">
                <h1 className="name">Albert Ho</h1>
                <div className="menu-toggle" onClick={toggleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <nav className={`nav ${menuOpen ? "active" : ""}`}>
                    <Link to="/" className="about_link" onClick={toggleMenu}>About</Link>
                    <Link to="/resume" className="resume_link" onClick={toggleMenu}>Resume</Link>
                    <Link to="/research" className="research_link" onClick={toggleMenu}>Research</Link>
                    <Link to="/projects" className="projects_link" onClick={toggleMenu}>Projects</Link>
                    <Link to="/contact" className="contact_link" onClick={toggleMenu}>Contact</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
