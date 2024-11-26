import React from 'react';
import { StyledHome } from './home.styles';
import Header from '../../components/common/header/Header';
import Button from '../../components/common/button/Button';

const Home = () => {
    return (
        <StyledHome>
            <Header/>
            {/* Colocar os outros conteúdos aqui */}
            <section className='second-section'>
                <div className='content'>
                    <div className='text-second-section'>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur fugiat placeat id ut, omnis explicabo harum nihil assumenda eveniet consectetur asperiores iusto quasi. Quaerat iusto non voluptatibus, illum adipisci earum!
                        </p>
                    </div>
                </div>
                <div className='right-button'>
                    <Button texto="Leva pra outro site" href="https://ifpr.edu.br/pinhais/ifpr-pinhais/quem-somos/" />
                </div>
            </section>
            
        </StyledHome>
    )
} 

export default Home;