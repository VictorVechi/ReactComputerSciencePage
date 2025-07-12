import styled from "styled-components";

export const StyledCreatePostForm = styled.div`
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
    textarea,
    select {
      margin-bottom: 1rem;
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 1rem;
    }

    select[multiple] {
      min-height: 120px;
      background-color: #f9f9f9;
      cursor: pointer;
    }

    textarea {
      resize: vertical;
      min-height: 100px;
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

  .feedback-message {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    padding: 1rem 1.5rem;
    border-radius: 8px;
    color: #fff;
    font-weight: bold;
    z-index: 9999;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    animation: fadeInOut 4s ease forwards;
    max-width: 90%;
    text-align: center;
  }
  
  .feedback-message.success {
    background-color: #28a745; /* verde */
  }
  
  .feedback-message.error {
    background-color: #dc3545; /* vermelho */
  }
  
  @keyframes fadeInOut {
    0% {
      opacity: 0;
      transform: translate(-50%, -10px);
    }
    10% {
      opacity: 1;
      transform: translate(-50%, 0);
    }
    90% {
      opacity: 1;
      transform: translate(-50%, 0);
    }
    100% {
      opacity: 0;
      transform: translate(-50%, -10px);
    }
  }


`;
