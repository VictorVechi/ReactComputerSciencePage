import styled from "styled-components";
import { theme } from "../../../../styles/theme";

export const StyledSidebar = styled.aside`
  width: 20%;
  background-color: ${theme.lightGray};
  padding: 5%;
  box-shadow: 1px 1px 2px 4px ${theme.orangeP3};
  margin-top: 2%;
  display: flex;
  flex-direction: column;
  align-items: center; 
  border-radius: 8px;

  .menu {
    width: 100%; 
    margin-bottom: 1rem;
    display: flex;
    justify-content: center; 
  }

  .menu button {
    color: black;
    font-size: large;
    border: 2px solid black;
    box-shadow: 5px 5px 0px 0px black;
    cursor: pointer;
    text-decoration: none;
    padding: 1rem;
    text-align: center;

    &:hover {
        border-color: ${theme.orangeP3};
        box-shadow: 0 0 ${theme.orangeP3};
        color: ${theme.orangeP3};
        background-color: ${theme.white};
    }

  }

  @media screen and (max-width: 768px) {
    width: 35%;
    padding: 10px;

    .menu {
      justify-content: flex-start;
      margin-bottom: 1.2rem;
    }

    .menu button {
      font-size: 1.1rem;
      padding: 0.8rem; 
    }
  }
`;