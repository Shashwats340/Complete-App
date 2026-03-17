import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import './Hero.css';

const Hero = ({
    eyebrow,
    title,
    subtitle,
    ctaText,
    ctaLink = "/contact",
    showCta = true,
    backgroundImage,
    className = "",
    children
}) => {
    const sectionStyle = backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {};

    return (
        <section
            className={`hero-section hero-overlay ${className}`}
            style={sectionStyle}
        >
            <div className="hero-content-wrapper">
                <div className="hero-text">
                    {eyebrow && <span className="hero-eyebrow">{eyebrow}</span>}
                    <h1 className="hero-headline">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="hero-subheadline">
                            {subtitle}
                        </p>
                    )}
                    {showCta && (
                        ctaLink.startsWith('#') ? (
                            <a href={ctaLink} className="hero-cta">
                                {ctaText || "Schedule a Consultation"}
                                <ArrowUpRight size={20} className="cta-icon" />
                            </a>
                        ) : (
                            <Link to={ctaLink} className="hero-cta">
                                {ctaText || "Schedule a Consultation"}
                                <ArrowUpRight size={20} className="cta-icon" />
                            </Link>
                        )
                    )}
                    {children}
                </div>
            </div>
        </section>
    );
};

export default Hero;
