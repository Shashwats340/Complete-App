import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import { Briefcase, BrainCircuit, Users, Server, Cloud, Code } from 'lucide-react';

import enterpriseImg from '../assets/service_enterprise_light.png';
import aiImg from '../assets/service_ai_light.png';
import staffImg from '../assets/service_staff_light.png';
import dataCenterImg from '../assets/service_data_center_light.png';
import digitalTransImg from '../assets/service_digital_light.png';
import techImg from '../assets/service_tech_light.png';

const servicesData = [
    {
        id: 1,
        title: "Enterprise Applications",
        description: "Systems That Run Your Business—Built to Evolve With It. ",
        icon: Briefcase,
        image: enterpriseImg,
        link: "/enterprise-applications"
    },
    {
        id: 2,
        title: "AI & Data Intelligence",
        description: "From Experimentation to Enterprise-Grade Intelligence. ",
        icon: BrainCircuit,
        image: aiImg,
        link: "/ai-data-analytics"
    },
    {
        id: 3,
        title: "Digital Transformation",
        description: "Reimagine How Your Business Operates, Competes, and Grows.",
        icon: Code,
        image: digitalTransImg,
        link: "/digital-transformation"
    },
    {
        id: 4,
        title: "Data Center Solutions",
        description: "Powering What Powers Your Business. ",
        icon: Server,
        image: dataCenterImg,
        link: "/data-center"
    },
    {
        id: 5,
        title: "Technology Services",
        description: "Build Smarter. Ship Faster. Scale Fearlessly",
        icon: Cloud,
        image: techImg,
        link: "/technology-services"
    },
    {
        id: 6,
        title: "Staff Augmentation",
        description: "The Right Talent. The Right Time. Zero Compromise. ",
        icon: Users,
        image: staffImg,
        link: "/staff-augmentation"
    }
];

const Services = () => {
    return (
        <section className="services-section" id="services">
            <div className="services-header">
                <h2 className="services-title">Our Core <strong>Capabilities</strong></h2>
                <p className="services-subtitle">We are best at</p>
            </div>

                        <div className="services-grid">
                {servicesData.map((service) => (
                    <div key={service.id} className="service-card">
                                                <div className="service-card-top">
                            <div className="service-icon-box">
                                <service.icon size={20} strokeWidth={2} />
                            </div>
                            <h3 className="service-card-title">{service.title}</h3>
                        </div>

                                                <div className="service-image-wrapper">
                            <img src={service.image} alt={service.title} className="service-image" />
                            <div className="service-card-overlay"></div>
                        </div>

                                                <div className="service-hover-content">
                            <h4 className="hover-service-title">{service.title}</h4>
                            <p className="hover-service-description">{service.description}</p>
                            {service.link && (
                                <Link to={service.link} className="service-learn-more">
                                    Learn More
                                </Link>
                            )}
                        </div>
                    </div>
                ))}
            </div>


        </section>
    );
};

export default Services;
