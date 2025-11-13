import { useSanitizedHTML } from '../../../utils/sanitize';

export const SafeHTML = ({ content, className }) => {
    const sanitizedContent = useSanitizedHTML(content);
    return <div className={className} dangerouslySetInnerHTML={sanitizedContent} />;
};

export default SafeHTML;
