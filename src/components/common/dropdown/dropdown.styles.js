import styled from "styled-components";

export const StyledDropdown = styled.div`
  .dropdown-container {
    display: flex;
    align-items: center;
  }

  label {
    margin-right: 10px;
    font-weight: bold;
  }

  select {
    border: 1px solid grey;
    height: 2rem;
    width: 10rem;
    border-radius: 0.2rem;
    font-family: "Roboto", sans-serif;
    padding: 0 0.5rem;
    transition: 0.3s all ease;
  }
`;