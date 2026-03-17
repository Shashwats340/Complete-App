import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import { Briefcase, BrainCircuit, Users, Server, Cloud, Code } from 'lucide-react';

const servicesData = [
    {
        id: 1,
        title: "Enterprise Applications",
        description: "Systems That Run Your Business—Built to Evolve With It. ",
        icon: Briefcase,
        link: "/enterprise-applications"
    },
    {
        id: 2,
        title: "AI & Data Intelligence",
        description: "From Experimentation to Enterprise-Grade Intelligence. ",
        icon: BrainCircuit,
        link: "/ai-data-analytics"
    },
    {
        id: 3,
        title: "Staff Augmentation",
        description: "The Right Talent. The Right Time. Zero Compromise. ",
        icon: Users,
        link: "/staff-augmentation"
    },
    {
        id: 4,
        title: "Data Center Solutions",
        description: "Powering What Powers Your Business. ",
        icon: Server,
        link: "/data-center"
    },
    {
        id: 5,
        title: "Technology Services",
        description: "Build Smarter. Ship Faster. Scale Fearlessly",
        icon: Cloud,
        link: "/technology-services"
    },
    {
        id: 6,
        title: "Digital Transformation",
        description: "Reimagine How Your Business Operates, Competes, and Grows.",
        icon: Code,
        link: "/digital-transformation"
    }
];

const Services = () => {
    return (
        <section className="services-section" id="services">
            <div className="services-header">
                <h2 className="services-title">Our Core <strong>Capabilities</strong></h2>
                <p className="services-subtitle">We are best at</p>
            </div>

            {/* New Grid Layout */}
            <div className="services-grid">
                {servicesData.map((service) => (
                    <div key={service.id} className="service-card-new">
                        <div className="service-header-row">
                            <div className="service-icon-wrapper">
                                <service.icon size={24} strokeWidth={1.5} />
                            </div>
                            {service.link ? (
                                <Link to={service.link} className="learn-more-btn">Learn More</Link>
                            ) : (
                                <button className="learn-more-btn">Learn More</button>
                            )}
                        </div>
                        <h3 className="service-title-new">{service.title}</h3>
                        <p className="service-desc-new">{service.description}</p>
                    </div>
                ))}
            </div>


        </section>
    );
};

export default Services;
