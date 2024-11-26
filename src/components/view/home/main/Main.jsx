import React from 'react'
import { StyleMain } from './main.styles'
import Card from '../../../common/card/Card'

const Main = () => {
    const posts = [
        { title: 'Grupo de teatro do Campus Pinhais realiza encontro com atuais e ex-integrantes', tag: 'Tecnologia' },
        { title: 'Associação de Pais, Estudantes e Servidores é instituída no Campus Pinhais', tag: 'Ciência' },
        { title: 'IV Seminário de Ciência e Tecnologia (SCiTec) aconteceu em Pinhais', tag: 'Saúde' },
        { title: 'Equipe da Diretoria de Assistência Estudantil visita o Campus Pinhais', tag: 'Educação' },
    ];

    return (
        <StyleMain>
            <section className='student-area-section'>
                <div className='content'>
                    <div className='text-second-section'>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur fugiat placeat id ut, omnis explicabo harum nihil assumenda eveniet consectetur asperiores iusto quasi. Quaerat iusto non voluptatibus, illum adipisci earum!
                        </p>
                    </div>
                </div>
                <div className='right-button'>
                    <a href="https://sei.ifpr.edu.br/sei/modulos/pesquisa/md_pesq_documento_consulta_externa.php?9LibXMqGnN7gSpLFOOgUQFziRouBJ5VnVL5b7-UrE5RWSqtE-LSj0koYd3KUyHCzVmyseU6baq85rW3LNDkcCuYfNj96-xh0PBsewwDdGeZsjV3tOkqRq0z73pqNUXy3&_gl=1*3n7i9g*_ga*NjYxOTI0NDgzLjE2OTk1NzQ2NTc.*_ga_7V1B6HEL02*MTczMjU4NzA4Mi4xNy4xLjE3MzI1ODcwODIuNjAuMC4w" 
                       target="_blank" 
                       rel="noopener noreferrer">
                        <button>
                            Acesse o Documento
                        </button>
                    </a>
                </div>
            </section>
            <section className='posts-section'>
                {posts.map((post, index) => (
                    <div key={index} className='post-card'>
                        <Card title={post.title} image={post.image} tag={post.tag} />
                    </div>
                ))}
            </section>
        </StyleMain>
    )
}; export default Main
