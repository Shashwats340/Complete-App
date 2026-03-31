import React from 'react';
import Hero from '../components/Hero';
import FlexibleEngagement from '../components/FlexibleEngagement';
import TalentPromise from '../components/TalentPromise';
import CTASection from '../components/CTASection';
import { Monitor, Terminal, Smartphone, Cloud, ShieldCheck, PenTool, Building2, HardHat } from 'lucide-react';
import './StaffAugmentation.css';
import staffBg from '../assets/Staffing.png';

const expertCategories = [
    {
        icon: Monitor,
        title: <>FrontEnd<br />Engineering</>,
        tags: ['React', 'Angular', 'Modern UI Frameworks']
    },
    {
        icon: Terminal,
        title: <>Backend<br />Engineering</>,
        tags: ['JAVA', '.NET', 'Node', 'Scalable APIs']
    },
    {
        icon: Smartphone,
        title: <>Mobile<br />Development</>,
        tags: ['Android', 'iOS', 'Flutter', 'React Native']
    },
    {
        icon: Cloud,
        title: <>Cloud &<br />DevOps</>,
        tags: ['AWS', 'Azure', 'Google Cloud', 'CI/CD', 'Automation']
    },
    {
        icon: ShieldCheck,
        title: <>QA & Quality<br />Engineering</>,
        tags: ['Manual Testing', 'Automation', 'Performance', 'Integration Testing']
    },
    {
        icon: PenTool,
        title: <>UX/UI<br />Design</>,
        tags: ['Product Design', 'Experience Design']
    },
    {
        icon: Building2,
        title: <>Enterprise<br />Solutions</>,
        tags: ['SAP', 'Microsoft D365', 'Oracle', 'Salesforce']
    },
    {
        icon: HardHat,
        title: <>Architects &<br />Specialists</>,
        tags: ['Solution Architects', 'Enterprise Architects', 'AI Specialists']
    }
];

const StaffAugmentation = () => {
    return (
        <div className="staff-augmentation-page">
            <Hero
                eyebrow="Staff Augmentation"
                title={<>The Right Talent. The Right Time.<br />The Right Fit.</>}
                subtitle="Hiring exceptional technologists is hard. We provide vetted engineers who integrate seamlessly into your teams — aligned to your standards and delivering impact from day one."
                backgroundImage={staffBg}
                className="premium-hero"
            />

            <section className="staff-experts-section">
                <div className="staff-experts-header">
                    <div className="staff-header-content">
                        <h2 className="staff-section-title">Experts you can access</h2>
                        <p className="staff-section-subtitle">
                            Access enterprise-ready talent across critical technology domains.
                        </p>
                    </div>
                </div>

                <div className="staff-section-divider"></div>

                <div className="staff-experts-grid">
                    <div className="experts-track">
                        {[...expertCategories, ...expertCategories].map((category, index) => (
                            <div key={index} className="staff-expert-card">
                                <div className="staff-expert-icon">
                                    <category.icon size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className="staff-expert-title">{category.title}</h3>
                                <div className="staff-expert-tags">
                                    {category.tags.map((tag, tagIdx) => (
                                        <span key={tagIdx} className="staff-expert-tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <FlexibleEngagement />

            <TalentPromise />

            <section className="staff-why-section">
                <div className="staff-why-container">
                    <div className="staff-why-header">
                        <h2 className="staff-section-title">Why Choose Connexials?</h2>
                        <p className="staff-section-subtitle">
                            Enterprises partner with Connexials for reliability, scale,
                            and delivery confidence. We build long-term partnerships
                            that grow with your business.
                        </p>
                    </div>

                    <div className="staff-why-grid-container">
                        <div className="staff-why-grid">
                            <div className="staff-why-item">
                                <h3>1000+</h3>
                                <p>Resources deployed globally</p>
                            </div>
                            <div className="staff-why-item">
                                <h3>2-4 Weeks</h3>
                                <p>Average deployment time</p>
                            </div>
                            <div className="staff-why-item">
                                <h3>90%+</h3>
                                <p>Client Retention Rate</p>
                            </div>
                            <div className="staff-why-item">
                                <h3>3+ Years</h3>
                                <p>Average resource Tenure</p>
                            </div>
                            <div className="staff-why-item">
                                <h3>Global</h3>
                                <p>Presence across US, UK, EU,<br />MEA, APAC</p>
                            </div>
                            <div className="staff-why-item">
                                <h3>Deep</h3>
                                <p>Expertise across platforms,<br />cloud, AI, QA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CTASection />

        </div>
    );
};

export default StaffAugmentation;
