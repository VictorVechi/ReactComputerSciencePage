import React from 'react';
import { StyledCard } from './card.styles';

const Card = ({ title, content, tag }) => {
  const contentPreview = (text, length) => {
    if (text.length > length) {
      return text.substring(0, length) + '...';
    }

    return text;
  }

  return (
    <StyledCard>
      <div className='card-header'>
        <span className='card-tag'>{tag}</span>
        <h2 className='card-title'>{title}</h2>
        <p className='card-content'>{contentPreview(content, 300)}</p>
      </div>
    </StyledCard>
  );
};

export default Card;