import styled from "styled-components";

export const StyledUpdatePostForm = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  h1 {
    margin-bottom: 1.5rem;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;

    label {
      margin-bottom: 0.5rem;
      font-weight: bold;
    }

    input,
    select {
      margin-bottom: 1rem;
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 1rem;
    }

    /* Espaçamento para o editor de rich text */
    label + div {
      margin-bottom: 1rem;
    }

    button {
      padding: 0.75rem;
      border: none;
      border-radius: 4px;
      background-color: #007bff;
      color: #fff;
      font-size: 1rem;
      cursor: pointer;

      &:hover {
        background-color: #0056b3;
      }
    }
  }

  .tag-selector {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  .tag-button {
    padding: 0.5rem 1rem;
    border: 1px solid #007bff;
    border-radius: 20px;
    background-color: #fff;
    color: #007bff;
    font-size: 0.9rem;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: #007bff;
      color: #fff;
    }

    &.selected {
      background-color: #007bff;
      color: #fff;
    }
  }
`;
