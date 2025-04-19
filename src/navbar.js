import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark custom-navbar sticky-top">
                <div className="container-fluid">
                
                    <Link className="navbar-brand d-flex align-items-center logo-container" to="/">
                        {/* <img src="/logo.png" alt="Logo" className="logo me-2"/> */}
                        <span className="fw-bold logo-text">Climate Change</span>
                    </Link>

                    {/* Navbar Toggler for Mobile View */}
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarNav" 
                        aria-controls="navbarNav" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                   
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav custom-nav">
                            <li className="nav-item">
                                <Link className="nav-link custom-nav-item active" to="/components/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link custom-nav-item" to="/components/news">News</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link custom-nav-item" to="/components/Future_Impacts">Future Impacts</Link> 
                            </li>
                            {/* Dropdown for Data */}
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle custom-nav-item" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown">
                                    Data
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/components/research_papers">Research Paper</Link></li>
                                    <li><Link className="dropdown-item" to="/components/graph">Visual Representation</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link custom-nav-item" to="/components/explore">Explore</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link custom-nav-item" to="/components/DosDonts">Do's&Don’t</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
