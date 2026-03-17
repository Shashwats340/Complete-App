import React from 'react';
import { Instagram, Linkedin, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';


import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="footer-content">
                <div className="footer-brand-column">
                    <Link to="/" className="footer-logo">
                        <img src={logo} alt="Connexials" className="footer-logo-image" />
                    </Link>
                    <p className="footer-tagline">
                        Empowering businesses<br />
                        through innovative IT solutions.
                    </p>
                </div>

                <div className="footer-links-column">
                    <h4 className="footer-heading">Company</h4>
                    <ul className="footer-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/careers">Careers</Link></li>
                        <li><Link to="/blog">Blogs</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className="footer-links-column">
                    <h4 className="footer-heading">Services</h4>
                    <ul className="footer-links">
                        <li><Link to="/enterprise-applications">Enterprise Solutions</Link></li>
                        <li><Link to="/ai-data-analytics">AI & Data Intelligence</Link></li>
                        <li><Link to="/staff-augmentation">Staff Augmentation</Link></li>
                        <li><Link to="/data-center">Data Center Solutions</Link></li>
                        <li><Link to="/technology-services">Technology Services</Link></li>
                        <li><Link to="/digital-transformation">Digital Transformation</Link></li>
                    </ul>
                </div>

                <div className="footer-links-column">
                    <h4 className="footer-heading">Support</h4>
                    <ul className="footer-links">
                        <li><Link to="#">Help Centre</Link></li>
                        <li><Link to="#">Privacy Policy</Link></li>
                        <li><Link to="#">Terms of Service</Link></li>
                    </ul>
                </div>

                <div className="footer-links-column contact-column">
                    <h4 className="footer-heading">Contact</h4>
                    <ul className="footer-contact-info">

                        <li>howdy@connexials.com</li>
                    </ul>
                </div>
            </div>

            <div className="footer-divider"></div>

            <div className="footer-bottom">
                <p className="copyright-text">
                    All rights reserved © Connexials technology | Terms and conditions apply
                </p>
                <div className="social-icons">
                    <a href="https://www.linkedin.com/company/connexials-technology-llp/" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
                    <a href="https://www.instagram.com/connexials_inc/" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={20} /></a>
                    <a href="https://www.facebook.com/connexials" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={20} /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
