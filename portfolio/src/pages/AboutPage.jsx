import React from "react";
import "../styles/AboutPage.css";
import image from "../assets/about_img.png";
import linkedinLogo from "../assets/Icons/linkedin.png";
import githubLogo from "../assets/Icons/github.png"

const people = [
  {
    name: "Albert Ho",
    role: "Researcher/Student",
    imageUrl: image,
    linkedinUrl: "https://www.linkedin.com/in/albertho",
    githubUrl: "https://www.github.com/tofulati",
  },
];

function AboutPage() {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            3rd year Computer Science undergraduate @ the University of
            California, San Diego
          </p>
          <p>
            I am an enthusiastic and highly motivated undergraduate student
            working towards a B.S. in Computer Science, and eventually an M.S.
            in Computer Science. I am interested in human-computer interactions
            and machine learning, especially in the integration and development
            of VR/AR. Also, I am eager to learn more about the technology and
            problem-solving within the sector of computer sciences. Please
            reach out for any opportunities or internships; I would love to get
            in touch.
          </p>
        </div>
        <div className="team-section">
          <ul className="team-list">
            {people.map((person) => (
              <li key={person.name} className="team-member">
                <img
                  alt={person.name}
                  src={person.imageUrl}
                  className="team-image"
                />
                <h3 className="team-name">{person.name}</h3>
                <p className="team-role">{person.role}</p>
                <ul className="team-links">
                  <li>
                    <a
                      href={person.linkedinUrl}
                      className="team-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={linkedinLogo}
                        alt="LinkedIn"
                        className="linkedin-logo"
                      />
                    </a>
                  </li>
                  <li>
                  <a
                      href={person.githubUrl}
                      className="team-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={githubLogo}
                        alt="LinkedIn"
                        className="github-logo"
                      />
                    </a>
                  </li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
