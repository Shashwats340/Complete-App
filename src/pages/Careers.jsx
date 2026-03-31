import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { MapPin, Clock, Briefcase, ChevronRight, ChevronLeft, CloudUpload } from 'lucide-react';
import './Careers.css';
import { fetchJobs, formatJobType } from '../services/api';

const Careers = () => {
    const testimonialsData = [
        {
            id: 1,
            name: "Sarah Chen",
            role: "Senior Software Engineer",
            stars: 5,
            comment: "The emphasis on clean architecture and ownership here is real. It's refreshing to work where your technical input is actually valued."
        },
        {
            id: 2,
            name: "Michael Ross",
            role: "Full Stack Developer",
            stars: 5,
            comment: "I love the collaborative culture. Even as a junior, I felt supported from day one. There's always someone willing to mentor you."
        },
        {
            id: 3,
            name: "Emily Zhang",
            role: "Technical Lead",
            stars: 4,
            comment: "Working on mission-critical platforms keeps things exciting. You know your code is making a difference at scale for enterprise clients."
        },
        {
            id: 4,
            name: "David Miller",
            role: "DevOps Engineer",
            stars: 5,
            comment: "The growth opportunities are outstanding. I've had the chance to lead complex migrations and learn cutting-edge cloud technologies."
        },
        {
            id: 5,
            name: "Arjun Mehta",
            role: "Senior Backend Engineer",
            stars: 5,
            comment: "The technical exposure here is unparalleled. Working on high-scale systems teaches you things that no tutorial ever can."
        },
        {
            id: 6,
            name: "Priyanka Patil",
            role: "Frontend Developer",
            stars: 5,
            comment: "The collaborative atmosphere and focus on innovation make every workday exciting. I've truly found a place where I can grow."
        }
    ];

    const scrollRef = useRef(null);
    const testimonialsScrollRef = useRef(null);
    
    const handleHorizontalScroll = (ref, direction) => {
        if (ref.current) {
            const { current } = ref;
            const scrollAmount = 400;
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadJobs = async () => {
            try {
                const data = await fetchJobs();
                if (data) {
                    setJobs(data);
                }
            } catch (error) {
                console.error("Failed to load jobs:", error);
            } finally {
                setLoading(false);
            }
        };

        loadJobs();
    }, []);



    const teamImages = [
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
    ];

    return (
        <div className="careers-page">
            <Hero
                eyebrow="Careers"
                title="Build the technologies of tomorrow, today."
                subtitle="At Connexials, we build systems that power enterprises and deliver lasting impact. We're engineers and problem-solvers who value quality, accountability, and real outcomes. If you take pride in your craft, you'll fit right in"
                ctaText="View Openings"
                ctaLink="#openings"
            />

            <section className="careers-benefits-section">
                <div className="benefits-container">
                    <div className="benefits-left">
                        <h2 className="tech-benefits-title">Why Join<br />Connexials?</h2>
                        <p className="tech-benefits-desc">
                            We believe that great work happens when talented individuals feel supported,
                            challenged, and empowered to grow.
                        </p>
                    </div>
                    <div className="benefits-divider"></div>
                    <div className="benefits-right">
                        <div className="benefit-item">
                            <h3 className="benefit-item-title">Work That Counts</h3>
                            <p className="benefit-item-desc">
                                You'll work on mission-critical platforms, AI systems, and enterprise
                                applications used at scale — not experimental side projects that never ship.
                            </p>
                        </div>
                        <div className="benefit-item">
                            <h3 className="benefit-item-title">Ownership, Not Hierarchy</h3>
                            <p className="benefit-item-desc">
                                We operate with accountability. You'll be trusted to think, propose, build,
                                and improve — not just execute tickets.
                            </p>
                        </div>
                        <div className="benefit-item">
                            <h3 className="benefit-item-title">Engineering Excellence</h3>
                            <p className="benefit-item-desc">
                                Clean architecture. Modern stacks. Thoughtful code reviews. Production discipline.
                                We build things the right way.
                            </p>
                        </div>
                        <div className="benefit-item">
                            <h3 className="benefit-item-title">Continuous Growth</h3>
                            <p className="benefit-item-desc">
                                We invest in learning — certifications, emerging technologies, leadership development,
                                and cross-functional exposure.
                            </p>
                        </div>
                        <div className="benefit-item">
                            <h3 className="benefit-item-title">Global Exposure</h3>
                            <p className="benefit-item-desc">
                                Collaborate with enterprise clients, high-growth firms, and cross-border teams
                                solving complex problems.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="jobs-section" id="openings">
                <div className="jobs-container">
                    {loading ? (
                        <div className="loading">Loading open positions...</div>
                    ) : jobs.length > 0 ? (
                        jobs.map((job) => (
                            <div key={job.id} className="job-card">
                                <div className="job-info">
                                    <h3 className="job-title">{job.title}</h3>
                                    <div className="job-meta">
                                        <span className="meta-item"><MapPin size={16} /> {job.location}</span>
                                        <span className="meta-separator">|</span>
                                        <span className="meta-item"><Clock size={16} /> {formatJobType(job.type)}</span>
                                        <span className="meta-separator">|</span>
                                        <span className="meta-item"><Briefcase size={16} /> {job.experience || 'Experience not listed'}</span>
                                    </div>
                                </div>
                                <Link className="view-job-btn" to={`/careers/${job.slug}`}>View Job</Link>
                            </div>
                        ))
                    ) : (
                        <p className="no-jobs">No open positions at the moment. Please check back later or send a general application.</p>
                    )}
                </div>
            </section>

                        <section className="team-culture-section">
                <div className="team-culture-container">
                    <h2 className="section-title">Teams & Culture</h2>
                    <div className="carousel-wrapper">
                        <div className="team-carousel" ref={scrollRef}>
                            {teamImages.map((img, index) => (
                                <img key={index} src={img} alt={`Team ${index + 1}`} className="team-img" />
                            ))}
                        </div>
                        <button className="carousel-arrow right" onClick={() => handleHorizontalScroll(scrollRef, 'right')}>
                            <ChevronRight />
                        </button>
                        <button className="carousel-arrow left" onClick={() => handleHorizontalScroll(scrollRef, 'left')}>
                            <ChevronLeft />
                        </button>
                    </div>
                </div>
            </section>
                        <section className="employee-speak-section">
                <div className="employee-speak-container">
                    <h2 className="section-title">Employee Speak</h2>
                    <div className="carousel-wrapper">
                        <div className="testimonials-scroll" ref={testimonialsScrollRef}>
                            {testimonialsData.map((testimonial) => (
                                <div key={testimonial.id} className="testimonial-card">
                                    <div className="testimonial-stars">
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} className={i < testimonial.stars ? "star filled" : "star"}>★</span>
                                        ))}
                                    </div>
                                    <p className="testimonial-comment">"{testimonial.comment}"</p>
                                    <div className="testimonial-footer">
                                        <h4 className="testimonial-name">{testimonial.name}</h4>
                                        <p className="testimonial-role">{testimonial.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="carousel-arrow right" onClick={() => handleHorizontalScroll(testimonialsScrollRef, 'right')}>
                            <ChevronRight />
                        </button>
                        <button className="carousel-arrow left" onClick={() => handleHorizontalScroll(testimonialsScrollRef, 'left')}>
                            <ChevronLeft />
                        </button>
                    </div>
                </div>
            </section>

                        <section className="general-app-section">
                <div className="general-app-container">
                    <div className="general-app-content">
                        <div className="general-app-text">
                            <h2 className="general-app-title">Don't See The Right Role?</h2>
                            <p className="general-app-desc">
                                We're always looking for talented people. Send us your resume
                                and we will reach out when a matching opportunity opens.
                            </p>
                        </div>

                        <div className="general-app-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" className="form-input" />
                                </div>
                                <div className="form-group">
                                    <label>Email ID.</label>
                                    <input type="email" className="form-input" />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Upload Resume</label>
                                <div className="file-upload-box">
                                    <CloudUpload size={24} className="upload-icon" />
                                    <p className="upload-text">
                                        <span className="upload-link">Click to upload</span> or drag and drop
                                    </p>
                                    <small className="upload-hint">SVG, PNG, JPG or GIF (max. 800x400px)</small>
                                </div>
                            </div>

                            <button className="view-job-btn-white">Send Application</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Careers;
