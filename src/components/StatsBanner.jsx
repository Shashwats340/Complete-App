import React from 'react';
import './StatsBanner.css';

const statsData = [
    { id: 1, number: '10+', label: 'Years of Experience' },
    { id: 2, number: '500+', label: 'Successful Projects' },
    { id: 3, number: '85', label: 'Skilled Experts' },
    { id: 4, number: '24/7', label: 'Active Support' }
];

const StatsBanner = () => {
    return (
        <section className="stats-banner">
            <div className="stats-container">
                {statsData.map((stat, index) => (
                    <div key={stat.id} className={`stat-item ${index !== statsData.length - 1 ? 'with-divider' : ''}`}>
                        <h2 className="stat-number">{stat.number}</h2>
                        <p className="stat-label">{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StatsBanner;
