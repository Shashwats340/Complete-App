import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

import logo from '../assets/logo.png';

import { ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [forceClose, setForceClose] = useState(false);

    // Mobile menu states
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isResourcesOpen, setIsResourcesOpen] = useState(false);

    const handleLinkClick = () => {
        // Scroll to the top of the page smoothly
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // Briefly disable the CSS hover using a class to force the dropdown to disappear
        setForceClose(true);
        setTimeout(() => setForceClose(false), 500);

        // Close mobile menu when a link is clicked
        setIsMobileMenuOpen(false);
        setIsServicesOpen(false);
        setIsResourcesOpen(false);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        if (isMobileMenuOpen) {
            // Reset dropdowns when closing main menu
            setIsServicesOpen(false);
            setIsResourcesOpen(false);
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Connexials" className="logo-image" />
            </div>

                        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

                        <div className={`nav-menu-wrapper ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
                <ul className="nav-links">
                    <li className="nav-item"><Link to="/" onClick={handleLinkClick} className="nav-link">Home</Link></li>

                                        <li className={`nav-item has-dropdown ${forceClose ? 'force-close' : ''} ${isServicesOpen ? 'mobile-dropdown-open' : ''}`}>
                        <span
                            className="nav-link dropdown-trigger"
                            onClick={() => setIsServicesOpen(!isServicesOpen)}
                        >
                            Services <ChevronDown size={14} className="dropdown-icon" />
                        </span>
                        <div className="mega-menu">
                            <div className="mega-menu-grid">
                                <Link to="/enterprise-applications" onClick={handleLinkClick} className="mega-menu-link">Enterprise Applications</Link>
                                <Link to="/ai-data-analytics" onClick={handleLinkClick} className="mega-menu-link">AI & Data Intelligence</Link>
                                <Link to="/digital-transformation" onClick={handleLinkClick} className="mega-menu-link">Digital Transformation</Link>
                                <Link to="/data-center" onClick={handleLinkClick} className="mega-menu-link">Data Center Solutions</Link>
                                <Link to="/technology-services" onClick={handleLinkClick} className="mega-menu-link">Technology Services</Link>
                                <Link to="/staff-augmentation" onClick={handleLinkClick} className="mega-menu-link">Staff Augmentation</Link>
                            </div>
                        </div>
                    </li>

                                        <li className={`nav-item has-dropdown ${forceClose ? 'force-close' : ''} ${isResourcesOpen ? 'mobile-dropdown-open' : ''}`}>
                        <span
                            className="nav-link dropdown-trigger"
                            onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                        >
                            Resources <ChevronDown size={14} className="dropdown-icon" />
                        </span>
                        <div className="simple-dropdown">
                            <Link to="/blog" onClick={handleLinkClick} className="simple-dropdown-link">Blogs</Link>
                        </div>
                    </li>

                    <li className="nav-item"><Link to="/careers" onClick={handleLinkClick} className="nav-link">Careers</Link></li>
                    <li className="nav-item"><Link to="/contact" onClick={handleLinkClick} className="nav-link">Contact</Link></li>
                </ul>

                                <div className="nav-actions">
                    <Link to="/contact" className="nav-cta" onClick={handleLinkClick}>Get Started</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
