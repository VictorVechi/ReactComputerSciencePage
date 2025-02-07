import styled from 'styled-components';

export const StyledMainPostView = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: stretch;
  width: 100%;
  min-height: 80vh; 

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;