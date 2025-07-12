import styled from "styled-components";

export const StyledPostDeleteForm = styled.div`
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
    background: #f9f9f9;
    border-radius: 12px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.05);

    h1 {
      text-align: center;
      margin-bottom: 2rem;
      font-size: 1.8rem;
    }

    .post-card {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: white;
      padding: 1rem;
      border-radius: 8px;
      margin-bottom: 1rem;
      box-shadow: 0 1px 4px rgba(0,0,0,0.08);

      div {
        display: flex;
        flex-direction: column;

        strong {
          font-size: 1rem;
        }

        p {
          font-size: 0.9rem;
          color: #666;
          font-weight: 500;
        }

        .content-preview {
          font-style: italic;
        }
      }
    }

    .delete-button {
      background: transparent;
      border: none;
      padding: 6px;
      border-radius: 50%;
      color: #d11a2a;
      cursor: pointer;
      transition: background-color 0.2s, transform 0.1s ease;
    
      display: flex;
      align-items: center;
      justify-content: center;
    
      &:hover {
        background-color: #ffe5e5;
        transform: scale(1.1);
      }
    
      svg {
        width: 24px;
        height: 24px;
      }
    }
  
`;

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;

    .modal-content {
      background: white;
      padding: 2rem;
      border-radius: 12px;
      text-align: center;
      max-width: 400px;

      h2 {
        margin-bottom: 1rem;
      }

      p {
        margin-bottom: 2rem;
        color: #333;
      }

      code {
        font-family: "Courier New", Courier, monospace;
        background: #f1f1f1;
        padding: 2px 6px;
        border-radius: 4px;
        font-size: 0.95rem;
      }

      .modal-actions {
        display: flex;
        justify-content: space-between;
        gap: 1rem;

        .cancel {
          background: #ccc;
        }

        .confirm {
          background: #d11a2a;
          color: white;
        }

        button {
          padding: 0.5rem 1.5rem;
          border: none;
          border-radius: 8px;
          cursor: pointer;
        }
      }
    }
`;
