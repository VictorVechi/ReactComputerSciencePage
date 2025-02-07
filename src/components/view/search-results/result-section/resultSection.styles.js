import styled from "styled-components";

export const StyleResultSection = styled.main`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    align-items: center;
    flex-direction: column;

    .order-container {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1%;
        margin-top: 3%;

        p {
            margin-right: 15%;
            font-weight: bold;
            font-size: larger;
        }
    }

    .post-card {
        display: flex;
        flex: 0 0 100%;
        box-sizing: border-box;
        justify-content: center;
        align-items: center;
    }

    .posts-container {
        margin-top: 1%;
        margin-bottom: 1%;
    }

    h1{
        margin-top: 1%;
    }

    @media screen and (max-width: 768px){
        .order-container {
            flex-direction: column;
            p {
                margin-right: 0;
                margin-bottom: 3%;
                font-size: larger;
            }
        }

        .posts-container {
            .no-results {
                margin-top: 10%;
                text-align: center;
            }
        }

        .post-card {
            flex: 0 0 100%;
        }

        h1 {
            text-align: center;
            font-size: 1.8em;
        }
    }
`
