import React from 'react';
import './WhatSetsUsApart.css';
import { TrendingUp, Users, Sparkles, Fingerprint } from 'lucide-react';

const setsApartData = [
    {
        id: 1,
        title: "Outcome-Obsessed Delivery",
        description: "We measure success by business impact- not hours billed. Every engagement starts with clear KPIs and a defined path to results.",
        icon: TrendingUp
    },
    {
        id: 2,
        title: "Hybrid Talent Model",
        description: "Specialists, embedded squads, or managed teams—scaled precisely to your project’s needs.",
        icon: Users
    },
    {
        id: 3,
        title: "AI-Native Mindset",
        description: "AI is built into how we design, develop, and deliver—not bolted on later.",
        icon: Sparkles
    },
    {
        id: 4,
        title: "Enterprise DNA",
        description: "Built for compliance, governance, and real-world enterprise complexity. Designed to integrate, not disrupt.",
        icon: Fingerprint
    }
];

const WhatSetsUsApart = () => {
    return (
        <section className="sets-apart-section">
            <div className="sets-apart-container">
                <h2 className="sets-apart-main-title">What Sets Us Apart</h2>
                <div className="sets-apart-grid">
                    {setsApartData.map((item, index) => (
                        <div key={item.id} className="sets-apart-item">
                            <div className="sets-apart-icon-wrapper">
                                <item.icon size={40} strokeWidth={1.5} className="sets-apart-icon" />
                            </div>
                            <h3 className="sets-apart-title">{item.title}</h3>
                            <p className="sets-apart-desc">{item.description}</p>
                            {index < setsApartData.length - 1 && <div className="sets-apart-divider"></div>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatSetsUsApart;
