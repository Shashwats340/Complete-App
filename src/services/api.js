const CMS_API_URL =
    import.meta.env.VITE_CMS_API_URL || 'http://localhost:4000/api/public';

const request = async (path) => {
    const response = await fetch(`${CMS_API_URL}${path}`);

    if (!response.ok) {
        throw new Error(`Failed to fetch CMS content: ${response.statusText}`);
    }

    return response.json();
};

export const fetchBlogs = () => request('/blogs');

export const fetchBlogBySlug = (slug) => request(`/blogs/${slug}`);

export const fetchJobs = () => request('/jobs');

export const fetchJobBySlug = (slug) => request(`/jobs/${slug}`);

export const getCmsMedia = (url) => url || null;

export const formatCmsDate = (value) => {
    if (!value) {
        return '';
    }

    return new Date(value).toLocaleDateString('en-US', {
        month: 'long',
        day: '2-digit',
        year: 'numeric',
    });
};

export const formatJobType = (value) => {
    if (!value) {
        return '';
    }

    return value.split('_').join(' ');
};
