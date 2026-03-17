import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import CTASection from '../components/CTASection';
import { Search, ArrowUpRight, ArrowLeft, ArrowRight } from 'lucide-react';
import blogsHeroImg from '../assets/blogs.png';
import './Blog.css';
import { fetchFromStrapi, getStrapiMedia } from '../services/api';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const loadBlogs = async () => {
            try {
                const data = await fetchFromStrapi('blogs');
                if (data) {
                    setBlogs(data);
                }
            } catch (error) {
                console.error("Failed to load blogs:", error);
            } finally {
                setLoading(false);
            }
        };

        loadBlogs();
    }, []);

    const filteredBlogs = blogs.filter(post => {
        const query = searchQuery.toLowerCase();
        return (
            post.title?.toLowerCase().includes(query) ||
            post.description?.toLowerCase().includes(query) ||
            post.category?.toLowerCase().includes(query)
        );
    });

    const featuredBlogs = filteredBlogs.filter(post => post.featured);
    const recentPosts = filteredBlogs.filter(post => !post.featured);

    return (
        <div className="blog-page">
            <Hero
                eyebrow="Blog"
                title="Insights & Updates"
                subtitle="Discover fresh insights, industry trends, and expert perspectives that help you build, scale, and innovate"
                backgroundImage={blogsHeroImg}
                showCta={false}
                className="blog-hero-custom"
            >
                <div className="blog-search-wrapper">
                    <div className="blog-search-container">
                        <Search className="search-icon" size={20} />
                        <input
                            type="text"
                            placeholder="Search articles, topics..."
                            className="blog-search-input"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button className="blog-search-btn" onClick={() => { }}>
                            <ArrowUpRight size={20} />
                        </button>
                    </div>
                </div>
            </Hero>

            {/* Featured Blogs Section */}
            <section className="featured-blogs">
                <div className="container">
                    <h2 className="section-title">Featured Blogs</h2>
                    {loading ? (
                        <div className="loading">Loading featured insights...</div>
                    ) : (
                        <div className="blog-grid">
                            {featuredBlogs.length > 0 ? (
                                featuredBlogs.map((post) => (
                                    <Link to={`/blog/${post.documentId}`} className="blog-card-v2" key={post.id}>
                                        <div className="blog-card-image">
                                            <img
                                                src={getStrapiMedia(post.image) || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop'}
                                                alt={post.title}
                                            />
                                        </div>
                                        <div className="blog-card-body">
                                            <div className="blog-card-meta">
                                                <span>{post.category}</span>
                                                <span>{post.date || new Date().toLocaleDateString('en-US', { month: 'long', day: '2-digit', year: 'numeric' })}</span>
                                            </div>
                                            <h3 className="blog-card-title-v2">{post.title}</h3>
                                            <p className="blog-card-desc">{post.description}</p>
                                        </div>
                                    </Link>
                                ))
                            ) : (
                                <div className="no-results">
                                    {searchQuery ? `No featured blogs matching "${searchQuery}"` : "No featured blogs found."}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </section>

            {/* Recent Blog Posts Section */}
            <section className="recent-blogs">
                <div className="container">
                    <h2 className="recent-blogs-title">Recent Blog Posts</h2>
                    {loading ? (
                        <div className="loading">Loading recent posts...</div>
                    ) : (
                        <div className="blog-grid-recent">
                            {recentPosts.length > 0 ? (
                                recentPosts.map((post) => (
                                    <Link to={`/blog/${post.documentId}`} className="blog-card-recent" key={post.id}>
                                        <div className="blog-card-image">
                                            <img
                                                src={getStrapiMedia(post.image) || 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop'}
                                                alt={post.title}
                                            />
                                        </div>
                                        <div className="blog-card-body-recent">
                                            <div className="blog-card-meta-recent">
                                                <span>{post.category}</span>
                                                <span>{post.date || new Date().toLocaleDateString('en-US', { month: 'long', day: '2-digit', year: 'numeric' })}</span>
                                            </div>
                                            <h3 className="blog-card-title-recent">{post.title}</h3>
                                            <p className="blog-card-desc-recent">{post.description}</p>
                                        </div>
                                    </Link>
                                ))
                            ) : (
                                <div className="no-results">
                                    {searchQuery ? `No blog posts matching "${searchQuery}"` : "No recent posts found."}
                                </div>
                            )}
                        </div>
                    )}

                    {/* Pagination - Only shown if blogs exceed 6 */}
                    {recentPosts.length > 6 && (
                        <div className="blog-pagination">
                            <button className="pagination-arrow prev">
                                <ArrowLeft size={20} />
                            </button>
                            <div className="pagination-numbers">
                                <span className="pagination-number active">01</span>
                                <span className="pagination-number">02</span>
                                <span className="pagination-number">03</span>
                                <span className="pagination-number">04</span>
                                <span className="pagination-number">05</span>
                                <span className="pagination-number">06</span>
                                <span className="pagination-number">07</span>
                                <span className="pagination-number">08</span>
                                <span className="pagination-number">09</span>
                                <span className="pagination-number">10</span>
                                <span className="pagination-dots">...</span>
                            </div>
                            <button className="pagination-arrow next">
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    )}
                </div>
            </section>

            <CTASection />
        </div>
    );
};

export default Blog;
