import React from 'react';
import { StyledCard, CardImage, CardTitle, CardTag, CardHeader } from './card.styles';

const Card = ({ title, image, tag }) => {
  return (
    <StyledCard>
      <CardImage src={image} alt={title} />
      <CardHeader>
        <CardTag>{tag}</CardTag>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
    </StyledCard>
  );
};


export default Card;