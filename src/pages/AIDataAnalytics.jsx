import React from 'react';
import Hero from '../components/Hero';
import CTASection from '../components/CTASection';
import WhatWeDeliver from '../components/WhatWeDeliver';
import OurApproach from '../components/OurApproach';
import './AIDataAnalytics.css';
import aiBg from '../assets/ai-data-bg.png';

const AIDataAnalytics = () => {
    return (
        <div className="ai-data-page">
            <Hero
                eyebrow="AI & Data Intelligence"
                title="Intelligence, Engineered for Enterprise."
                subtitle="AI and data are now core operating capabilities. Connexials designs AI-ready data ecosystems — powered by modern architecture and Snowflake and Databricks expertise — to deliver secure, scalable intelligence."
                backgroundImage={aiBg}
                className="premium-hero"
            />

            <WhatWeDeliver />
            <OurApproach />





            <CTASection />
        </div>
    );
};

export default AIDataAnalytics;
