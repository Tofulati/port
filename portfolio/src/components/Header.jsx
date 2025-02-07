import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css"

function Header() {
    return (
        <header className="header">
            <div className="header-content">
                <h1 className="name">Albert Ho</h1>
                <nav className="nav">
                    <Link to="/" className="about_link">About</Link>
                    <Link to="/resume" className="resume_link">Resume</Link>
                    <Link to="/research" className="research_link">Research</Link>
                    <Link to="/projects" className="projects_link">Projects</Link>
                    <Link to="/contact" className="contact_link">Contact</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header;