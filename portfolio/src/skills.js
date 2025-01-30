// components/Skills.js
import React from 'react';
import './skill.css';

function Skills() {
  return (
    <div className="skills">
      <h1>My Skills</h1>
      <div className="skills-list">
        <div className="skill-category">
          <h2>Programming Languages</h2>
          <ul>
            <li>C</li>
            <li>JavaScript</li>
            <li>HTML & CSS</li>
            <li>C++</li>
            <li>Python</li>
          </ul>
        </div>
        <div className="skill-category">
          <h2>Tools & Technologies</h2>
          <ul>
            <li>
              VS Code: <progress value="90" max="100"></progress>
            </li>
            <li>
              Canva: <progress value="80" max="100"></progress>
            </li>
            <li>
              GitHub: <progress value="85" max="100"></progress>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
