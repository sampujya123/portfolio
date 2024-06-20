import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about">
      <h2>About Me</h2>
      <p>
        Hi, I'm <strong>Sampujya</strong>, a second-year student at Chaitanya Bharathi Institute of Technology (CBIT). 
        I have a strong passion for the fields of Artificial Intelligence (AI) and Machine Learning (ML),
         and I am currently diving deep into the MERN stack (MongoDB, Express.js, React, Node.js).
        My journey in the tech world includes a valuable internship at Infosys Springboard 4.0 in the AI/ML domain.
        I engage in hackathons, coding challenges, and workshops, I channel my enthusiasm into hands-on learning experience.</p>

        <p>
        During my first year at CBIT, I was awarded a medal for securing the first position in my section.
        In addition to my academic achievements at CBIT, I also qualified for JEE Advanced and secured a Computer Science seat at IIT Bhilai. 
        This achievement represents my hardwork.
      </p>
      <span className='subhead'>Internships:</span> 
        <ul>
          <li>Brain-O-Vision|Oct,2023-Nov,2023: Learnt the basic of Python and Libraries of Python required for DATA SCIENCE like
                                                Numpy, Pandas, Matplotlib. Gained basic knowledge in Data Science</li>
          <li>Infosys Springboard|Apr-2023-Jun,2023: During the internship I worked on "ENERGY COMSUMPTION FORECASTING SYSTEM". Learnt Data collection
                                                      , preprocessing, model creation and evaluation, testing, and deployment.
          </li>
        </ul>
      <span className='subhead'>Skills and Expertise:</span> 
        <ul>
          <li>Web Development: HTML, CSS, Bootstrap, JavaScript, React, Node.js, Express.js</li>
          <li>Database Management: MySQL, MongoDB</li>
          <li>Programming Languages: Proficient in Python, well-versed in C and Java</li>
        </ul>
        <span className='subhead'>Courses and Certifications:</span> 
        <ul>
          <li>Certified in C and Java Programming languages from NPTEL.</li>
          <li>Certifications in Artificial Intelligence and Machine Learning from Infosys Springboard.</li>
          <li>Python and Artificial Intelligence bootcamp certificate from DevTown.</li>
        </ul>
    </section>
  );
};

export default About;

