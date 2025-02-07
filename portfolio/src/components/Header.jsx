import React from "react";
import "./Header.css"

function Header() {
    return (
        <header className="header">
            <div className="header-content">
                <h1 className="name">Albert Ho</h1>
                <nav className="nav">
                    <a href="#about">About</a>
                    <a href="#research">Research</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </nav>
            </div>
        </header>
    )
}

export default Header;