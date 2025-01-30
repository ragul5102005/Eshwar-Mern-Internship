import React from 'react';
import './hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <h1 className="hero-title">I am Rahul Bhatia.</h1>
      <p className="hero-subtitle">
        I am a Frontend Developer and Data Scientist. I like dabbling in various parts of frontend development and like to learn about new technologies, write technical articles or simply play games in my free time.
      </p>
      <div className="hero-icons">
        <a href="#" className="icon">LinkedIn</a>
        <a href="#" className="icon">GitHub</a>
        <a href="#" className="icon">Twitter</a>
      </div>
      <div className="scroll-down">↓</div>
    </div>
  );
};

export default Hero;
