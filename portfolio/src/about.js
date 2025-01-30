
import React from 'react';
import './about.css';
import Certifications from './certifications'; // Import the Certifications component

function About() {
  return (
    <div className="about">
      <h1 className="about-title">About Me</h1>
      <p>Hi, I'm a passionate Engineer</p>
      
      <section id="skills-introduction">
        <h2>My Technical Expertise</h2>
        <p>
          As a Full-Stack Developer, I possess a diverse set of skills across both front-end and back-end technologies. 
          I am dedicated to building highly functional and user-friendly applications while continuously improving my expertise.
          Whether it's crafting dynamic, responsive websites with HTML, CSS, JavaScript, and React, or working with backend technologies 
          such as Java, Python, and Node.js, I always strive to write clean, maintainable code. 
          Here's an overview of my skills across different areas.
        </p>
      </section>

      <p>
        <a href="https://github.com/ragul5102005/giri" target="_blank" rel="noopener noreferrer">GitHub</a> |
        <a href="https://leetcode.com/u/ragul555/" target="_blank" rel="noopener noreferrer">LeetCode</a>
      </p>

      <Certifications />
    </div>
  );
}

export default About;
