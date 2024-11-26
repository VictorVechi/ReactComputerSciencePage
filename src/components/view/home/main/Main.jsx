import React from 'react'
import { StyleMain } from './main.styles'
import PostsSection from '../posts-section/PostsSection';

const Main = () => {
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
            <PostsSection />
        </StyleMain>
    )
}; export default Main
