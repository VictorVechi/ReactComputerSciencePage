import styled from "styled-components";
import { theme } from "../../../../styles/theme";

export const StyledSidebar = styled.aside`
  width: 20%;
  background-color: ${theme.lightGray};
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;

  h3 {
    margin-top: 0;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 0.5rem;

      a {
        text-decoration: none;
        color: ${theme.primaryColor};

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;