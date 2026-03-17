import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import './DigitalTransformation.css';
import { Lightbulb, Presentation, FileCode2, Rocket } from 'lucide-react';
import TransformationDomains from '../components/TransformationDomains';
import CTASection from '../components/CTASection';
import dtBg from '../assets/Digital Transformation.png';

const frameworkData = [
    {
        id: 1,
        title: "Discover & Assess",
        description: "We evaluate your technology landscape, processes, and readiness to identify high-impact opportunities and hidden risks.",
        icon: Lightbulb
    },
    {
        id: 2,
        title: "Strategize & Roadmap",
        description: "We define a pragmatic roadmap, prioritizing initiatives by business value, feasibility, and organizational capacity.",
        icon: Presentation
    },
    {
        id: 3,
        title: "Design & Build",
        description: "Our cross-functional teams deliver production-ready solutions through rapid prototyping, validation, and agile execution.",
        icon: FileCode2
    },
    {
        id: 4,
        title: "Launch & Scale",
        description: "We launch with scale in mind — embedding observability, feedback, and continuous improvement from day one.",
        icon: Rocket
    }
];

const DigitalTransformation = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="dt-page">
            <Hero
                eyebrow="Digital Transformation"
                title={<>Reimagine How Your Business Operates,<br />Competes, and Grows.</>}
                subtitle="Digital transformation is a business strategy, not a technology project. We help organizations rethink how they create value and compete — delivering measurable outcomes, not just modernized systems."
                backgroundImage={dtBg}
                className="premium-hero"
            />

            {/* Framework Section */}
            <section className="dt-framework-section" id="framework">
                <h2 className="dt-framework-title">Our Transformation Framework</h2>

                <div className="dt-framework-container">
                    <div className="dt-timeline-base"></div>
                    <div className="dt-framework-grid">
                        {frameworkData.map((item, index) => (
                            <div key={item.id} className="dt-framework-item">
                                <div className="dt-icon-container">
                                    <div className="dt-icon-circle">
                                        <item.icon size={32} strokeWidth={1.5} className="dt-icon" />
                                    </div>
                                    {index < frameworkData.length - 1 && (
                                        <div className="dt-connector-line">
                                            <div className="dt-connector-arrow">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <polyline points="9 18 15 12 9 6"></polyline>
                                                </svg>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <h3 className="dt-item-title">{item.title}</h3>
                                <p className="dt-item-desc">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Transformation Domains Section */}
            <TransformationDomains />

            {/* CTA Section */}
            <CTASection />
        </div>
    );
};

export default DigitalTransformation;
