import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JS for dropdown functionality
import logo from '../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container-fluid mx-3">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img src={logo} alt="Immerse Logo" style={{ height: '40px' }} />
          <span className="immerse m-2">Immerse</span>
        </a>

        {/* Large Dropdown Menu */}
        <div className="dropdown mx-5 d-lg-inline d-none">
          <a
          href="courses/all"
            className="text-decoration-none text-white dropdown-toggle" 
            type="button" 
            id="browseDropdown" 
            aria-expanded="false"
          >
            Browse
          </a>
          <div className="dropdown-menu" aria-labelledby="browseDropdown" style={{ minWidth: '600px' }}>
            <div className="row g-0">
              {/* Column 1 */}
              <div className="col-4 p-3">
                <h6 className="dropdown-header">Technology</h6>
                <Link className="dropdown-item" to="/courses/web-development">Web Development</Link>
                <Link className="dropdown-item" to="/courses/data-science">Data Science</Link>
                <Link className="dropdown-item" to="/courses/artificial-intelligence">Artificial Intelligence</Link>
                <Link className="dropdown-item" to="/courses/cybersecurity">CyberSecurity</Link>
              </div>
              {/* Column 2 */}
              <div className="col-4 p-3">
                <h6 className="dropdown-header">Business</h6>
                <Link className="dropdown-item" to="/courses/marketing">Marketing</Link>
                <Link className="dropdown-item" to="/courses/finance">Finance</Link>
                <Link className="dropdown-item" to="/courses/project-management">Project Management</Link>
              </div>
              {/* Column 3 */}
              <div className="col-4 p-3">
                <h6 className="dropdown-header">Science</h6>
                <Link className="dropdown-item" to="/courses/biology">Biology</Link>
                <Link className="dropdown-item" to="/courses/chemistry">Chemistry</Link>
                <Link className="dropdown-item" to="/courses/geology">Geology</Link>
                <Link className="dropdown-item" to="/courses/physics">Physics</Link>
              </div>
            </div>
          </div>
        </div>

        <form className="d-flex position-relative mx-5 order-lg-1 d-lg-inline d-none" role="search" style={{ width: '400px' }}>
          <input 
            className="form-control pe-5 placeholder-white" 
            type="search" 
            placeholder="What do you wanna learn?" 
            aria-label="Search" 
          />
          <i 
            className="fa-solid fa-magnifying-glass position-absolute" 
            style={{ right: '15px', top: '50%', transform: 'translateY(-50%)', color: '#6c757d', cursor: 'pointer' }}
          ></i>
        </form>

        <div className="collapse navbar-collapse order-lg-2" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item px-3">
              <a className="nav-link sign-in" href="http://localhost:5174/sign-in">Sign In</a>
            </li>
            <li className="nav-item">
              <a className="nav-link sign-up" href="http://localhost:5174/sign-up">Sign Up</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
