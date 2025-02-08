import { useState, useEffect } from "react";
import React from "react";
import temp from "../assets/Icons/github.png"
import "../styles/ProjectsPage.css";

function ProjectsPage() {
    const [scrollY, setScrollY] = useState(0);
          
        useEffect(() => {
            const handleScroll = () => {
                setScrollY(window.scrollY);
            };
    
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }, []);
    
        // Calculate gradient based on scroll position
        const getGradient = () => {
            const startColor = [231, 220, 201]; // Beige (#E7DCC9)
            const endColor = [203, 187, 160];  // Darker beige (#CBBBA0)
    
            const ratio = Math.min(scrollY / 500, 1); // Limits the change up to 500px scroll
            const r = Math.round(startColor[0] * (1 - ratio) + endColor[0] * ratio);
            const g = Math.round(startColor[1] * (1 - ratio) + endColor[1] * ratio);
            const b = Math.round(startColor[2] * (1 - ratio) + endColor[2] * ratio);
    
            return `rgb(${r}, ${g}, ${b})`;
    };  

    const projectss = [
        {
            title: "MewsiCat Mobile App",
            description: "Music and cats meet. A social media app based around discovering new music and finding new feline friends utilizing the Spotify API.",
            project_link: "https://github.com/MewsiCat/react-native-app", 
            imageUrl: temp,
        },
        {
            title: "Earth Equity (NASA Space Apps Challenge)",
            description: "A webpage project utillizing NASA time-series datasets for stock market trend indicators for data visualization.",
            project_link: "http://earthequity.study/",
            imageUrl: temp,
        },
        {
            title: "UCM Association for Computer Machinery Webpage",
            description: "University of California, Merced's Association for Computer Machinery Webpage",
            project_link: "https://github.com/Tofulati/UCM-ACM-Website",
            imageUrl: temp,
        },
    ]

    return (
        <section id="projects" className="projects"
        style={{ background: `linear-gradient(to bottom, ${getGradient()}, #CBBBA0)`, minHeight: "100vh", transition: "background 0.3s ease-in-out" }}
        >
            <div className="projects-content">
                <h2>My Projects</h2>
                <div className="projects-grid">
                    {projectss.map((projects, index) => (
                        <div key={index} className="projects-card">
                            <img src={projects.imageUrl} alt={projects.title} />
                            <h3>{projects.title}</h3>
                            <p><a href={projects.project_link} target="_blank">View the Project</a></p>
                            <p>{projects.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProjectsPage;