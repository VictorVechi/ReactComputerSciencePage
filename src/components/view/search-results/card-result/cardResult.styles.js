import styled from 'styled-components';
import { theme } from '../../../../styles/theme';

export const StyledCardResult = styled.div`
  width: 800px;
  border: 1px solid ${theme.orangeP3};
  border-radius: 8px;
  box-shadow: 0 2px 4px ${theme.orangeP3};
  margin: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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
`;