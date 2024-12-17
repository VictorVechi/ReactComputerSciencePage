import styled from 'styled-components';
import { theme } from '../../../../styles/theme';

export const StyledPostDetails = styled.div`
  padding: 2rem;
  max-width: 40%;
  margin: 0 auto;
`;

export const PostTag = styled.span`
  display: inline-block;
  background-color: ${theme.orangeP3};
  color: ${theme.white};
  padding: 5px 20px;
  border-radius: 20px;
  font-size: 1.2rem;
  margin-bottom: 1%;
`;

export const PostTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 5%;
  font-weight: bold;
  text-align: left;
`;

export const PostContent = styled.div`
  font-size: 1.5rem;
  line-height: 1.5;
  text-align: justify;
`;