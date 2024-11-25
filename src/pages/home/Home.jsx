import React from 'react';
import { StyledHome } from './home.styles';
import Header from '../../components/common/header/Header';

const Home = () => {
    return (
        <StyledHome>
            <Header/>
            {/* Colocar os outros conteúdos aqui */}
        </StyledHome>
    )
} 

export default Home;