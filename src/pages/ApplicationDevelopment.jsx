import React from 'react';
import Hero from '../components/Hero';
import CTASection from '../components/CTASection';
import { Settings, Globe, Waypoints, Lightbulb, PenTool, Server, Code2, Box, LayoutPanelLeft } from 'lucide-react';
import StickyScrollLayout from '../components/StickyScrollLayout';
import transformImg from '../assets/transform.png';
import './ApplicationDevelopment.css';

const ApplicationDevelopment = () => {
    return (
        <div className="app-dev-page">
            <Hero
                eyebrow="Application Development and Assurance"
                title={<>Build Resilient, Scalable<br />Software with Confidence.</>}
                subtitle="From custom application development to automated quality assurance, we help enterprises build secure, high-performance software that drives innovation and stands the test of scale."
            />

            {/* Business Problems We Solve Section */}
            <section className="app-problems-section">
                <div className="app-problems-header">
                    <h2 className="app-problems-title">Business Problems We Solve</h2>
                    <p className="app-problems-subtitle">
                        Building great software is hard. We solve the technical and operational<br />
                        challenges that hold back your innovation.
                    </p>
                </div>

                <div className="app-problems-grid">
                    {/* Card 1 */}
                    <div className="app-problem-card">
                        <div className="app-problem-icon-wrapper">
                            <Settings size={28} className="app-problem-icon" />
                        </div>
                        <h3 className="app-problem-name">Slow Time To Market</h3>
                        <p className="app-problem-desc">
                            Inefficient development processes and manual deployments delay product launches. We implement agile and DevOps to accelerate delivery.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="app-problem-card">
                        <div className="app-problem-icon-wrapper">
                            <Settings size={28} className="app-problem-icon" />
                        </div>
                        <h3 className="app-problem-name">Technical Debt</h3>
                        <p className="app-problem-desc">
                            Legacy systems and messy codebases increase maintenance costs. We refactor and modernize applications for long-term sustainability.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="app-problem-card">
                        <div className="app-problem-icon-wrapper">
                            <Settings size={28} className="app-problem-icon" />
                        </div>
                        <h3 className="app-problem-name">Quality & Security Risks</h3>
                        <p className="app-problem-desc">
                            Bugs and vulnerabilities in production damage reputation. We integrate automated testing and security early in the lifecycle.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="app-problem-card">
                        <div className="app-problem-icon-wrapper">
                            <Settings size={28} className="app-problem-icon" />
                        </div>
                        <h3 className="app-problem-name">Scalability Issues</h3>
                        <p className="app-problem-desc">
                            Applications that crash under load limit growth. We design cloud-native architectures built to handle enterprise scale.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Capabilities Sticky Scroll Section */}
            <StickyScrollLayout
                title="Our Capabilities"
                subtitle="We provide full-lifecycle application services, from initial design and development to rigorous testing and ongoing management."
            >
                <div className="app-capabilities-list">
                    <div className="app-capability-item">
                        <h3>Custom App Development</h3>
                    </div>
                    <div className="app-capability-item">
                        <h3>Mobile Applications</h3>
                    </div>
                    <div className="app-capability-item">
                        <h3>QA & Control</h3>
                    </div>
                    <div className="app-capability-item">
                        <h3>Application Modernization</h3>
                    </div>
                    <div className="app-capability-item">
                        <h3>DevOps & CI/CD</h3>
                    </div>
                    <div className="app-capability-item border-none">
                        <h3>API Integration</h3>
                    </div>
                </div>
            </StickyScrollLayout>

            {/* Custom Software Development Section */}
            <section className="app-custom-dev-section">
                <div className="app-custom-header">
                    <h2 className="app-custom-title">Custom Software Development</h2>
                    <p className="app-custom-subtitle">
                        Off-the-shelf software doesn't always fit. We build custom web and mobile<br />
                        applications tailored to your specific business processes, ensuring high performance,<br />
                        usability, and scalability.
                    </p>
                </div>

                <div className="app-custom-grid">
                    <div className="app-custom-card">
                        <div className="app-custom-icon-wrapper">
                            <Globe size={40} className="app-custom-icon" />
                        </div>
                        <h3 className="app-custom-card-title">Full-Stack<br />Engineering</h3>
                        <p className="app-custom-card-desc">
                            Expertise in Java, .NET,<br />Node.js, Python, React, and<br />Angular.
                        </p>
                    </div>
                    <div className="app-custom-card">
                        <div className="app-custom-icon-wrapper">
                            <Waypoints size={40} className="app-custom-icon" />
                        </div>
                        <h3 className="app-custom-card-title">Cloud-Native<br />Architecture</h3>
                        <p className="app-custom-card-desc">
                            Building resilient<br />microservices on AWS, Azure,<br />and Google Cloud.
                        </p>
                    </div>
                    <div className="app-custom-card">
                        <div className="app-custom-icon-wrapper">
                            <Lightbulb size={40} className="app-custom-icon" />
                        </div>
                        <h3 className="app-custom-card-title">Mobile<br />Solutions</h3>
                        <p className="app-custom-card-desc">
                            Native (iOS/Android) and<br />cross-platform (Flutter/React<br />Native) apps.
                        </p>
                    </div>
                    <div className="app-custom-card">
                        <div className="app-custom-icon-wrapper">
                            <PenTool size={40} className="app-custom-icon" />
                        </div>
                        <h3 className="app-custom-card-title">API-First<br />Design</h3>
                        <p className="app-custom-card-desc">
                            Robust APIs to connect your<br />ecosystem and enable<br />third-party integrations.
                        </p>
                    </div>
                </div>
            </section>                {/* Quality Assurance & Control Section */}
            <section className="app-qa-section">
                <div className="app-qa-header">
                    <h2 className="app-qa-title">Quality Assurance & Control</h2>
                    <p className="app-qa-subtitle">
                        Quality isn't an afterthought—it's engineered. We<br />
                        use automated testing frameworks and rigorous<br />
                        quality protocols to ensure your software is bug-<br />
                        free, secure, and ready for users.
                    </p>
                </div>

                <div className="app-qa-grid">
                    {/* Card 1 */}
                    <div className="app-qa-card">
                        <div className="app-qa-image-wrapper">
                            <img src={transformImg} alt="Test Automation" className="app-qa-image" />
                        </div>
                        <div className="app-qa-card-content">
                            <h3 className="app-qa-card-title">Test<br />Automation</h3>
                            <p className="app-qa-card-desc">
                                Reducing manual effort with Selenium, Cypress, and Playwright automation.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="app-qa-card">
                        <div className="app-qa-image-wrapper">
                            <img src={transformImg} alt="Performance Testing" className="app-qa-image" />
                        </div>
                        <div className="app-qa-card-content">
                            <h3 className="app-qa-card-title">Performance<br />Testing</h3>
                            <p className="app-qa-card-desc">
                                Load and stress testing to ensure stability under peak traffic.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="app-qa-card">
                        <div className="app-qa-image-wrapper">
                            <img src={transformImg} alt="Security Testing (DAST/SAST)" className="app-qa-image" />
                        </div>
                        <div className="app-qa-card-content">
                            <h3 className="app-qa-card-title">Security Testing<br />(DAST/SAST)</h3>
                            <p className="app-qa-card-desc">
                                Identifying vulnerabilities early with integrated security scanning.
                            </p>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="app-qa-card">
                        <div className="app-qa-image-wrapper">
                            <img src={transformImg} alt="Mobile & Compatibility" className="app-qa-image" />
                        </div>
                        <div className="app-qa-card-content">
                            <h3 className="app-qa-card-title">Mobile &<br />Compatibility</h3>
                            <p className="app-qa-card-desc">
                                Ensuring consistent experiences across devices and browsers.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Modernization Section */}
            <section className="app-mod-section">
                <div className="app-mod-header">
                    <h2 className="app-mod-title">Application Modernization</h2>
                    <p className="app-mod-subtitle">
                        Don't let legacy systems slow you down. We modernize aging applications to<br />
                        improve performance, reduce costs, and leverage the full power of the cloud<br />
                        without disrupting your business.
                    </p>
                </div>

                <div className="app-mod-grid">
                    <div className="app-mod-item">
                        <div className="app-mod-icon-wrapper">
                            <Server className="app-mod-icon" size={32} />
                        </div>
                        <h3 className="app-mod-item-title">Re-Platforming</h3>
                        <p className="app-mod-item-desc">
                            Moving applications to modern cloud infrastructure with minimal code changes.
                        </p>
                    </div>
                    <div className="app-mod-item">
                        <div className="app-mod-icon-wrapper">
                            <Code2 className="app-mod-icon" size={32} />
                        </div>
                        <h3 className="app-mod-item-title">Code Refactoring</h3>
                        <p className="app-mod-item-desc">
                            Optimizing code for maintainability, performance, and readability.
                        </p>
                    </div>
                    <div className="app-mod-item">
                        <div className="app-mod-icon-wrapper">
                            <Box className="app-mod-icon" size={32} />
                        </div>
                        <h3 className="app-mod-item-title">Containerization</h3>
                        <p className="app-mod-item-desc">
                            Docker and Kubernetes implementation for scalable deployment.
                        </p>
                    </div>
                    <div className="app-mod-item">
                        <div className="app-mod-icon-wrapper">
                            <LayoutPanelLeft className="app-mod-icon" size={32} />
                        </div>
                        <h3 className="app-mod-item-title">UI/UX Refresh</h3>
                        <p className="app-mod-item-desc">
                            Modernizing interfaces to improve user adoption and satisfaction.
                        </p>
                    </div>
                </div>
            </section>

            {/* DevOps & CI/CD Sticky Scroll Section */}
            <StickyScrollLayout
                title="DevOps & CI/CD"
                subtitle="Accelerate delivery with a culture of automation. We help you implement DevOps practices that bridge the gap between development and operations, ensuring faster, more reliable releases."
            >
                <div className="app-devops-content">
                    <div className="app-devops-list">
                        <div className="app-devops-item">
                            <h4 className="app-devops-item-title">CI/CD Pipeline</h4>
                            <p className="app-devops-item-desc">
                                Fully automated build, test, and deploy pipelines (Jenkins, GitHub Actions).
                            </p>
                        </div>
                        <div className="app-devops-item">
                            <h4 className="app-devops-item-title">Infrastructure as Code</h4>
                            <p className="app-devops-item-desc">
                                Managing infrastructure with Terraform, Ansible, or CloudFormation.
                            </p>
                        </div>
                        <div className="app-devops-item">
                            <h4 className="app-devops-item-title">Continuous Monitoring</h4>
                            <p className="app-devops-item-desc">
                                Real-time visibility into application health and performance.
                            </p>
                        </div>
                        <div className="app-devops-item border-none">
                            <h4 className="app-devops-item-title">DevSecOps</h4>
                            <p className="app-devops-item-desc">
                                Embedding security checks into every stage of the pipeline.
                            </p>
                        </div>
                    </div>
                </div>
            </StickyScrollLayout>

            <CTASection />
        </div>
    );
};

export default ApplicationDevelopment;
