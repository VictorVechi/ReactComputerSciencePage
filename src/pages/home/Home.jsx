import React from 'react';
import { StyledHome } from './home.styles';
import Header from '../../components/common/header/Header';
import Main from '../../components/view/home/main/Main';
import Button from '../../components/common/button/Button';

const Home = () => {
    return (
        <StyledHome>
            <Header />
            <Main />
        </StyledHome>
    )
} 

export default Home;