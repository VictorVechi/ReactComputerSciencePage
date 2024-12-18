import styled from "styled-components";

export const StyledQuemSomosMain = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center; 
  padding: 2rem;
  max-width: 1200px; 
  margin: 0 auto; 

  h1 {
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
  }

  .user-card {
    flex: 0 0 35%;
    margin: 1rem;
    box-sizing: border-box;
  }
`;