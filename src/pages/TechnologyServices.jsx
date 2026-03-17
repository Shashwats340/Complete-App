import React from 'react';
import Hero from '../components/Hero';
import CTASection from '../components/CTASection';
import './TechnologyServices.css';
import techBg from '../assets/App Dev and Development.png';

const TechnologyServices = () => {
    return (
        <div className="tech-services-page">
            <Hero
                eyebrow="Technology Services"
                title="Build Smarter. Ship Faster. Scale Fearlessly."
                subtitle="Our Technology Services practice helps organizations design, develop, and deploy software systems that are resilient, performant, and purpose-built for the challenges ahead."
                backgroundImage={techBg}
                className="premium-hero"
            />

            {/* What We Deliver Section */}
            <section className="tech-deliver-section">
                <div className="tech-deliver-header">
                    <h2 className="tech-deliver-title">What We Deliver</h2>
                </div>

                <div className="tech-deliver-grid">
                    <div className="deliver-card deliver-card-1">
                        <h3>Custom Software<br />Development</h3>
                        <p>Purpose-built applications designed and delivered across web, mobile, and cloud — using the right stack for your business.</p>
                    </div>
                    <div className="deliver-card deliver-card-2">
                        <h3>Cloud Architecture &<br />Migration</h3>
                        <p>Cloud-native architectures and structured migrations that optimize performance, cost, and scalability.</p>
                    </div>
                    <div className="deliver-card deliver-card-3">
                        <h3>API & Integration<br />Engineering</h3>
                        <p>Secure, scalable integration<br />frameworks that connect systems<br />and enable seamless data flow.</p>
                    </div>
                    <div className="deliver-card deliver-card-4">
                        <h3>DevOps & Platform<br />Engineering</h3>
                        <p>CI/CD, automation, and infrastructure foundations that accelerate reliable software delivery.</p>
                    </div>
                    <div className="deliver-card deliver-card-5">
                        <h3>Quality Engineering &<br />Test Automation</h3>
                        <p>Embedded testing and automation that ensure performance, security, and production-ready releases.</p>
                    </div>
                </div>
            </section>

            {/* Technologies We Work With Section */}
            <section className="tech-stack-section">
                <div className="tech-stack-container">
                    <div className="tech-stack-left">
                        <h2 className="tech-stack-title">Technologies We<br />Work With</h2>
                    </div>
                    <div className="tech-stack-right">
                        <div className="tech-stack-list">
                            <div className="tech-stack-item">
                                <h3>Languages & Frameworks</h3>
                                <p>Java, Python, .NET, Node.js, React, Angular,<br />Swift, Kotlin, Go</p>
                            </div>
                            <div className="tech-stack-item">
                                <h3>Cloud Platforms</h3>
                                <p>AWS, Microsoft Azure, Google Cloud Platform</p>
                            </div>
                            <div className="tech-stack-item">
                                <h3>Data & AI</h3>
                                <p>Snowflake, Databricks, Apache Kafka,<br />TensorFlow, PyTorch</p>
                            </div>
                            <div className="tech-stack-item">
                                <h3>DevOps</h3>
                                <p>Kubernetes, Docker, Terraform, GitHub Actions,<br />Jenkins, ArgoCD</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CTASection />
        </div>
    );
};

export default TechnologyServices;
