export const sanitizeBlogContent = (html, title = '') => {
    if (typeof window === 'undefined') {
        return html;
    }

    const parser = new DOMParser();
    const document = parser.parseFromString(html, 'text/html');
    const allowedTags = new Set([
        'A',
        'B',
        'BLOCKQUOTE',
        'BR',
        'EM',
        'H1',
        'H2',
        'H3',
        'H4',
        'H5',
        'H6',
        'HR',
        'IMG',
        'LI',
        'OL',
        'P',
        'STRONG',
        'UL',
    ]);

    const unwrapElement = (element) => {
        element.replaceWith(...Array.from(element.childNodes));
    };

    Array.from(document.body.querySelectorAll('*')).forEach((element) => {
        const tagName = element.tagName;

        if (!allowedTags.has(tagName)) {
            unwrapElement(element);
            return;
        }

        Array.from(element.attributes).forEach((attribute) => {
            const name = attribute.name.toLowerCase();
            const isSafeLinkAttribute = tagName === 'A' && ['href', 'target', 'rel'].includes(name);
            const isSafeImageAttribute = tagName === 'IMG' && ['src', 'alt'].includes(name);

            if (!isSafeLinkAttribute && !isSafeImageAttribute) {
                element.removeAttribute(attribute.name);
            }
        });

        if (tagName === 'A') {
            element.setAttribute('target', '_blank');
            element.setAttribute('rel', 'noreferrer noopener');
        }
    });

    const firstHeading = document.body.querySelector('h1, h2');
    if (firstHeading && title) {
        const headingText = (firstHeading.textContent || '').replace(/\s+/g, ' ').trim().toLowerCase();
        const titleText = title.replace(/\s+/g, ' ').trim().toLowerCase();

        if (headingText === titleText) {
            firstHeading.remove();
        }
    }

    Array.from(document.body.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li')).forEach((element) => {
        const text = (element.textContent || '').replace(/\s+/g, ' ').trim();
        const hasImage = element.querySelector('img');

        if (!text && !hasImage) {
            element.remove();
        }
    });

    return document.body.innerHTML.trim();
};
