import React from 'react';
import './Contact.css';

const MyContact = () => {
  const handlePhoneClick = () => {
    window.location.href = 'tel:+919133115115';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:sampujyam@gmail.com';
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <div className="contact-info">
        <span role="img" aria-label="phone">📞</span>
        <a href="tel:+919133115115" className="phone-number" onClick={handlePhoneClick}>+91 9133115115</a><br></br>
        <span role="img" aria-label="mail">📩</span>
        <a href="mailto:sampujyam@gmail.com" className="email-address" onClick={handleEmailClick}>sampujyam@gmail.com</a><br></br>
        <img src='logolk.png' alt='linkedin logo' height={30} width={30}></img>
        <a href='www.linkedin.com/in/sampujya-musunuri'>linkedin profile</a>
      </div>
    </section>
  );
};

export default MyContact;
