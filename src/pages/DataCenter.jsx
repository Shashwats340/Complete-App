import React from 'react';
import Hero from '../components/Hero';
import CTASection from '../components/CTASection';
import { Cloud, Server, Database, Box, Play, Layout, ShieldCheck, Activity, Users, Layers, Globe, TrendingUp } from 'lucide-react';
import './DataCenter.css';
import dataBg from '../assets/data-center-bg.png';

const solutionsData = [
    {
        title: "Cloud Services",
        description: "Design, deploy, and manage workloads on AWS, Azure, and GCP for performance and cost efficiency.",
        icon: Cloud
    },
    {
        title: "Hybrid Data Centers",
        description: "Connect on-premise infrastructure with cloud platforms for scalable, flexible hybrid environments.",
        icon: Database
    },
    {
        title: "High Performance Computing",
        description: "Build HPC environments for AI, simulations, and big data with high-speed processing and GPU support.",
        icon: Activity
    },
    {
        title: "Physical Infrastructure",
        description: "Assembly, deployment, and management of servers, storage, networking, power, and cooling.",
        icon: Server
    },
    {
        title: "Design & Architecture",
        description: "Proven, customizable Data Center solution trusted by clients worldwide.",
        icon: Layout
    },
    {
        title: "Data Center Migration",
        description: "Seamless migration of apps and data to new centers or cloud with minimal downtime.",
        icon: Box
    },
    {
        title: "Virtualization",
        description: "Reduce costs by virtualizing servers and consolidating workloads into efficient environments.",
        icon: Play
    },
    {
        title: "Network & Security",
        description: "High-speed networks and enterprise security controls including firewalls and identity management.",
        icon: ShieldCheck
    },
    {
        title: "Managed Services",
        description: "24/7 monitoring, patching, and proactive support to keep systems running smoothly.",
        icon: Users
    }
];

const DataCenter = () => {
    return (
        <div className="datacenter-page">
            <Hero
                eyebrow="Data Center Solutions"
                title={<>Powering Modern Businesses With<br />Secure, Scalable Infrastructure</>}
                subtitle="We help organizations design, build, and manage data center and cloud environments that deliver high availability, strong security, and the flexibility to scale."
                backgroundImage={dataBg}
                className="premium-hero"
            />

                        <section className="datacenter-solutions-section">
                <div className="datacenter-solutions-header">
                    <h2 className="datacenter-solutions-title">Our Data Center Solutions</h2>
                    <p className="datacenter-solutions-subtitle">
                        We handle everything across your infrastructure lifecycle from planning and deployment to
                        cloud integration and ongoing operations. Our team works with enterprise and hyperscale
                        platforms to create reliable, cost effective, and future ready data environments.
                    </p>
                </div>

                <div className="datacenter-solutions-grid">
                    {solutionsData.map((item, index) => (
                        <div key={index} className={`datacenter-solution-card card-${index + 1}`}>
                            <div className="solution-icon-box">
                                <item.icon size={28} strokeWidth={1.5} color="#0056b3" />
                            </div>
                            <h3 className="solution-card-title">{item.title}</h3>
                            <p className="solution-card-description">{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>

                        <section className="cloud-partner-section">
                <div className="cloud-partner-container">
                    <div className="cloud-partner-left">
                        <h2 className="cloud-partner-title">
                            Cloud Partner<br />
                            Ecosystem
                        </h2>
                        <p className="cloud-partner-description">
                            We work closely with the world's
                            leading cloud platforms to
                            deliver secure, reliable, and
                            scalable infrastructure solutions.
                        </p>
                    </div>
                    <div className="cloud-partner-divider"></div>
                    <div className="cloud-partner-right">

                        <div className="cloud-platform-list">
                            <div className="cloud-platform-item">
                                <div className="platform-icon-wrapper aws">
                                    <Cloud size={32} strokeWidth={1.5} />
                                </div>
                                <div className="platform-content">
                                    <h4 className="platform-name">Amazon Web Services (AWS)</h4>
                                    <p className="platform-desc">
                                        Build and scale applications on the world's most trusted cloud
                                        platform. We help you migrate, optimize, and manage
                                        workloads on AWS for performance and cost efficiency.
                                    </p>
                                </div>
                            </div>
                            <div className="cloud-platform-item">
                                <div className="platform-icon-wrapper azure">
                                    <Layout size={32} strokeWidth={1.5} />
                                </div>
                                <div className="platform-content">
                                    <h4 className="platform-name">Microsoft Azure</h4>
                                    <p className="platform-desc">
                                        Run enterprise workloads with deep integration into Microsoft
                                        tools. Our experts help you build hybrid cloud, business
                                        continuity, and secure application environments.
                                    </p>
                                </div>
                            </div>
                            <div className="cloud-platform-item">
                                <div className="platform-icon-wrapper gcp">
                                    <Database size={32} strokeWidth={1.5} />
                                </div>
                                <div className="platform-content">
                                    <h4 className="platform-name">Google Cloud Platform</h4>
                                    <p className="platform-desc">
                                        Leverage advanced data analytics and AI. We help you
                                        deploy and manage scalable solutions on Google
                                        Cloud for innovation and growth.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

                        <section className="hpc-infrastructure-section">
                <div className="hpc-header">
                    <h2 className="hpc-title">
                        High Performance &<br />
                        Physical Infrastructure
                    </h2>
                    <p className="hpc-description">
                        From AI training to financial modeling, our HPC solutions deliver
                        the compute power you need. We also handle the physical foundation
                        —servers, racking, and cooling—to ensure peak performance.
                    </p>
                </div>

                <div className="hpc-grid">
                    <div className="hpc-card">
                        <div className="hpc-icon-wrapper">
                            <Activity size={32} strokeWidth={1.5} color="#034EA2" />
                        </div>
                        <h3 className="hpc-card-title">HPC Environments</h3>
                        <p className="hpc-card-desc">
                            High-speed processing and GPU support for complex workloads.
                        </p>
                    </div>
                    <div className="hpc-card-divider"></div>
                    <div className="hpc-card">
                        <div className="hpc-icon-wrapper">
                            <Server size={32} strokeWidth={1.5} color="#034EA2" />
                        </div>
                        <h3 className="hpc-card-title">Server Deployment</h3>
                        <p className="hpc-card-desc">
                            Enterprise-grade server assembly and rack optimization.
                        </p>
                    </div>
                    <div className="hpc-card-divider"></div>
                    <div className="hpc-card">
                        <div className="hpc-icon-wrapper">
                            <Box size={32} strokeWidth={1.5} color="#034EA2" />
                        </div>
                        <h3 className="hpc-card-title">Power & Cooling</h3>
                        <p className="hpc-card-desc">
                            Efficient management to ensure hardware reliability.
                        </p>
                    </div>
                </div>
            </section>

                        <section className="migration-operations-section">
                <div className="migration-container">
                    <div className="migration-left">
                        <h2 className="migration-title">
                            Migration & Managed<br />
                            Operations
                        </h2>
                        <p className="migration-description">
                            Moving to a new environment shouldn't disrupt
                            your business. We ensure smooth migrations and
                            provide 24/7 ongoing support to keep your
                            infrastructure resilient.
                        </p>
                    </div>
                    <div className="migration-divider"></div>
                    <div className="migration-right">

                        <div className="migration-list">
                            <div className="migration-item">
                                <h4 className="migration-item-title">Seamless Migration</h4>
                                <p className="migration-item-desc">
                                    Planning, testing, and validation for minimal downtime.
                                </p>
                            </div>
                            <div className="migration-item">
                                <h4 className="migration-item-title">Virtualization</h4>
                                <p className="migration-item-desc">
                                    Consolidating workloads to reduce operational costs.
                                </p>
                            </div>
                            <div className="migration-item">
                                <h4 className="migration-item-title">24/7 Monitoring</h4>
                                <p className="migration-item-desc">
                                    Proactive performance management and patching.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

                        <section className="datacenter-why-section">
                <div className="datacenter-why-header">
                    <h2 className="datacenter-why-title">Why Choose Us?</h2>
                    <p className="datacenter-why-subtitle">
                        High performance infrastructure built for today and tomorrow.
                        We ensure every deployment meets enterprise standards from
                        start to finish.
                    </p>
                </div>

                <div className="datacenter-why-grid">
                    <div className="datacenter-why-card card-1">
                        <div className="why-icon-wrapper">
                            <Layers size={40} className="why-icon" />
                        </div>
                        <h3 className="why-card-title">End-To-End Delivery</h3>
                        <p className="why-card-desc">
                            From physical server installation to public cloud
                            management, we handle the full stack.
                        </p>
                    </div>
                    <div className="datacenter-why-card card-2">
                        <div className="why-icon-wrapper">
                            <Globe size={40} className="why-icon" />
                        </div>
                        <h3 className="why-card-title">Strategic Partnerships</h3>
                        <p className="why-card-desc">
                            Deep expertise and strong relationships with AWS, Azure,
                            and Google Cloud.
                        </p>
                    </div>
                    <div className="datacenter-why-card card-3">
                        <div className="why-icon-wrapper">
                            <ShieldCheck size={40} className="why-icon" />
                        </div>
                        <h3 className="why-card-title">Secure & Compliant</h3>
                        <p className="why-card-desc">
                            Architectures designed for high availability and strict
                            security compliance.
                        </p>
                    </div>
                    <div className="datacenter-why-card card-4">
                        <div className="why-icon-wrapper">
                            <TrendingUp size={40} className="why-icon" />
                        </div>
                        <h3 className="why-card-title">Ongoing Optimization</h3>
                        <p className="why-card-desc">
                            Managed support to ensure your infrastructure evolves with
                            your business.
                        </p>
                    </div>
                </div>
            </section>

            <CTASection />

        </div>
    );
};

export default DataCenter;
