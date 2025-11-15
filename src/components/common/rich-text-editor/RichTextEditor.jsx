import React, { useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DOMPurify from 'dompurify';
import { StyledRichTextEditor } from './richTextEditor.styles';

const RichTextEditor = ({ value, onChange, placeholder = "Digite o conteúdo aqui..." }) => {
  const quillRef = useRef();

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['blockquote'],
      ['link'],
      [{ 'align': [] }],
      ['clean']
    ],
    clipboard: {
      matchVisual: false,
    }
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike',
    'list', 'bullet',
    'blockquote',
    'link',
    'align'
  ];

  const fixUrls = (content) => {
    const div = document.createElement('div');
    div.innerHTML = content;
    
    const links = div.querySelectorAll('a');
    links.forEach(link => {
      let href = link.getAttribute('href');
      if (href && !href.match(/^(https?:\/\/|mailto:)/i)) {
        link.setAttribute('href', `https://${href}`);
      }
    });
    
    return div.innerHTML;
  };

  const handleChange = (content) => {
    const contentWithFixedUrls = fixUrls(content);
    
    const sanitizedContent = DOMPurify.sanitize(contentWithFixedUrls, {
      ALLOWED_TAGS: [
        'p', 'br', 'strong', 'b', 'em', 'i', 'u', 's',
        'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
        'ul', 'ol', 'li',
        'blockquote',
        'a'
      ],
      ALLOWED_ATTR: ['href', 'target', 'rel', 'class'],
      ALLOWED_URI_REGEXP: /^(?:(?:https?|mailto):|[^a-z]|[a-z+.-]+(?:[^a-z+.\-:]|$))/i
    });
    
    onChange(sanitizedContent);
  };

  return (
    <StyledRichTextEditor>
      <ReactQuill
        ref={quillRef}
        theme="snow"
        value={value}
        onChange={handleChange}
        modules={modules}
        formats={formats}
        placeholder={placeholder}
      />
    </StyledRichTextEditor>
  );
};

export default RichTextEditor;
