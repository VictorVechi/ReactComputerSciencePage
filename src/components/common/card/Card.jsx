import React from 'react';
import { StyledCard, CardTitle, CardTag, CardHeader } from './card.styles';

const Card = ({ title, tag }) => {
  return (
    <StyledCard>
      <CardHeader>
        <CardTag>{tag}</CardTag>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
    </StyledCard>
  );
};


export default Card;