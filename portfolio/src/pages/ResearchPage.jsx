import React, { useState } from "react";
import "../styles/ResearchPage.css";

function ResearchPage() {
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    const researchs = [
        {
            title: "Multi-omic profiling of age-specific human hematopoiesis",
            timeline: "October 2024 - Present",
            description: "Analyzed scRNA-sequencing algorithms (*CAT) using stem cell data. Data analysis revealed the algorithm could be used to reverse-engineer data originally found through consensus non-negative matrix factorization.",
            pdfLink: "https://github.com/Tofulati/cd34hult",
        },
        {
            title: "Lawrence Livermore National Laboratory Data Science Challenge",
            timeline: "August 2024 - October 2024",
            description: "During this two-week challenge, we were tasked with classifying/predicting heart ECG data from Kaggle and UCSD datasets. We developed and optimized machine learning models and classifiers utilizing scikit-learn, pandas, numpy, and pytorch. Finally, we presented a poster to peers and professionals in the field.",
            pdfLink: "../assets/project/Final_Poster.pdf",
        },
        {
            title: "Exploring the Bird Tower Cave in 3D",
            timeline: "April 2023",
            description: "University of California, Merced Bobcat Day Anthropology LibraryCave Project. This project aimed to create a virtual visualization of the Belize Bird Tower. This visualization would allow users to explore the cave's scan while immersed in a 180-degree display.",
            pdfLink: "../assets/project/Poster1_Exploring the Bird Tower Cave in 3D.pdf",
        },
    ];

    return (
        <section id="research" className="research">
            <div className="research-content">
                <h2>My Research</h2>
                <div className="research-grid">
                    {researchs.map((research, index) => (
                        <div key={index} className="research-card">
                            <h3>{research.title}</h3>
                            <p>{research.timeline}</p>
                            <p>{research.description}</p>
                            <button
                                className="dropdown-button"
                                onClick={() => toggleDropdown(index)}
                            >
                                Project Resources 
                            </button>
                            {openDropdown === index && (
                                <div className="dropdown-content">
                                    <a href={research.pdfLink} target="_blank" download>
                                        Download File
                                    </a>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ResearchPage;
