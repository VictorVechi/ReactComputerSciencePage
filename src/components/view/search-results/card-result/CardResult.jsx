import React from 'react';
import { StyledCardResult } from './cardResult.styles';

const CardResult = ({ title, content, tag }) => {
  const contentPreview = (text, length) => {
    if (text.length > length) {
      if(text[length - 1] === ' '){
        return text.substring(0, length - 1) + '...';
      }

      return text.substring(0, length) + '...';
    }

    return text;
  }

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