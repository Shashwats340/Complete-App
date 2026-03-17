import React, { useEffect } from 'react';
import { Mail, MapPin, Instagram, Linkedin, Facebook } from 'lucide-react';
import transformImg from '../assets/transform.png';
import usaImg from '../assets/USA 2.png';
import londonImg from '../assets/London 2.png';
import indiaImg from '../assets/India 2.png';
import deepakImg from '../assets/deepakgupta.jpg';
import uditImg from '../assets/uditmathur.jpg';
import vikasImg from '../assets/vikkasmittal.jpg';
import './Contact.css';

const Contact = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);



    return (
        <div className="contact-page">
            <div className="contact-container">
                <div className="contact-content-wrapper">

                    {/* Left Column: Contact Info */}
                    <div className="contact-info-col">
                        <h1 className="contact-title">Contact Us</h1>

                        <div className="contact-info-item">
                            <Mail className="contact-icon" size={24} />
                            <p className="contact-text">howdy@connexials.com</p>
                        </div>

                        <div className="contact-info-item align-start">
                            <MapPin className="contact-icon" size={24} />
                            <p className="contact-text">
                                Connexials Technology Private Limited.<br />
                                E-44/3, First Floor, Okhla Industrial<br />
                                Area, Phase-II, New Delhi-110020.
                            </p>
                        </div>

                        <div className="contact-social-section">
                            <h3 className="contact-social-title">Follow Us On</h3>
                            <div className="contact-social-icons">
                                <a href="https://www.linkedin.com/company/connexials-technology-llp/" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                    <Linkedin size={20} />
                                </a>
                                <a href="https://www.instagram.com/connexials_inc/" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                    <Instagram size={20} />
                                </a>
                                <a href="https://www.facebook.com/connexials" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                    <Facebook size={20} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="contact-form-col">
                        <form className="contact-form">

                            <div className="form-row">
                                <div className="form-group half">
                                    <label htmlFor="firstName">First Name</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                                <div className="form-group half">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </div>

                            <div className="form-group full">
                                <label htmlFor="subject">Subject</label>
                                <select id="subject" name="subject" required>
                                    <option value="general">General</option>
                                    <option value="sales">Sales & Inquiries</option>
                                    <option value="support">Technical Support</option>
                                    <option value="careers">Careers</option>
                                </select>
                            </div>

                            <div className="form-group full">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" required />
                            </div>

                            <div className="form-group full">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" rows="4" required></textarea>
                            </div>

                            <button type="submit" className="submit-btn">
                                Submit Message
                            </button>

                        </form>
                    </div>

                </div>
            </div>

            {/* Our Global Presence Section */}
            <section className="global-presence-section">
                <div className="section-header">
                    <h2 className="section-title">Our Global Presence</h2>
                    <p className="section-subtitle">
                        We have offices in key tech hubs around the<br />
                        world to serve our clients better.
                    </p>
                </div>

                <div className="global-presence-grid">
                    {/* Location 1: USA */}
                    <div className="location-card">
                        <img src={usaImg} alt="USA Office" className="location-image" />
                        <div className="location-content">
                            <h3 className="location-title">USA</h3>
                            <p className="location-desc">
                                Connexials Inc.<br />
                                30 N Gould St., Ste. 400, Sheridan, Wyoming 82801, USA.
                            </p>
                        </div>
                    </div>

                    {/* Location 2: London */}
                    <div className="location-card">
                        <img src={londonImg} alt="London Office" className="location-image" />
                        <div className="location-content">
                            <h3 className="location-title">London</h3>
                            <p className="location-desc">
                                Connexials Technology Limited.<br />
                                124 City Road, London, EC1V 2NX, United Kingdom.
                            </p>
                        </div>
                    </div>

                    {/* Location 3: India */}
                    <div className="location-card">
                        <img src={indiaImg} alt="India Office" className="location-image" />
                        <div className="location-content">
                            <h3 className="location-title">India</h3>
                            <p className="location-desc">
                                Connexials Technology Private Limited.<br />
                                E-44/3, First Floor, Okhla Industrial Area, Phase-II, New Delhi-110020.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Visionary Leaders Section */}
            <section className="visionary-leaders-section">
                <div className="section-header">
                    <h2 className="section-title">Our Visionary Leaders</h2>
                    <p className="section-subtitle">
                        Guiding Connexials with strategic vision, technology<br />
                        expertise, and a relentless focus on client outcomes.
                    </p>
                </div>

                <div className="visionary-leaders-grid">
                    {/* Leader 1 */}
                    <div className="leader-card leader-bg-white">
                        <div className="leader-watermark">CONNEXIALS</div>
                        <img src={deepakImg} alt="Deepak Gupta" className="leader-image" />
                        <div className="leader-info-box">
                            <h4 className="leader-name">Deepak Gupta</h4>
                            <p className="leader-title">Chief Executive Officer</p>
                        </div>
                    </div>

                    {/* Leader 2 */}
                    <div className="leader-card leader-bg-white">
                        <div className="leader-watermark">CONNEXIALS</div>
                        <img src={uditImg} alt="Udit Mathur" className="leader-image" />
                        <div className="leader-info-box">
                            <h4 className="leader-name">Udit Mathur</h4>
                            <p className="leader-title">Chief Growth Officer</p>
                        </div>
                    </div>

                    {/* Leader 3 */}
                    <div className="leader-card leader-bg-white">
                        <div className="leader-watermark">CONNEXIALS</div>
                        <img src={vikasImg} alt="Vikas Mittal" className="leader-image" />
                        <div className="leader-info-box">
                            <h4 className="leader-name">Vikas Mittal</h4>
                            <p className="leader-title">Chief Technology Officer</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
