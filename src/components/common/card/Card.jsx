import React from 'react';
import PropTypes from 'prop-types';
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

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};

export default Card;