import styled from "styled-components";
import { theme } from "../../../../styles/theme";



export const StyleSearch = styled.section`
    height: 50vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 2%;

    h1 {
        margin-bottom: 0.5%;
    }

    h2 {
        margin-bottom: 0.5%;
        font-size: 1vw;
        color: ${theme.greyP3};
    }

    .search-container {
        display: flex;
        align-items: center;
        gap: 1%
    }


`