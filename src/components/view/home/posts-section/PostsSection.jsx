import React, { useEffect, useState } from 'react'
import { StylePostSection } from './postsSection.styles'
import Card from '../../../common/card/Card';
import { handleGetPosts } from './handle-post/handlePosts';

const PostsSection = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        handleGetPosts(setPosts)
    }, [])

    return (
        <StylePostSection>
            {posts.map((post) => (
                <div key={post.id} className='post-card'>
                    <Card title={post.title} content={post.content} tag={post.tags[0].name} />
                </div>
            ))}
        </StylePostSection>
    )
}
export default PostsSection


