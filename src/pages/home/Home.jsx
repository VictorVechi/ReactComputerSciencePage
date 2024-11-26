import React from 'react';
import { StyledHome } from './home.styles';
import Header from '../../components/common/header/Header';
import Main from '../../components/view/home/main/Main';

const Home = () => {
    return (
        <StyledHome>
            <Header />
            <Main />
        </StyledHome>
    )
} 

export default Home;