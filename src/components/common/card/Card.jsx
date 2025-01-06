import React from 'react';
import { StyledCard } from './card.styles';
import { generatePreview } from './preview-handler/previewHandler';

const Card = ({ title, content, tag }) => {
  return (
    <StyledCard>
      <div className='card-header'>
        <span className='card-tag'>{tag}</span>
        <h2 className='card-title'>{generatePreview(title, 100)}</h2>
        <p className='card-content'>{generatePreview(content, 300)}</p>
      </div>
    </StyledCard>
  );
};

export default Card;