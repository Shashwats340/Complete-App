import React, { useState } from 'react';
import './WhatWeDeliver.css';

// Placeholder image (will need real assets eventually)
import placeholderImg from '../assets/bg.img.png';

const tabContent = [
    {
        id: 'data-eng',
        title: 'Data Engineering & Modern Data Platforms',
        description: `Intelligence begins with trusted, well-architected data. We design scalable foundations that unify fragmented systems and enable real-time insight.\n\nOur partnerships with Snowflake and Databricks enable us to implement secure, high-performance, and AI-ready data ecosystems tailored to enterprise scale.`,
        bullets: [
            'Enterprise data architecture & modernization',
            'Real-time data pipelines & streaming architectures',
            'Cloud-native data platforms on Snowflake and Databricks',
            'Data governance, quality, and lineage frameworks',
            'Lakehouse & modern data warehouse design'
        ],
        image: placeholderImg // Using existing bg image as placeholder for now 
    },
    {
        id: 'adv-analytics',
        title: 'Advanced Analytics & Business Intelligence',
        description: `We move organizations from reporting to real decision intelligence.\n\nWe ensure analytics environments are tightly integrated with enterprise data platforms to deliver accurate, trusted insights.`,
        bullets: [
            'Executive dashboards & KPI frameworks',
            'Operational performance analytics',
            'Self-service BI enablement',
            'Operational performance analytics', /* intentionally duplicated based on user screenshot */
            'Predictive & scenario modeling'
        ],
        image: placeholderImg
    },
    {
        id: 'ml-eng',
        title: 'Machine Learning Engineering',
        description: `We build production-ready ML systems — not isolated experiments.\n\nOur experience across Snowflake and Databricks ML ecosystems allows us to operationalize machine learning directly within modern data architectures.`,
        bullets: [
            'Predictive modeling & forecasting',
            'Optimization models',
            'Recommendation engines',
            'Feature engineering & model lifecycle management',
            'Anomaly detection systems'
        ],
        image: placeholderImg
    },
    {
        id: 'gen-ai',
        title: 'Generative AI & Intelligent Automation',
        description: `Enterprise-grade generative AI solutions built securely and responsibly.\n\nWe design AI systems that are compliant, governed, and aligned with enterprise data controls.`,
        bullets: [
            'Custom LLM integrations',
            'Document intelligence & workflow automation',
            'Retrieval-Augmented Generation (RAG) architectures',
            'Secure knowledge search systems',
            'AI copilots & enterprise assistants'
        ],
        image: placeholderImg
    },
    {
        id: 'mlops',
        title: 'MLOps & AI Infrastructure',
        description: `Production reliability is as important as model accuracy.\n\nOur approach ensures sustained performance — not short-lived pilots.`,
        bullets: [
            'Model deployment & orchestration',
            'Experiment tracking & A/B testing',
            'Automated retraining pipelines',
            'Governance, auditability & observability',
            'Drift detection & monitoring'
        ],
        image: placeholderImg
    },
    {
        id: 'ai-strategy',
        title: 'AI & Data Strategy',
        description: `Not every organization is ready for AI at scale. We help leadership teams:\n\nPractical. Risk-aware. Outcome-driven.`,
        bullets: [
            'Identify high-value use cases',
            'Design phased adoption roadmaps',
            'Assess data maturity and platform readiness',
            'Establish AI Centers of Excellence',
            'Define ROI metrics and governance models'
        ],
        image: placeholderImg
    }
];

const WhatWeDeliver = () => {
    const [activeTab, setActiveTab] = useState(tabContent[0]);

    return (
        <section className="what-we-deliver-section">
            <h2 className="wwd-title">What We Deliver</h2>

            <div className="wwd-container">
                {/* Left Sidebar Tabs */}
                <div className="wwd-tabs-column">
                    {tabContent.map((tab) => (
                        <button
                            key={tab.id}
                            className={`wwd-tab-btn ${activeTab.id === tab.id ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab.title}
                        </button>
                    ))}
                </div>

                {/* Right Content Area */}
                <div className="wwd-content-column">
                    <div className="wwd-content-inner">
                        {/* Render descriptions with paragraph breaks */}
                        {activeTab.description.split('\n\n').map((paragraph, idx) => (
                            <p key={idx} className="wwd-description">
                                {paragraph}
                            </p>
                        ))}

                        <ul className="wwd-bullets-grid">
                            {activeTab.bullets.map((bullet, idx) => (
                                <li key={idx} className="wwd-bullet-item">
                                    {bullet}
                                </li>
                            ))}
                        </ul>

                        <div className="wwd-image-container">
                            <img
                                src={activeTab.image}
                                alt={activeTab.title}
                                className="wwd-content-image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDeliver;
