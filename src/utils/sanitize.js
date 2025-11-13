import DOMPurify from 'dompurify';

export const sanitizeHTML = (dirty) => {
    if (!dirty) return '';
    return DOMPurify.sanitize(dirty, {
        ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'u', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li', 'a', 'blockquote', 'code', 'pre', 'hr', 'span', 'div'],
        ALLOWED_ATTR: ['href', 'target', 'rel', 'class']
    });
};

export const sanitizeText = (dirty) => {
    if (!dirty) return '';
    return DOMPurify.sanitize(dirty, { ALLOWED_TAGS: [], KEEP_CONTENT: true });
};

export const sanitizeURL = (url) => {
    if (!url) return '';
    const sanitized = DOMPurify.sanitize(url, { ALLOWED_TAGS: [], KEEP_CONTENT: true });
    if (sanitized.match(/^(https?|mailto):/i) || !sanitized.match(/^[a-z]+:/i)) return sanitized;
    return '';
};

export const useSanitizedHTML = (html) => ({ __html: sanitizeHTML(html) });
