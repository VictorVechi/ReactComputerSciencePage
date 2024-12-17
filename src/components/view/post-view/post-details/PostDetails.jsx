import React from 'react';
import { useLocation } from 'react-router-dom';
import { StyledPostDetails, PostTitle, PostContent, PostTag, PostDate } from './postDetails.styles';

const PostDetails = () => {
    const location = useLocation();
    const { post } = location.state;

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString('pt-BR')
    }

    return (
        <StyledPostDetails>
            <PostTag>{post.tags[0].name}</PostTag>
            <PostTitle>{post.title}</PostTitle>
            <PostDate>Publicado em: <strong>{formatDate(post.createdAt)}</strong></PostDate>
            <PostContent>{post.content}</PostContent>
        </StyledPostDetails>
    );
};

export default PostDetails;