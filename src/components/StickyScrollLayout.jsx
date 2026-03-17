import React from 'react';
import './StickyScrollLayout.css';

const StickyScrollLayout = ({ title, subtitle, children }) => {
    return (
        <section className="sticky-scroll-section">
            <div className="sticky-scroll-container">
                <div className="sticky-scroll-left">
                    {title && <h2 className="sticky-scroll-title">{title}</h2>}
                    {subtitle && <p className="sticky-scroll-subtitle">{subtitle}</p>}
                </div>
                <div className="sticky-scroll-right">
                    {children}
                </div>
            </div>
        </section>
    );
};

export default StickyScrollLayout;
