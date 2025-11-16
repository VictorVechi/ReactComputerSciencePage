import React, { useMemo } from 'react';
import DOMPurify from 'dompurify';
import { StyledRichTextDisplay } from './richTextDisplay.styles';

export const RichTextDisplay = ({ content }) => {
  const sanitizedContent = useMemo(() => {
    return DOMPurify.sanitize(content, {
      ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'u', 's', 'ol', 'ul', 'li', 'blockquote', 'code', 'pre', 'a', 'h1', 'h2', 'h3'],
      ALLOWED_ATTR: ['href', 'target', 'rel'],
      ALLOWED_URI_REGEXP: /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,
    });
  }, [content]);

  return (
    <StyledRichTextDisplay 
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
    />
  );
};
