import React from 'react';
import { StyledCard } from './card.styles';

const Card = ({ title, tag }) => {
  return (
    <StyledCard>
      <div className='card-header'>
        <span className='card-tag'>{tag}</span>
        <h2 className='card-title'>{title}</h2>
      </div>
    </StyledCard>
  );
};

export default Card;