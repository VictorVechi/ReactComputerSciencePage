import styled from "styled-components";

export const StyledDashboard = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    
    h1 {
        margin-top: 1%;
        margin-left: 2%;
    }

    > main {
        flex: 1;
    }

     @media screen and (max-width: 768px) {
        
        > main {
            padding: 10px;
            flex-direction: column;
        }

        > main > div {
            width: 100%;
        }

        h1 {
            text-align: center;
            margin-left: 0;
            font-size: 1.3rem;
        }
    }

`