import styled from "styled-components";

export const StyledQuemSomosMain = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center; 
  padding: 2rem;
  max-width: 90%; 
  margin: 0 auto; 

  h1 {
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
  }

  .user-card {
    margin: 1rem;
    box-sizing: border-box;
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 1.5rem;
    }
    .user-card {
      width: 100%;
    }
  }
`;