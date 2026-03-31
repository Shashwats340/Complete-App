import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import './IndustriesSection.css';

import healthcareImg from '../assets/industry_healthcare_1774426979243.png';
import mediaImg from '../assets/industry_media_1774427003486.png';
import retailImg from '../assets/industry_retail_1774427022868.png';
import fintechImg from '../assets/industry_fintech_1774427044962.png';
import educationImg from '../assets/industry_education_1774427066475.png';
import discreteImg from '../assets/industry_discrete_manufacturing.png';
import aerospaceImg from '../assets/industry_aerospace_defence.png';

const industries = [
    {
        id: 1,
        title: "DISCRETE MANUFACTURING",
        subtitle: "Precision & Efficiency",
        description: "Optimizing production workflows, supply chain management, and industrial IoT solutions for modern manufacturing.",
        image: discreteImg
    },
    {
        id: 2,
        title: "AEROSPACE & DEFENCE",
        subtitle: "Mission-Critical Excellence",
        description: "High-security systems, mission-critical software, and advanced analytics for the aerospace and defence sectors.",
        image: aerospaceImg
    },
    {
        id: 3,
        title: "HEALTHCARE",
        subtitle: "Smarter Care, Better Outcomes",
        description: "Advanced digital platforms for personalized patient care, telemedicine, and healthcare analytics.",
        image: healthcareImg
    },
    {
        id: 4,
        title: "MEDIA & ENTERTAINMENT",
        subtitle: "Improve Engagement",
        description: "Engaging content delivery platforms, streaming solutions, and interactive media experiences.",
        image: mediaImg
    },
    {
        id: 5,
        title: "RETAIL & ECOMMERCE",
        subtitle: "Scalable Tech for Seamless Sales",
        description: "Omnichannel retail solutions, advanced e-commerce platforms, and customer-centric digital storefronts.",
        image: retailImg
    },
    {
        id: 6,
        title: "FINTECH",
        subtitle: "Innovating Finance, Empowering Growth",
        description: "Secure, scalable financial technology solutions, including payment gateways, digital wallets, and banking apps.",
        image: fintechImg
    },
    {
        id: 7,
        title: "EDUCATION & ELEARNING",
        subtitle: "Smart Learning",
        description: "Custom eLearning solutions to meet changing industry needs, including LMS platforms and interactive learning tools.",
        image: educationImg
    }
];

const IndustriesSection = () => {
    const scrollRef = useRef(null);


    return (
        <section className="industries-section">
            <div className="container">
                <div className="industries-header">
                    <div className="header-text">
                        <h2 className="industries-title">Industries We Serve</h2>
                        <p className="industries-subtitle">
                            Get what you are looking for to fulfill your software development and outsourcing needs
                            at Connexials, with our expertise on all in-demand technologies & platforms.
                        </p>
                    </div>
                </div>

                <div className="industries-scroll-container" ref={scrollRef}>
                    {industries.map((industry) => (
                        <div key={industry.id} className="industry-card">
                            <div className="card-top">
                                <h3 className="card-title">{industry.title}</h3>
                                <p className="card-subtitle">{industry.subtitle}</p>
                            </div>

                            <div className="card-image-wrapper">
                                <img src={industry.image} alt={industry.title} className="card-image" />
                                <div className="card-overlay"></div>
                            </div>

                            <div className="card-hover-content">
                                <h3 className="hover-title">{industry.title}</h3>
                                <p className="hover-subtitle">{industry.subtitle}</p>
                                <p className="hover-description">{industry.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustriesSection;
