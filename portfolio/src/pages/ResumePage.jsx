import { useState, useEffect } from "react";
import resumePDF from "../assets/AlbertHo_Resume.pdf";
import cpp from "../assets/Icons/c-.png";
import css from "../assets/Icons/css-3.png";
import github from "../assets/Icons/github.png";
import html from "../assets/Icons/html.png";
import java from "../assets/Icons/java.png";
import node from "../assets/Icons/node-js.png";
import python from "../assets/Icons/python.png";
import r from "../assets/Icons/r.png";
import react from "../assets/Icons/science.png";
import wordpress from "../assets/Icons/wordpress.png";
import UCSD from "../assets/UCSD.png";
import UCM from "../assets/UCM.png";
import "../styles/ResumePage.css"; // Import the CSS file

function ResumePage() {
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

    return (
        <div 
            className="resume-page" 
            style={{ background: `linear-gradient(to bottom, ${getGradient()}, #CBBBA0)`, minHeight: "100vh", transition: "background 0.3s ease-in-out" }}
        >
            <section className="resume-header">
                <div className="resume-title" style={{ textShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)" }}>
                    <h2>My Resume</h2>
                </div>
            </section>

        <section className="experience-container">
            <h2 className="experience-title" style={{ textShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)" }}>Experience</h2>

            <a href={resumePDF} download="AlbertHo_Resume.pdf" className="download-btn">
                DOWNLOAD RESUME
            </a>
        </section>

        <section className="experience-section">
            <div className="experience-item">
                <div className="experience-details">
                    <h3>October 2024 - Present</h3>
                    <p className="job-title">Student Research Intern</p>
                    <p>University of California, San Diego Health</p>
                    <p>La Jolla, CA</p>
                </div>
                <div className="experience-description" style={{ fontWeight: "500", letterSpacing: "0.5px" }}>
                    <p>
                    • Utilized clustering techniques such as UMAP and conducted differential expression analysis using *CAT data.
                    Retrieved data revealed additional gene expression patterns that were not as prevalent in previous research.
                    </p>
                    <p>
                    • Analyzed scRNA-sequencing algorithms (*CAT) using stem cell data. Data analysis revealed the algorithm could
                    be used to reverse-engineer data originally found through consensus non-negative matrix factorization.
                    </p>
                    <p>
                    • Processed large datasets and SEURAT objects with over 57,000 samples utilizing tools like Pandas and R.
                    </p>
                </div>
            </div>

            <div className="experience-item">
                <div className="experience-details">
                    <h3>July 2024 - August 2024</h3>
                    <p className="job-title">Data Science Intern</p>
                    <p>Lawrence Livermore National Laboratory</p>
                    <p>Livermore, CA</p>
                </div>
                <div className="experience-description" style={{ fontWeight: "500", letterSpacing: "0.5px" }}>
                    <p>
                    • Enhanced diagnostic recall scoring for ventricular arrhythmias by developing a machine learning model. Compared
                    algorithms like Logistic Regression, Random Forest, and CNNs, achieving highest recall with XGBoost.
                    </p>
                    <p>
                    • Boosted recall scores from 80% to 99% by implementing a convolutional neural network for sequence-to-sequence
                    prediction. Utilized hyper-parameterization to optimize model performance.
                    </p>
                    <p>
                    • Processed and labeled large datasets (over 16,000 samples) using Pandas dataframes for training and testing
                    </p>
                </div>
            </div>
        </section>

        <section className="education-container">
            <h2 className="education-title" style={{ textShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)" }}>Education</h2>
        </section>

        <section className="education-section">
            <div className="education-item">
                <div className="education-details">
                    <img src={UCSD} alt="UCSD Logo"></img>
                    <h3>University of California, San Diego</h3>
                </div>
                <div className="education-description" style={{ fontWeight: "500", letterSpacing: "0.5px" }}>
                    <p>La Jolla, CA</p>
                    <p>Bachelor’s of Science, Computer Science</p>
                    <p>September 2024 - June 2026</p>
                    <p>• Relevant coursework: Data Structures, Algorithms, Engineering Probability and Statistics</p>
                </div>
            </div>

            <div className="education-item">
                <div className="education-details">
                    <img src={UCM} alt="UCM Logo"></img>
                    <h3>University of California, Merced</h3>
                </div>
                <div className="education-description" style={{ fontWeight: "500", letterSpacing: "0.5px" }}>
                    <p>Merced, CA</p>
                    <p>Bachelor’s of Science, Computer Science and Engineering</p>
                    <p>August 2022 - May 2024</p>
                    <p>• Relevant coursework: Data Structures, Assembly and Computer Language, Discrete Math</p>
                </div>
            </div>
        </section>
    </div>
  );
}

export default ResumePage;
