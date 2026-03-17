const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';

/**
 * Fetches data from Strapi API
 * @param {string} endpoint - The API endpoint (e.g., 'blogs', 'jobs')
 * @param {Object} params - Query parameters
 * @returns {Promise<any>}
 */
export const fetchFromStrapi = async (endpoint, params = {}) => {
    const query = new URLSearchParams();

    // Default to populate=* if no populate param provided for complex media types
    if (!params.populate) {
        params.populate = '*';
    }

    Object.entries(params).forEach(([key, value]) => {
        query.append(key, value);
    });

    try {
        const response = await fetch(`${STRAPI_URL}/api/${endpoint}?${query.toString()}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch from Strapi: ${response.statusText}`);
        }
        const json = await response.json();

        // Handle both Strapi V4 (nested attributes) and V5 (flattened) formats
        if (json.data) {
            return Array.isArray(json.data)
                ? json.data.map(item => item.attributes ? { id: item.id, ...item.attributes } : item)
                : (json.data.attributes ? { id: json.data.id, ...json.data.attributes } : json.data);
        }
        return json.data;
    } catch (error) {
        console.error(`Error fetching ${endpoint}:`, error);
        return null;
    }
};

/**
 * Normalizes image URL from Strapi
 * @param {Object} imageObj - The image object from Strapi response
 * @returns {string|null}
 */
export const getStrapiMedia = (imageObj) => {
    if (!imageObj) return null;

    // Strapi 5 structure might be simplified but we handle nested data for safety
    const url = imageObj.url || (imageObj.attributes && imageObj.attributes.url);
    if (!url) return null;

    if (url.startsWith('/')) {
        return `${STRAPI_URL}${url}`;
    }
    return url;
};

/**
 * Fetches a single item from Strapi API
 * @param {string} endpoint - The API endpoint (e.g., 'blogs', 'jobs')
 * @param {string|number} id - The item ID
 * @param {Object} params - Query parameters
 * @returns {Promise<any>}
 */
export const fetchSingleFromStrapi = async (endpoint, id, params = {}) => {
    const query = new URLSearchParams();

    if (!params.populate) {
        params.populate = '*';
    }

    Object.entries(params).forEach(([key, value]) => {
        query.append(key, value);
    });

    try {
        console.log(`Fetching from Strapi: ${STRAPI_URL}/api/${endpoint}/${id}?${query.toString()}`);
        const response = await fetch(`${STRAPI_URL}/api/${endpoint}/${id}?${query.toString()}`);
        if (!response.ok) {
            console.error(`Strapi fetch error: ${response.status} ${response.statusText}`);
            throw new Error(`Failed to fetch from Strapi: ${response.statusText}`);
        }
        const json = await response.json();
        console.log(`Strapi response for ${endpoint} ${id}:`, json);

        if (json.data) {
            return Array.isArray(json.data)
                ? json.data.map(item => item.attributes ? { id: item.id, ...item.attributes } : item)
                : (json.data.attributes ? { id: json.data.id, ...json.data.attributes } : json.data);
        }
        return json.data;
    } catch (error) {
        console.error(`Error fetching ${endpoint} ${id}:`, error);
        return null;
    }
};
