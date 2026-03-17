import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import './SuccessStories.css';

const successStories = [
    {
        id: 1,
        title: "Turbocharging Sales Rep Productivity with Asknex.ai",
        challenges: "A global SaaS Sales reps spent excessive time hunting for content and prepping for calls, leaving less time for actual selling.",
        solution: "Implemented an AI-powered assistant that surfaced relevant materials instantly, automated meeting prep, and enabled live Q&A during calls.",
        results: [
            "Saved ~2+ hours per rep weekly for client engagement",
            "Faster responses improved sales cycle velocity",
            "Better call preparedness reduced rep stress and improved confidence"
        ]
    },
    {
        id: 2,
        title: "B2B E-Commerce for Machinery Spare Parts",
        challenges: "Legacy systems lacked flexibility and visibility for managing partner catalogs, pricing, and orders across regions.",
        solution: "Delivered a custom B2B e-commerce platform with partner dashboards, role-based access, smart pricing, multilingual support, and bulk catalog management.",
        results: [
            "40% faster quote-to-order cycles",
            "35% reduction in manual errors",
            "3x increase in partner engagement"
        ]
    },
    {
        id: 3,
        title: "Multi-Vendor Marketplace for Global Retail Expansion",
        challenges: "A retailer struggled to manage thousands of global vendors due to limited visibility, collaboration, and multi-currency support.",
        solution: "Built a scalable multi-vendor marketplace with self-service catalogs, multilingual/multi-currency support, vendor dashboards, messaging, and bulk onboarding tools.",
        results: [
            "50% faster vendor onboarding and product publishing",
            "2x growth in international orders",
            "Improved vendor satisfaction and operational transparency"
        ]
    }
];

const SuccessStories = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % successStories.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + successStories.length) % successStories.length);
    };

    const currentStory = successStories[currentIndex];

    return (
        <section className="success-stories-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Proven Enterprise Success Stories</h2>
                    <p className="section-subtitle">
                        See how we solve complex application and platform challenges with
                        scalable, real-world solutions that deliver measurable business impact.
                    </p>
                </div>

                <div className="slider-wrapper">
                    <div className="slider-controls-mobile">
                        <button className="nav-btn prev" onClick={prevSlide} aria-label="Previous story">
                            <ArrowLeft size={24} />
                        </button>
                        <button className="nav-btn next" onClick={nextSlide} aria-label="Next story">
                            <ArrowRight size={24} />
                        </button>
                    </div>

                    <button className="nav-btn prev desktop-only" onClick={prevSlide} aria-label="Previous story">
                        <ArrowLeft size={24} />
                    </button>

                    <div className="slides-container">
                        {/* Side Peek - Previous */}
                        <div className="story-peek prev-peek">
                            <div className="story-grid">
                                <div className="story-card main-title-card"></div>
                                <div className="story-card results-card"></div>
                            </div>
                        </div>

                        <div className="story-container fade-in" key={currentIndex}>
                            <div className="story-grid">
                                <div className="story-card main-title-card">
                                    <h3 className="story-title">{currentStory.title}</h3>
                                    <div className="pattern-bg"></div>
                                </div>

                                <div className="story-card challenges-card">
                                    <h4>Challenges</h4>
                                    <p>{currentStory.challenges}</p>
                                </div>

                                <div className="story-card solution-card">
                                    <h4>Solution</h4>
                                    <p>{currentStory.solution}</p>
                                </div>

                                <div className="story-card results-card">
                                    <h4>Results</h4>
                                    <ul>
                                        {currentStory.results.map((result, index) => (
                                            <li key={index}>{result}</li>
                                        ))}
                                    </ul>
                                    <div className="pattern-bg"></div>
                                </div>
                            </div>
                        </div>

                        {/* Side Peek - Next */}
                        <div className="story-peek next-peek">
                            <div className="story-grid">
                                <div className="story-card main-title-card"></div>
                                <div className="story-card results-card"></div>
                            </div>
                        </div>
                    </div>

                    <button className="nav-btn next desktop-only" onClick={nextSlide} aria-label="Next story">
                        <ArrowRight size={24} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SuccessStories;
