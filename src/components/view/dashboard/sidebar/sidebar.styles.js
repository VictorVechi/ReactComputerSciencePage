import styled from "styled-components";
import { theme } from "../../../../styles/theme";

export const StyledSidebar = styled.aside`
  margin-top: 2%;
  width: 25%;
  background-color: ${theme.lightGray};
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
  display: flex;
  flex-direction: column;

  .menu {
    margin-bottom: 2%;
    margin-top: 2%;
    padding: 1rem;
    background-color: ${theme.white};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }

  .menu-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    font-size: x-large;
    margin-bottom: 10%;
  }

  .arrow {
    transition: transform 0.3s ease;
  }

  .arrow.open {
    transform: rotate(180deg);
  }

  .menu-item {
    margin-bottom: 5%;

    button {
      background: none;
      border: none;
      color: ${theme.primaryColor};
      font-size: large;
      cursor: pointer;
      text-decoration: none;
      padding-left: 1rem; 
      text-align: left;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;