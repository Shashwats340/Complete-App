import React from 'react';
import './EnterpriseServices.css';

const services = [
    {
        id: 'erp',
        title: "ERP Implementation & Optimization",
        description: "Implementing and optimizing ERP platforms that unify operations, finance, and supply chain for measurable ROI.",
        colorClass: "bg-blue-1",
        gridArea: "erp",
        align: "flex-start"
    },
    {
        id: 'custom-portals',
        title: "Custom Enterprise Portals & Workflows",
        description: "Building tailored portals and workflow systems that streamline operations and eliminate bottlenecks.",
        colorClass: "bg-blue-2",
        gridArea: "portals",
        align: "flex-start"
    },
    {
        id: 'legacy',
        title: "Legacy System Modernization",
        description: "Modernizing legacy systems through phased, low-risk transformation that preserves core value.",
        colorClass: "bg-blue-4",
        gridArea: "legacy",
        align: "flex-start"
    },
    {
        id: 'crm',
        title: "CRM & Customer Engagement Platforms",
        description: "Designing CRM Ecosystems That Deliver A Unified Customer View And Drive Smarter Engagement.",
        colorClass: "bg-blue-3",
        gridArea: "crm",
        align: "flex-start"
    },
    {
        id: 'integration',
        title: "Enterprise Integration & Middleware",
        description: "Connecting enterprise systems with secure, real-time integration architectures.",
        colorClass: "bg-blue-1",
        gridArea: "integration",
        align: "flex-start"
    }
];

const EnterpriseServices = () => {
    return (
        <section className="ent-services-section">
            <h2 className="ent-services-title">Our Enterprise Application Services</h2>

            <div className="ent-services-container">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className={`ent-service-card ${service.colorClass}`}
                        style={{ gridArea: service.gridArea, justifyContent: service.align }}
                    >
                        <h3 className="ent-service-card-title">{service.title}</h3>
                        <p className="ent-service-card-desc">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default EnterpriseServices;
