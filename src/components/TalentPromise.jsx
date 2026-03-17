import React from 'react';
import './TalentPromise.css';

const TalentPromise = () => {
    return (
        <section className="promise-section">
            <h2 className="promise-title">The Connexials Talent Promise</h2>

            <div className="promise-bento-grid">
                {/* Large Left Card */}
                <div className="promise-card-bento bento-large-left">
                    <div className="bento-content">
                        <h3 className="bento-card-title">Rapid Deployment</h3>
                        <p className="bento-card-desc">
                            Qualified candidates presented within 48 to 72 hours for most roles. Urgent needs can be addressed even faster through our bench of pre-vetted professionals.
                        </p>
                    </div>
                </div>

                {/* Middle Top Card */}
                <div className="promise-card-bento bento-mid-top">
                    <div className="bento-content">
                        <h3 className="bento-card-title">Rigorous Vetting</h3>
                        <p className="bento-card-desc">
                            Multi-stage technical and behavioral screening to ensure proven capability.
                        </p>
                    </div>
                </div>

                {/* Middle Bottom Card */}
                <div className="promise-card-bento bento-mid-bottom">
                    <div className="bento-content">
                        <h3 className="bento-card-title">Seamless Integration</h3>
                        <p className="bento-card-desc">
                            Aligned to your stack, processes, and team from day one.
                        </p>
                    </div>
                </div>

                {/* Right Top Card */}
                <div className="promise-card-bento bento-right-top">
                    <div className="bento-content">
                        <h3 className="bento-card-title">Continuous Quality</h3>
                        <p className="bento-card-desc">
                            Ongoing performance oversight and structured feedback for sustained impact.
                        </p>
                    </div>
                </div>

                {/* Right Bottom Card */}
                <div className="promise-card-bento bento-right-bottom">
                    <div className="bento-content">
                        <h3 className="bento-card-title">Flexible Scale</h3>
                        <p className="bento-card-desc">
                            Scale up or down based on demand without long-term constraints.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TalentPromise;
