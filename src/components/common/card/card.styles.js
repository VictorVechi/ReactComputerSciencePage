import styled from 'styled-components';
import { theme } from '../../../styles/theme';

export const StyledCard = styled.div`
  width: 500px;
  height: 400px;
  border: 1px solid ${theme.orangeP3};
  border-radius: 8px;
  box-shadow: 0 2px 4px ${theme.orangeP3};
  margin: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px ${theme.orangeP3};
  }

  .card-header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 10px;
  }

  .card-title {
    font-size: 20pt;
    margin: 10px 0 0 0;
  }

  .card-tag {
    display: inline-block;
    background-color: ${theme.orangeP3};
    color: ${theme.white};
    padding: 5px 10px;
    border-radius: 20px;
    font-size: 11pt;
    margin-bottom: 10px;
  }

  .card-content {
    font-size: 13pt;
    margin-top: 10px;
    color: #666;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
    height: 60%;
    justify-content: space-around;
    flex-direction: column;
    
    .card-header {
      margin: 0;
    }

    .card-tag {
      font-size: 0.7rem;
      margin-top: 0;
    }
    .card-title {
      font-size: 1.1rem;
    }

  }

  @media screen and (min-width: 769px) and (max-width: 1400px) {
    width: 100%;
    height: 285px;
    justify-content: space-around;
    
    .card-header {
      margin: 0;
    }

    .card-tag {
      font-size: 1.5rem;
      margin-top: 0;
    }
    .card-title {
      font-size: 1.6rem;
    }
  }
`;