import React, { useEffect, useState } from 'react';
import { StyledCard } from './card.styles';
import { generatePreview } from './preview-handler/previewHandler';

const Card = ({ title, content, tag }) => {
  const [display, setDisplay] = useState("default");

  useEffect(() => {
    let width = window.innerWidth;

    if(width < 1000){
      setDisplay("mobile");
    }
  })

  return (
    <StyledCard>
      <div className='card-header'>
        <span className='card-tag'>{tag}</span>
        <h2 className='card-title'>{generatePreview(title, display == "default" ? 70 : 45)}</h2>
        <p className='card-content'>{generatePreview(content, display == "default" ? 300 : 100)}</p>
      </div>
    </StyledCard>
  );
};

export default Card;