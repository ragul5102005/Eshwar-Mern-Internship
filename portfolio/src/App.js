
import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import {Home} from './home';
import About from './about';
import Contact from './contact';
import Skills from './skills';
//import Projects from './project';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <NavLink to="/" className="nav-link" activeClassName="active" exact>Home</NavLink>
          <NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink>
          <NavLink to="/skills" className="nav-link" activeClassName="active">Skills</NavLink>
      
          <NavLink to="/contact" className="nav-link" activeClassName="active">Contact</NavLink>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
           
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;



// <Route path="/projects" element={<Projects />} />



//    <NavLink to="/project" className="nav-link" activeClassName="active">Project</NavLink>

