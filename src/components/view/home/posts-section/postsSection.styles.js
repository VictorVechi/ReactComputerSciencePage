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
`