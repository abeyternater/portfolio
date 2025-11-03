import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contactformstyles.css';
import emailLogo from "./emailicon.png";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2i285ph', 'template_wu0ivc6', form.current, 'yfsFpK783Zqjg6VgY')
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
                    <img className="logo" src={emailLogo} alt="Email Icon"/>
			
                    <input className="user_name field" type="text"  placeholder="Full Name" />
                    <input className="user_email field" type="text"  placeholder="Email" />
                    <input className="phone_number field" type="text"  placeholder="Phone" />
                    <textarea className="message field" placeholder="Message"></textarea>

                    <button className="field btn">Send</button>
                </div>
            </div>

        </form>
    );

};
export default Contact;
