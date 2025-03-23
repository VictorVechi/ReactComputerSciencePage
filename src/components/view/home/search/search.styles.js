import styled from "styled-components";
import { theme } from "../../../../styles/theme";



export const StyleSearch = styled.section`
    height: 45vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 2%;

    h1 {
        margin-bottom: 2%;
    }

    h2 {
        margin-bottom: 0.5%;
        font-size: 16pt;
        color: ${theme.blueP3};
    }

    .search-container {
        display: flex;
        align-items: center;
        justify-content: baseline;
        gap: 1%;
        width: 22%;
        height: auto;
    }

    @media screen and (max-width: 768px) {
        .search-container {
            font-size: 12pt;
            width: 100%;
            display: flex;
            flex-direction: column;
        }
        h1 {
            font-size: 18pt;
        }
        .input {
            width: 60%;
        }
    }

`