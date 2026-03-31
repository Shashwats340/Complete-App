import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './BlogsSection.css';
import { ArrowLeft, ArrowRight, Loader2 } from 'lucide-react';
import { fetchBlogs, formatCmsDate, getCmsMedia } from '../services/api';

const BlogsSection = () => {
    const scrollContainerRef = useRef(null);
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getBlogs = async () => {
            try {
                const data = await fetchBlogs();
                if (data && Array.isArray(data)) {
                    // Show latest 6 blogs on home page
                    setBlogs(data.slice(0, 6));
                }
            } catch (error) {
                console.error("Error fetching blogs for home page:", error);
            } finally {
                setLoading(false);
            }
        };
        getBlogs();
    }, []);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = 350; // Approx card width + gap
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    if (loading) {
        return (
            <div className="blogs-section-loading">
                <Loader2 className="animate-spin" size={40} />
                <p>Loading latest insights...</p>
            </div>
        );
    }

    return (
        <section className="blogs-section">
            <div className="blogs-header">
                <h2 className="blogs-title">Blogs</h2>
            </div>

            <div className="blogs-slider-wrapper">
                <div className="slider-controls-mobile">
                    <button className="blog-nav-btn prev" onClick={() => scroll('left')} aria-label="Scroll left">
                        <ArrowLeft size={24} />
                    </button>
                    <button className="blog-nav-btn next" onClick={() => scroll('right')} aria-label="Scroll right">
                        <ArrowRight size={24} />
                    </button>
                </div>

                <button className="blog-nav-btn prev desktop-only" onClick={() => scroll('left')} aria-label="Scroll left">
                    <ArrowLeft size={24} />
                </button>

                <div className="blogs-scroll-container" ref={scrollContainerRef}>
                    {blogs.length > 0 ? (
                        blogs.map((blog) => (
                            <Link to={`/blog/${blog.slug}`} className="blog-card" key={blog.id}>
                                <div className="blog-image-wrapper">
                                    <img
                                        src={getCmsMedia(blog.featuredImage) || 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop'}
                                        alt={blog.title}
                                        className="blog-image"
                                    />
                                </div>
                                <div className="blog-content">
                                    <div className="blog-meta">
                                        <span className="blog-category">{blog.status}</span>
                                        <span className="blog-meta-divider">|</span>
                                        <span className="blog-date">{formatCmsDate(blog.createdAt)}</span>
                                    </div>
                                    <h3 className="blog-card-title">{blog.title}</h3>
                                    <p className="blog-description">{blog.excerpt}</p>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <div className="no-blogs-message">
                            No blog posts available at the moment.
                        </div>
                    )}
                </div>

                <button className="blog-nav-btn next desktop-only" onClick={() => scroll('right')} aria-label="Scroll right">
                    <ArrowRight size={24} />
                </button>
            </div>

            <div className="view-all-container">
                <Link to="/blog" className="view-all-btn">
                    View all
                </Link>
            </div>
        </section>
    );
};

export default BlogsSection;
