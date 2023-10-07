import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contactformstyles.css';
import emailLogo from './images/emailicon.png';

export const Contactform = () => {
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
			<div className="left1"><img src={emailLogo} styles={{height:140, width:120}} alt="Email Icon"/></div>
			
      <h2>Contact Me</h2>
      <input className="user_name" type="text" class="field" placeholder="Your Name" />
      <input className="user_email" type="text" class="field" placeholder="Your Email" />
      <input className="phone_number" type="text" class="field" placeholder="Phone" />
      <textarea className="message" placeholder="Message" class="field"></textarea>

      <button class="btn">Send</button>
      </div>
		</div>
    <div className="right1">
	</div>

    </form>
    );

    };