import styled from "styled-components";
import { theme } from "../../../../styles/theme";

export const StyledSidebar = styled.aside`
  width: 20%;
  background-color: ${theme.lightGray};
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
  display: flex;
  flex-direction: column;

  h3 {
    margin-top: 10%;
    margin-bottom: 5%;
    font-size: x-large;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 5%;

      a {
        text-decoration: none;
        color: ${theme.mediumBlueP4};
        font-size: large;
        font-weight: bold;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`