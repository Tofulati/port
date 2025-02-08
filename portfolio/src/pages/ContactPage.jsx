import React, { useState } from "react";
import emailjs from "emailjs-com";
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import "../styles/ContactPage.css";

function ContactPage() {
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
        <section id="contact" className="contact">
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
