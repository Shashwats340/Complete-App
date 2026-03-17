import React from 'react';
import Hero from '../components/Hero';
import WhoWeAre from '../components/WhoWeAre';
import Services from '../components/Services';
import WhatSetsUsApart from '../components/WhatSetsUsApart';
import StatsBanner from '../components/StatsBanner';
import CTASection from '../components/CTASection';
import BlogsSection from '../components/BlogsSection';
import SuccessStories from '../components/SuccessStories';

const Home = () => {
    return (
        <>
            <Hero
                title={<>Engineering Tomorrow’s<br />Enterprises. Today.</>}
                subtitle="Connexials partners with forward-thinking organizations to architect, build, and scale technology that turns complexity into competitive advantage. From AI platforms to enterprise applications, we deliver the talent and execution to move businesses forward."
            />
            <StatsBanner />
            <WhoWeAre />
            <Services />
            <WhatSetsUsApart />
            <SuccessStories />
            <BlogsSection />
            <CTASection />
        </>
    );
};

export default Home;
