import styled from 'styled-components';
import { theme } from '../../../../styles/theme';

export const StyledPostDetails = styled.div`
  padding: 2rem;
  max-width: 55%;
  margin: 0 auto;
  flex: 1;

  .PostTag {
    display: inline-block;
    background-color: ${theme.orangeP3};
    color: ${theme.white};
    padding: 5px 20px;
    border-radius: 20px;
    font-size: 1.2rem;
    margin-bottom: 1%;
  }

  .PostTitle {
    font-size: 2.5rem;
    margin-bottom: 5%;
    font-weight: bold;
    text-align: left;
  }

  .PostDate {
    display: block;
    font-size: 1.2rem;
    color: ${theme.gray};
    margin-bottom: 5%;
    font-style: italic;
  }

  @media screen and (min-width: 769px) and (max-width: 1400px) {
    padding: 1.5rem;

    .PostTag {
      font-size: 1rem;
    }
    .PostDate {
      font-size: 1rem;
    }
    .PostTitle {
      font-size: 1.8rem;
    }
  }

  @media screen and (max-width: 768px) {
    max-width: 100%;
    padding: 1.5rem;

    .PostTag {
      font-size: 0.8rem;
    }
    .PostDate {
      font-size: 0.8rem;
    }
    .PostTitle {
      font-size: 1.5rem;
    }
  }
`;