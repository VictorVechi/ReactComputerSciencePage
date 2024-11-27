import styled from 'styled-components';

export const StyledCard = styled.div`
  width: 500px;
  height: 400px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  margin: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .card-header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 0.5rem;
  }

  .card-title {
    font-size: 1.5rem;
    margin: 0.5rem 0 0 0;
  }

  .card-tag {
    display: inline-block;
    background-color: #eee;
    color: #333;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
  }

  .card-content {
    font-size: 1rem;
    margin-top: 0.5rem;
    color: #666;
  }
`;