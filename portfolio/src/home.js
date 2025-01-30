import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import './home.css';
import Image from './ragulimage.jpg'; // Import your image file

export const Home = () => {
  return (
    <section className="hero-section">
     
      <div className="image-container">
        <img src={Image} alt="Profile Picture" className="profile-picture" />
      </div>

    
      <div className="text-content">
        <h1>
          Hi <span className="shake">💁</span>, It's <span>RAGUL</span>
        </h1>
        <h2>
          I'm a <span>Frontend Developer👨‍💻</span>
        </h2>
        <p>
          "A full-stack developer skilled in creating scalable, user-friendly web applications😶‍🌫️."
        </p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/ragul-r-554367302/">
            <FaLinkedin />
          </a>
          <a href="https://github.com/ragul5102005/giri">
            <FaGithub />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
        </div>
      </div>
    </section>
  );
};
