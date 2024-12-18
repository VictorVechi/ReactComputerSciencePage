import React, { useEffect, useState } from 'react'
import { StylePostSection } from './postsSection.styles'
import Card from '../../../common/card/Card';
import { handleGetPosts } from './handle-post/handlePosts';
import { useNavigate } from 'react-router-dom';

const PostsSection = () => {
    const [posts, setPosts] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        handleGetPosts(setPosts)
    }, [])

    const handleCardClick = (post) => {
        navigate(`/post/${post.id}`, { state: { post } })
    }

    return (
        <StylePostSection>
            {posts.map((post) => (
                <div key={post.id} className='post-card' onClick={() => handleCardClick(post)}>
                    <Card title={post.title} content={post.content} tag={post.tags[0].name} />
                </div>
            ))}
        </StylePostSection>
    )
}
export default PostsSection


