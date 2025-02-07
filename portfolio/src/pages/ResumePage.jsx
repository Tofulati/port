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
  return (
    <div className="resume-page">
        <section className="resume-header">
            <div className="resume-title">
            <h2>My Resume</h2>
            </div>
        </section>

        <section className="experience-container">
            <h2 className="experience-title">Experience</h2>

            <a href={resumePDF} download="AlbertHo_Resume.pdf" className="download-btn">
            DOWNLOAD CV
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
                <div className="experience-description">
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
                <div className="experience-description">
                    <p>
                    • Enhanced diagnostic recall scoring for ventricular aarrhythmias by developing a machine learning model. Compared
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

            <div className="experience-item">
                <div className="experience-details">
                    <h3>May 2023 - January 2024</h3>
                    <p className="job-title">Student Research Intern</p>
                    <p>University of California, Merced: School of Social Sciences and Humanities</p>
                    <p>Merced, CA</p>
                </div>
                <div className="experience-description">
                    <p>
                    • Developed an Unreal Engine 3D simulation application of an archaeological site in Central Valley, California
                    </p>
                    <p>
                    • Implemented .fbx scan models, realistic lighting textures, and object interactions utilizing C++/Unreal modules
                    </p>
                    <p>
                    • Presented finalized application on UC Merced’s Wide Area Visualization Environment
                    </p>
                </div>
            </div>

            <div className="experience-item">
                <div className="experience-details">
                    <h3>September 2022 - January 2024</h3>
                    <p className="job-title">Frontend Web Developer</p>
                    <p>Association for Computing Machinery</p>
                    <p>Merced, CA</p>
                </div>
                <div className="experience-description">
                    <p>
                    • Developed a functional, responsive website interface by creating dynamic text and image displays using HTML, 
                    CSS, and JavaScript. Enhanced scalability and development efficiency by integrating React into the workflow.
                    </p>
                    <p>
                    • Optimized data integration processes by connecting the front-end to a Firebase database.
                    </p>
                </div>
            </div>
        </section>

        <section className="education-container">
            <h2 className="education-title">Education</h2>
        </section>

        <section className="education-section">
            <div className="education-item">
                <div className="education-details">
                    <img src={UCSD}></img>
                    <h3>University of California, San Diego</h3>
                </div>
                <div className="education-description">
                    <p>
                    La Jolla, CA
                    </p>
                    <p>
                    Bachelor’s of Science, Computer Science
                    </p>
                    <p>
                    September 2024 - June 2026
                    </p>
                    <p>
                    • Relevant coursework: Data Structures, Algorithms, Engineering Probability and Statistics
                    </p>
                </div>
            </div>

            <div className="education-item">
                <div className="education-details">
                    <img src={UCM}></img>
                    <h3>University of California, Merced</h3>
                </div>
                <div className="education-description">
                    <p>
                    Merced, CA
                    </p>
                    <p>
                    Bachelor’s of Science, Computer Science and Engineering
                    </p>
                    <p>
                    August 2022 - May 2024
                    </p>
                    <p>
                    • Relevant coursework: Data Structures, Assembly and Computer Language, Discrete Math
                    </p>
                </div>
            </div>
        </section>

        {/* <section className="skills-container">
            <h2 className="skills-title">Skills</h2>
        </section>

        <section className="skills-section">
            <div className="skills-item">
                <div className="skills-details">
                    <h3>Languages</h3>
                </div>
                <div className="skills-description">
                    <img src={python}></img>
                    <img src={r}></img>
                    <img src={cpp}></img>
                    <img src={html}></img>
                    <img src={css}></img>
                    <img src={java}></img>
                </div>
            </div>

            <div className="skills-item">
                <div className="skills-details">
                    <h3>Frameworks</h3>
                </div>
                <div className="skills-description">
                    <img src={react}></img>
                    <img src={node}></img>
                </div>
            </div>

            <div className="skills-item">
                <div className="skills-details">
                    <h3>Developer Tools</h3>
                </div>
                <div className="skills-description">
                    <p>Git</p>
                    <p>Github</p>
                    <p>Visual Studio Code</p>
                    <p>Firebase</p>
                    <p>PyCharm</p>
                    <p>XCode</p>
                    <p>Unreal Engine</p>
                </div>
            </div>

            <div className="skills-item">
                <div className="skills-details">
                    <h3>Libraries</h3>
                </div>
                <div className="skills-description">
                    <p>scikit-learn</p>
                    <p>sklearn</p>
                    <p>tensorflow</p>
                    <p>PyTorch</p>
                    <p>Jupyter</p>
                    <p>pandas</p>
                    <p>NumPy</p>
                    <p>Matplotlib</p>
                    <p>D3.js</p>
                </div>
            </div>

            <div className="skills-item">
                <div className="skills-details">
                    <h3>Certifications</h3>
                </div>
                <div className="skills-description">
                    <p>CodePath Certificate in Intro to Android Mobile Development</p>
                </div>
            </div>
        </section> */}
    </div>
  );
}

export default ResumePage;
