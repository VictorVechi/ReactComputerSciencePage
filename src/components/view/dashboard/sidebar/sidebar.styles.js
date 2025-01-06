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
`;