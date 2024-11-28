import React from 'react';
import { StyledHome } from './home.styles';
import Header from '../../components/common/header/Header';
import MainHome from '../../components/view/home/main/Main';
import Footer from '../../components/common/footer/Footer';

const Home = () => {
    return (
        <StyledHome>
            <Header />
            <MainHome />
            <Footer />
        </StyledHome>
    )
} 

export default Home;