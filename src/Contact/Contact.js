import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contactformstyles.css';

import emailLogo from "./emailicon.png";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_re1mnet', 'template_wu0ivc6', form.current, 'yfsFpK783Zqjg6VgY')
            .then(() => {
                alert("Message successfully sent!")
                window.location.reload(false)
            },
            () => {alert('Failed to send the message, please try again.')}
            )};

    return (
        <form ref={form} onSubmit={sendEmail}>

            <div className="container">
                <div className="contact-box">
                    <div className="left1"><img src={emailLogo} alt="Email Icon"/></div>
			
                    <h2 className="formTitle field">Contact Me</h2>
                    <input className="user_name field" type="text"  placeholder="Your Name" />
                    <input className="user_email field" type="text"  placeholder="Your Email" />
                    <input className="phone_number field" type="text"  placeholder="Phone" />
                    <textarea className="message field" placeholder="Message"></textarea>

                    <button className="btn">Send</button>
                </div>
            </div>
            <div className="right1">
            </div>

        </form>
    );

};
export default Contact;