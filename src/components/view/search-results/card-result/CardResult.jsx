import React from 'react';
import { StyledCardResult } from './cardResult.styles';

const CardResult = ({ title, content, tag }) => {
  const extractTextFromHtml = (htmlContent) => {
    const div = document.createElement('div');
    div.innerHTML = htmlContent;
    return div.textContent || div.innerText || '';
  };

  const contentPreview = (htmlText, length) => {
    const plainText = extractTextFromHtml(htmlText);
    
    if (plainText.length > length) {
      if(plainText[length - 1] === ' '){
        return plainText.substring(0, length - 1) + '...';
      }
      return plainText.substring(0, length) + '...';
    }
    
    return plainText;
  };

  return (
    <StyledCardResult>
      <div className='card-header'>
        <span className='card-tag'>{tag}</span>
        <h2 className='card-title'>{title}</h2>
        <p className='card-content'>{contentPreview(content, 150)}</p>
      </div>
    </StyledCardResult>
  );
};

export default CardResult;