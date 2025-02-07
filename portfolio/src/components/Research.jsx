import React from "react";
// import gep from "../assets/Research/"
// import llnl from "../assets/Research/"
// import belieze from "../assets/Research/"
import temp from "../assets/temp.png"
import "./Research.css";

function Research() {
    const researchs = [
        {
            title: "Multi-omic profiling of age-specific human hematopoiesis",
            timeline: "October 2024 - Present",
            description: "Analyzed scRNA-sequencing algorithms (*CAT) using stem cell data. Data analysis revealed the algorithm could be used to reverse-engineer data originally found through consensus non-negative matrix factorization.",
            imageUrl: temp,
        },
        {
            title: "Lawerence Livermore National Laboratory Data Science Challenge",
            timeline: "August 2024 - October 2024",
            description: "During this two-week challenge, we were tasked with classifying/predicting heart ECG data from Kaggle and UCSD datasets. We developed and optimized machine learning models and classifiers utilizing scikit-learn, pandas, numpy, and pytorch. Finally, we presented a poster to peers and professionals in the field.",
            imageUrl: temp,
        },
        {
            title: "Exploring the Bird Tower Cave in 3D",
            timeline: "April 2023",
            description: "University of California, Merced Bobcat Day Anthropology LibraryCave Project. This project aimed to create a virtual visualization of the Belize Bird Tower. This visualization would allow users to explore the cave's scan while immersed in a 180-degree display.",
            imageUrl: temp,
        },
    ]

    return (
        <section id="research" className="research">
            <div className="research-content">
                <h2>My Research</h2>
                <div className="research-grid">
                    {researchs.map((research, index) => (
                        <div key={index} className="research-card">
                            <img src={research.imageUrl} alt={research.title} />
                            <h3>{research.title}</h3>
                            <p>{research.timeline}</p>
                            <p>{research.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Research;