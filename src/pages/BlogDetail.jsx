import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, User, Tag } from 'lucide-react';
import { fetchSingleFromStrapi, getStrapiMedia } from '../services/api';
import CTASection from '../components/CTASection';
import './BlogDetail.css';

const BlogDetail = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getBlog = async () => {
            try {
                const data = await fetchSingleFromStrapi('blogs', id);
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
    }, [id]);

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

    const formatContent = (text) => {
        if (!text) return null;

        // If it's HTML, return as is
        if (text.includes('<p>') || text.includes('<h2>') || text.includes('<div>')) {
            return <div className="content-body" dangerouslySetInnerHTML={{ __html: text }} />;
        }

        // Split by single newlines to catch headings that don't have double newlines
        const lines = text.split('\n');
        const elements = [];
        let currentParagraph = [];

        const flushParagraph = () => {
            if (currentParagraph.length > 0) {
                elements.push(<p key={`p-${elements.length}`}>{currentParagraph.join(' ')}</p>);
                currentParagraph = [];
            }
        };

        lines.forEach((line, idx) => {
            const trimmed = line.trim();
            if (!trimmed) {
                flushParagraph();
                return;
            }

            // Heading Detection Heuristic:
            // 1. Starts with # (Markdown)
            // 2. Short line (< 100 chars) AND (ends with ? OR no ending punctuation)
            const isMarkdownHeading = trimmed.startsWith('#');
            const isLikelyHeading = trimmed.length < 100 && (trimmed.endsWith('?') || !/[.!?]/.test(trimmed.slice(-1)));

            if (isMarkdownHeading || isLikelyHeading) {
                flushParagraph();
                const headingText = trimmed.replace(/^#+\s+/, '');
                elements.push(<h2 key={`h-${idx}`}>{headingText}</h2>);
            } else {
                currentParagraph.push(trimmed);
            }
        });

        flushParagraph();

        return (
            <div className="content-body">
                {elements}
            </div>
        );
    };

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
                            <span className="meta-value">{blog.date || new Date().toLocaleDateString()}</span>
                        </div>
                        <div className="meta-item">
                            <span className="meta-label">Author</span>
                            <span className="meta-value">{blog.author || 'Connexials Team'}</span>
                        </div>
                        <div className="meta-item">
                            <span className="meta-label">Department</span>
                            <span className="meta-value">{blog.category || 'Engineering'}</span>
                        </div>
                    </div>
                </header>

                <div className="blog-detail-hero">
                    <img
                        src={getStrapiMedia(blog.image) || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop'}
                        alt={blog.title}
                        className="blog-hero-image"
                    />
                </div>

                <article className="blog-detail-content">
                    {formatContent(blog.content)}
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
