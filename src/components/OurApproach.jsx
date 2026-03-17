import React from 'react';
import { Settings } from 'lucide-react';
import './OurApproach.css';

const approachData = [
    {
        title: "Architecture First",
        desc: "Intelligent systems are only as strong as the data foundations beneath them.",
        className: "card-light-blue"
    },
    {
        title: "Business Anchored",
        desc: "Every initiative aligns to defined enterprise KPIs.",
        className: "card-mid-blue"
    },
    {
        title: "Production Mindset",
        desc: "Built for uptime, security, and scale from day one.",
        className: "card-dark-blue-1"
    },
    {
        title: "Governed By Design",
        desc: "Compliance, explainability, and accountability embedded throughout.",
        className: "card-dark-blue-2"
    }
];

const OurApproach = () => {
    return (
        <section className="our-approach-section" id="our-approach">
            <div className="our-approach-container">
                <h2 className="our-approach-heading">Our Approach</h2>

                <div className="approach-grid">
                    {approachData.map((item, index) => (
                        <div key={index} className={`approach-card ${item.className}`}>
                            <div className="approach-icon-wrapper">
                                <Settings size={28} strokeWidth={1.5} className="approach-icon" />
                            </div>
                            <h3 className="approach-card-title">{item.title}</h3>
                            <p className="approach-card-desc">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurApproach;
