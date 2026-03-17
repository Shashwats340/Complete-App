import React from 'react';
import './WhoWeAre.css';
import connexialsImg from '../assets/connexials.png';

const WhoWeAre = () => {
    return (
        <section className="who-we-are-section">
            <div className="who-we-are-container">
                <div className="who-we-are-image-wrapper">
                    <img src={connexialsImg} alt="Connexials Team" className="who-we-are-image" />
                </div>
                <div className="who-we-are-content">
                    <h2 className="who-we-are-title">Who We Are</h2>
                    <p className="who-we-are-text">
                        Connexials is a global technology services firm delivering world-class engineering and proven execution — without the overhead of building everything in-house. We help enterprises modernize legacy systems, harness AI, and launch digital products with speed and reliability.
                    </p>
                    <p className="who-we-are-text">
                        We connect the right people, processes, and platforms to create measurable outcomes that compound over time.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;
