import styled from "styled-components";
import { theme } from "../../../../styles/theme";

export const StyledOptionsPanel = styled.div`
  background-color: ${theme.lightGray};
  padding: 10%;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 40%;
  margin: 0 auto;
  margin-left: 10%;
  text-align: center;

  h2 {
    margin-bottom: 1.5rem;
  }

  button {
    width: auto;
  }

  .button-container {
    display: flex;
    justify-content: center;
  }
`;