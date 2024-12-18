import styled from "styled-components";

export const StyledUserCard = styled.div`
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #e0e0e0; 
    border-radius: 15px;
    padding: 15px;
    width: 400px;
    height: 250px; 
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
    overflow: hidden; 
  }

  .user-image {
    flex-shrink: 0;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-bottom: 15px; 
    overflow: hidden;
  }

  .user-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .user-details {
    flex-grow: 1;
    text-align: center; 
  }

  .user-name {
    margin: 0;
    font-size: 1.2em;
    color: #333;
  }

  .user-info {
    margin-top: 10px;
    border-top: 1px solid #555;
    padding-top: 10px;
  }

  .user-info p {
    margin: 5px 0;
    font-size: 0.9em;
    color: #555;
  }
`;