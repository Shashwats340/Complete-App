import React from 'react';
import './FlexibleEngagement.css';
import { UserCheck, Users, Network } from 'lucide-react';

const FlexibleEngagement = () => {
    return (
        <section className="flexible-engagement-section">
            <div className="flexible-engagement-container">
                {/* Left Side: Title & Subtitle */}
                <div className="flexible-left-col">
                    <h2 className="flexible-title">
                        Flexible Engagement<br />
                        Models
                    </h2>
                    <p className="flexible-subtitle">
                        Designed to support enterprise-scale<br />
                        programs and long-term delivery.
                    </p>
                </div>

                {/* Right Side: Models List */}
                <div className="flexible-right-col">

                    {/* Item 1 */}
                    <div className="flexible-item">
                        <div className="flexible-icon-wrapper">
                            <UserCheck size={36} strokeWidth={1.5} className="flexible-icon" color="#2563EB" />
                        </div>
                        <div className="flexible-content">
                            <h3 className="flexible-item-title">Individual Specialists</h3>
                            <p className="flexible-item-desc">
                                Need a senior data engineer, a DevOps architect, or a Salesforce developer? We place individual experts who fill critical skill gaps on your existing teams. Each specialist goes through a multi-stage vetting process that evaluates technical depth, problem-solving ability, communication skills, and cultural fit.
                            </p>
                        </div>
                    </div>

                    <div className="flexible-divider"></div>

                    {/* Item 2 */}
                    <div className="flexible-item">
                        <div className="flexible-icon-wrapper">
                            <Users size={36} strokeWidth={1.5} className="flexible-icon" color="#2563EB" />
                        </div>
                        <div className="flexible-content">
                            <h3 className="flexible-item-title">Dedicated Teams</h3>
                            <p className="flexible-item-desc">
                                For larger initiatives, we assemble and manage cross-functional teams that operate as an extension of your organization. Each team includes the right mix of developers, QA engineers, UX designers, and technical leads—all aligned to your delivery cadence and quality standards.
                            </p>
                        </div>
                    </div>

                    <div className="flexible-divider"></div>

                    {/* Item 3 */}
                    <div className="flexible-item">
                        <div className="flexible-icon-wrapper">
                            <Network size={36} strokeWidth={1.5} className="flexible-icon" color="#2563EB" />
                        </div>
                        <div className="flexible-content">
                            <h3 className="flexible-item-title">Build-Operate-Transfer</h3>
                            <p className="flexible-item-desc">
                                Want to establish a permanent technology center but need expert help getting started? Our Build-Operate-Transfer model lets us recruit, onboard, and manage a high-performing team on your behalf—then transition full ownership to you when the operation reaches maturity
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FlexibleEngagement;
