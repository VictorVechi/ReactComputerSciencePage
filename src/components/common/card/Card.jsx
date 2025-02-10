import React, { useEffect, useState } from 'react';
import { StyledCard } from './card.styles';
import { generatePreview, setPreviewSize } from './preview-handler/previewHandler';

const Card = ({ title, content, tag }) => {
  const [titleSize, setTitleSize] = useState(70);
  const [contentSize, setContentSize] = useState(300);

  useEffect(() => {
    setPreviewSize(setTitleSize, setContentSize)
  }, [])

  return (
    <StyledCard>
      <div className='card-header'>
        <span className='card-tag'>{tag}</span>
        <h2 className='card-title'>{generatePreview(title, titleSize)}</h2>
        <p className='card-content'>{generatePreview(content, contentSize)}</p>
      </div>
    </StyledCard>
  );
};

export default Card;