import styled from 'styled-components';

export const StylePostSection = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    height: 100vh;
    width: 100%;
    align-items: center;

    .post-card {
        display: flex;
        flex: 0 0 30%;
        box-sizing: border-box;
        justify-content: center;
        align-items: center;
    }

    @media screen and (max-width: 768px) {
        .post-card:nth-child(n+4) {
            display: none;
        }

        .post-card {
            flex: 0 0 100%;
        }
    }
    
    @media screen and (min-width: 769px) and (max-width: 1400px) {
        .post-card:nth-child(n+5) {
            display: none;
        }

        .post-card {
            flex: 0 0 40%;
        }
    }
`