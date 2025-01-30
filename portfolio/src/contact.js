import React from 'react';
import './contact.css';

function Contact() {
  return (
    <div className="contact">
      <h2>Let's Connect🚀</h2>
      <p>Feel free to reach out to me via phone or email, or follow me on social media!🙌😂</p>
      <p>📞Phone: <a href="tel:7373539566">7373539566</a></p>
      <p>📩Email: <a href="mailto:ragul5kon@email.com">ragul5kon@email.com</a></p>
      <p>💁Details: <a href="https://github.com/ragul5102005/giri" target="_blank" rel="noopener noreferrer">GitHub💻</a> |
      <a href="https://leetcode.com/u/ragul555/" target="_blank" rel="noopener noreferrer">LeetCode👨‍💻</a></p>
      
      <button>
        <a href="/ragul resume f.pdf" download>Download Resume</a>
      </button>
    </div>
  );
}

export default Contact;
