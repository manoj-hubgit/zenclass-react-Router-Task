import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><h2>Guvi</h2></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
      <ul className="navbar-nav">
      <li className="nav-item">
          <Link className="nav-link active" to='/'>All Courses</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/fullstack'>Full Stack Development</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/uiux'>UI/UX Designing</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/digitalmarketing'>Digital Marketing</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/datascience'>Data Science</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navbar;