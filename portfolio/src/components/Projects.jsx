import React from "react";
// import gep from "../assets/Projects/"
// import llnl from "../assets/Projects/"
// import belieze from "../assets/Projects/"
import temp from "../assets/temp.png"
import "./Projects.css";

function Projects() {
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
        <section id="projects" className="projects">
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

export default Projects;