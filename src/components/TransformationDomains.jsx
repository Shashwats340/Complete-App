import React from 'react';
import './TransformationDomains.css';

const TransformationDomains = () => {
    return (
        <section className="domains-section">
            <h2 className="domains-title">Transformation Domains</h2>

            <div className="domains-grid">
                <div className="domain-card domain-card-1">
                    <h3 className="domain-card-title">Customer Experience<br />Transformation</h3>
                    <p className="domain-card-desc">Redesign digital touchpoints to create seamless, personalized experiences that drive acquisition, retention, and lifetime value.</p>
                </div>

                <div className="domain-card domain-card-2">
                    <h3 className="domain-card-title">Data-Driven Decision<br />Making</h3>
                    <p className="domain-card-desc">Establish modern data platforms,<br />analytics capabilities, and governance<br />frameworks that put actionable insights<br />in the hands of decision-makers.</p>
                </div>

                <div className="domain-card domain-card-3">
                    <h3 className="domain-card-title">Business Model<br />Innovation</h3>
                    <p className="domain-card-desc">Explore new revenue streams, subscription models, and platform strategies enabled by digital capabilities.</p>
                </div>

                <div className="domain-card domain-card-4">
                    <h3 className="domain-card-title">Operational Excellence</h3>
                    <p className="domain-card-desc">Automate manual processes,<br />optimize supply chains, and build<br />real-time decision-making<br />capabilities that reduce cost and<br />increase agility.</p>
                </div>

                <div className="domain-card domain-card-5">
                    <h3 className="domain-card-title">Workforce Enablement</h3>
                    <p className="domain-card-desc">Deploy collaboration tools, knowledge management systems, and AI assistants that amplify employee productivity and<br />satisfaction.</p>
                </div>
            </div>
        </section>
    );
};

export default TransformationDomains;
