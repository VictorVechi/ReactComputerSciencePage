import styled from 'styled-components';

export const StyledCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  margin: 1rem;
  padding: 1rem;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
// export const CardImage = styled.img`
//   width: 100%;
//   height: auto;
//   border-radius: 8px 8px 0 0;
// `;
export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 0.5rem;
`;
export const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin: 0.5rem 0 0 0;
`;
export const CardTag = styled.span`
  display: inline-block;
  background-color: #eee;
  color: #333;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
`;