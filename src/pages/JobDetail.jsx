import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Briefcase, Clock, MapPin } from 'lucide-react';

import CTASection from '../components/CTASection';
import { fetchJobBySlug, formatJobType } from '../services/api';
import './JobDetail.css';

const JobDetail = () => {
    const { slug } = useParams();
    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadJob = async () => {
            try {
                const data = await fetchJobBySlug(slug);
                if (data) {
                    setJob(data);
                }
            } catch (error) {
                console.error('Error loading job detail:', error);
            } finally {
                setLoading(false);
            }
        };

        loadJob();
    }, [slug]);

    if (loading) {
        return (
            <div className="job-detail-loading">
                <div className="loader"></div>
                <p>Loading job details...</p>
            </div>
        );
    }

    if (!job) {
        return (
            <div className="job-detail-error">
                <h2>Job not found</h2>
                <Link to="/careers" className="back-link">
                    <ArrowLeft size={20} /> Back to Careers
                </Link>
            </div>
        );
    }

    return (
        <div className="job-detail-page">
            <div className="container">
                <Link to="/careers" className="job-back-btn">
                    <ArrowLeft size={18} /> Back to Careers
                </Link>

                <header className="job-detail-header">
                    <span className="job-status-badge">{job.status}</span>
                    <h1 className="job-detail-title">{job.title}</h1>
                    <p className="job-detail-summary">
                        Explore the role details, expectations, and skill requirements for this opportunity.
                    </p>
                </header>

                <section className="job-detail-meta-grid">
                    <div className="job-meta-card">
                        <MapPin size={18} />
                        <div>
                            <span className="meta-label">Location</span>
                            <p>{job.location || 'Not specified'}</p>
                        </div>
                    </div>
                    <div className="job-meta-card">
                        <Clock size={18} />
                        <div>
                            <span className="meta-label">Type</span>
                            <p>{formatJobType(job.type)}</p>
                        </div>
                    </div>
                    <div className="job-meta-card">
                        <Briefcase size={18} />
                        <div>
                            <span className="meta-label">Experience</span>
                            <p>{job.experience || 'Not specified'}</p>
                        </div>
                    </div>
                </section>

                <section className="job-detail-content">
                    <div className="job-detail-main">
                        <h2>Role Description</h2>
                        <p>{job.description}</p>
                    </div>

                    <aside className="job-detail-side">
                        <div className="job-side-card">
                            <h3>Salary</h3>
                            <p>{job.salary || 'Shared during the hiring process'}</p>
                        </div>
                        <div className="job-side-card">
                            <h3>Skills</h3>
                            <p>{job.skills || 'Skills will be discussed during the interview process.'}</p>
                        </div>
                    </aside>
                </section>
            </div>

            <CTASection
                title="Interested in joining the Connexials team?"
                subtitle="Reach out through our careers page and let us know which opportunity fits your background."
                ctaText="View More Openings"
                ctaLink="/careers"
            />
        </div>
    );
};

export default JobDetail;
