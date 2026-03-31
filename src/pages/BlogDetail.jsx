import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { fetchBlogBySlug, formatCmsDate, getCmsMedia } from '../services/api';
import CTASection from '../components/CTASection';
import { sanitizeBlogContent } from '../utils/sanitizeBlogContent';
import './BlogDetail.css';

const BlogDetail = () => {
    const { slug } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getBlog = async () => {
            try {
                const data = await fetchBlogBySlug(slug);
                if (data) {
                    setBlog(data);
                }
            } catch (error) {
                console.error("Error loading blog detail:", error);
            } finally {
                setLoading(false);
            }
        };
        getBlog();
    }, [slug]);

    if (loading) {
        return (
            <div className="blog-detail-loading">
                <div className="loader"></div>
                <p>Loading article...</p>
            </div>
        );
    }

    if (!blog) {
        return (
            <div className="blog-detail-error">
                <h2>Article not found</h2>
                <Link to="/blog" className="back-link">
                    <ArrowLeft size={20} /> Back to Blog
                </Link>
            </div>
        );
    }

    const cleanedContent = sanitizeBlogContent(blog.content, blog.title);

    return (
        <div className="blog-detail-page">
            <div className="container">
                <Link to="/blog" className="blog-back-btn">
                    <ArrowLeft size={18} /> Back to Blog
                </Link>

                <header className="blog-detail-header">
                    <h1 className="blog-detail-title">{blog.title}</h1>

                    <div className="blog-detail-meta">
                        <div className="meta-item">
                            <span className="meta-label">Date</span>
                            <span className="meta-value">{formatCmsDate(blog.createdAt)}</span>
                        </div>
                        <div className="meta-item">
                            <span className="meta-label">Status</span>
                            <span className="meta-value">{blog.status}</span>
                        </div>
                    </div>
                </header>

                <div className="blog-detail-hero">
                    <img
                        src={getCmsMedia(blog.featuredImage) || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop'}
                        alt={blog.title}
                        className="blog-hero-image"
                    />
                </div>

                <article className="blog-detail-content">
                    <div className="content-body" dangerouslySetInnerHTML={{ __html: cleanedContent }} />
                </article>
            </div>

            <CTASection
                title="Ready to Build a Data and AI Strategy That Drives Measurable Business Outcomes?"
                subtitle="Connect with our senior consultants to review your current data landscape, prioritize opportunities, and define a roadmap that links analytics to revenue and growth."
                ctaText="Schedule a Consultation"
            />
        </div>
    );
};

export default BlogDetail;
