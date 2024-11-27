import React, { useEffect, useState } from 'react'
import { StylePostSection } from './postsSection.styles'
import Card from '../../../common/card/Card';
import Api from '../../../../service/Api';

const PostsSection = () => {
    const [posts, setPosts] = useState([])

    const handleGetPosts = async () => {
        try {
            const apiInstance = Api.getInstance();
            const response = await apiInstance.getPublicacaoAll();
            setPosts(response.data.slice(-4))
        } catch (error) {
            console.log("Erro na busca de post", error);
        }
    }

    useEffect(() => {
        handleGetPosts()
    }, [])

    return (
        <StylePostSection>
            {posts.map((post, index) => (
                <div key={index} className='post-card'>
                    <Card title={post.title} content={post.content} tag={post.tags[0].name} />
                </div>
            ))}
        </StylePostSection>
    )
}
export default PostsSection


