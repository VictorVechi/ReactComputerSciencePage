import styled from "styled-components";
import { theme } from "../../../../styles/theme";


export const StyleStudentSection = styled.section`

    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 65vh;
    background-image: url('/backgroundLibrary.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    padding: 0 20px;
    color: white;
    width: 100%;

    .content {
        width: 80%;
        max-width: 1200px;
        display: flex;
        justify-content: space-between;
    }

    .text-second-section {
        flex: 1;
        font-size: 16pt;
        line-height: 1.5;
        max-width: 600px;
        padding: 15px;
        background: rgba(255, 255, 255, 0.18);
        border-radius: 16px;
        box-shadow: 0 4px 30px ${theme.orangeP3};
        backdrop-filter: blur(13px);
        -webkit-backdrop-filter: blur(13px);
        border: 1px solid ${theme.orangeP3};

    } 

    .right-button button {
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 1;
        text-decoration: none;
        color: ${theme.white};
        font-size: 18px;
        border-radius: 0px;
        width: 200px;
        height: 40px;
        font-weight: bold;
        border: 2px solid ${theme.white};
        transition: 0.3s;
        box-shadow: 5px 5px 0px 0px ${theme.white};
        background-color: ${theme.orangeP3};
    }

    .right-button button:hover {
        border-color: ${theme.orangeP3};

        box-shadow: 0 0 ${theme.orangeP3};
        color: ${theme.orangeP3};
        background-color: ${theme.white};
    }


    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        background-attachment: local;
        
        .text-second-section {
            backdrop-filter: blur(40px);
            -webkit-backdrop-filter: blur(40px);
            font-size: 0.8rem;
        }
    }
`