import React from "react";
import "./About.css"
import image from "../assets/about_img.png"

function About() {
    return (
        <section id="about" className="about">
            <div className="about-content">
                <div className="about-text">
                    <h2>About me</h2>
                    <p>
                        3rd year Computer Science undergraduate @ the University of California, San Diego
                    </p>
                    <p>
                        I am an enthusiastic and highly motivated undergraduate student working towards a B.S.
                        in Computer Science, and eventually a M.S. in Computer Science. I am interested in human
                        computer interactions and machine learning, especially in the integration and development
                        of VR/AR. Also, I am eager to learn more about the technology and problem solving within the 
                        sector of computer sciences. Please reach out for any opportunities or internships, I would love to get in touch. 
                    </p>
                </div>
                <div className="about-image">
                    <img src= {image} alt="Albert Ho"/>
                </div>
            </div>
        </section>
    )
}

export default About;