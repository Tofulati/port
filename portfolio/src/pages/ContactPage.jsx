import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import "../styles/ContactPage.css";

function ContactPage() {
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

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            user_name: name, 
            user_email: email,
            message: message,
        };

        emailjs
            .send(
                "service_tpttfjz",
                "template_g6oa9e9",
                templateParams,
                "IM2LGsNo1BJStRkU3"
            )
            .then(
                (response) => {
                    console.log("Email sent successfully!", response.status, response.text);
                    alert("Your message was sent!");
                },
                (error) => {
                    console.error("Error sending email:", error);
                    alert("Failed to send the message. Please try again.");
                }
            );

        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <section id="contact" className="contact"
        style={{ background: `linear-gradient(to bottom, ${getGradient()}, #CBBBA0)`, minHeight: "100vh", transition: "background 0.3s ease-in-out" }}
        >
            <div className="contact-content">
                <h2>Get in Touch</h2>
                <p>
                    I am always excited to meet new people with interesting ideas. Please feel free to fill out the form below to contact me.
                </p>
                <div className="contact-details">
                    <div className="contact-item">
                        <BuildingOffice2Icon className="icon" />
                        <span>Fremont, California</span>
                    </div>
                    <div className="contact-item">
                        <PhoneIcon className="icon" />
                        <a href="tel:+14156940569">+1 (415) 694-0569</a>
                    </div>
                    <div className="contact-item">
                        <EnvelopeIcon className="icon" />
                        <a href="mailto:albmtho@gmail.com">albmtho@gmail.com</a>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="form-container">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </section>
    );
}

export default ContactPage;
