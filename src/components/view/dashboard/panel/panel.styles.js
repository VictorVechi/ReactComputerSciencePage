import styled from "styled-components";
import { theme } from "../../../../styles/theme";

export const StyledOptionsPanel = styled.div`
  background-color: ${theme.lightGray};
  padding: 10%;
  box-shadow: 1px 1px 2px 4px ${theme.orangeP3};
  border-radius: 8px;
  width: 40%;
  margin: 0 auto;
  margin-left: 10%;
  margin-top: 2%;
  text-align: center;

  h2 {
    margin-bottom: 1.5rem;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    text-decoration: none;
    color: ${theme.white};
    font-size: 18px;
    border-radius: 5px;
    width: 200px;
    height: 40px;
    font-weight: bold;
    border: 2px solid ${theme.orangeP3};
    color: ${theme.orangeP3};
    transition: 0.3s;
    box-shadow: 5px 5px 0px 0px ${theme.orangeP3};
    background-color: ${theme.white};
  }

  .button-container {
    display: flex;
    justify-content: center;
  }

  @media screen and (max-width: 768px) {
        width: 70%;
        padding: 15px;

        h2 {
            font-size: 1.5rem;
        }

        .button-container {
            flex-direction: column;
            align-items: center;
        }

        button {
            width: 100%;
            padding: 1.2rem;
            font-size: 1rem;
        }
    }
`;