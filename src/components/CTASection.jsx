import React from 'react';
import { Link } from 'react-router-dom';
import './CTASection.css';
import { ArrowUpRight } from 'lucide-react';

const CTASection = () => {
    return (
        <section className="cta-section">
            <div className="cta-content">
                <h2 className="cta-title">
                    Ready to Transform <br />
                    Your Business?
                </h2>
                <p className="cta-description">
                    Let Connexials help you build powerful digital
                    solutions that drive growth and efficiency.
                </p>
                <Link to="/contact" className="cta-button">
                    Schedule a Consultation
                    <ArrowUpRight size={20} className="cta-icon-arrow" />
                </Link>
            </div>

            <div className="cta-background-overlay"></div>
        </section>
    );
};

export default CTASection;
