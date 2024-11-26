import React from 'react'
import { StylePostSection } from './postsSection.styles'
import Card from '../../../common/card/Card';

const PostsSection = () => {
    const posts = [
        { title: 'Grupo de teatro do Campus Pinhais realiza encontro com atuais e ex-integrantes', tag: 'Tecnologia' },
        { title: 'Associação de Pais, Estudantes e Servidores é instituída no Campus Pinhais', tag: 'Ciência' },
        { title: 'IV Seminário de Ciência e Tecnologia (SCiTec) aconteceu em Pinhais', tag: 'Saúde' },
        { title: 'Equipe da Diretoria de Assistência Estudantil visita o Campus Pinhais', tag: 'Educação' },
    ];

    return (
        <StylePostSection>
            {posts.map((post, index) => (
                <div key={index} className='post-card'>
                    <Card title={post.title} image={post.image} tag={post.tag} />
                </div>
            ))}
        </StylePostSection>
    )
}
export default PostsSection

