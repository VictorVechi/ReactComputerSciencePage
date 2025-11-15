import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { StyledPostDetails } from './postDetails.styles';
import { RichTextDisplay } from '../../../common/rich-text-display/RichTextDisplay';

const PostDetails = () => {
    const location = useLocation();
    const { post } = location.state;

    const formatDate = (date) => {
        const data = new Date(date).toLocaleDateString('pt-BR')
        if (data === 'Invalid Date') {
            return "Indefinido"
        }
        
        return data
    }

    useState(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <StyledPostDetails>
            <span className='PostTag'>{post.tags[0].name}</span>
            <h1 className='PostTitle'>{post.title}</h1>
            <span className='PostDate'>Publicado em: <strong>{formatDate(post.createdAt)}</strong></span>
            <RichTextDisplay content={post.content} />
        </StyledPostDetails>
    );
};

export default PostDetails;