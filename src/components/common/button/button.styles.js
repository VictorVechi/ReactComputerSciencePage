import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 10%;
  height: 25px;
  border: 2px solid ${(props) => props.theme.orangeP1};
  border-radius: 5px;
  background-color: ${(props) => props.theme.orangeP1};
  color: ${(props) => props.theme.whiteP1};
  font-size: 16px;
  font-weight: 800;
  outline: none;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.whiteP1};
    color: ${(props) => props.theme.orangeP1};
  }

  &:disabled {
    background-color: ${(props) => props.theme.whiteP1};
    color: ${(props) => props.theme.orangeP1};
    border-color: ${(props) => props.theme.orangeP1};
    cursor: not-allowed;
    opacity: 0.6;
  }

  &.primary {
    background-color: ${(props) => props.theme.blueP1};
    border-color: ${(props) => props.theme.blueP1};
  }

  &.secondary {
    background-color: ${(props) => props.theme.purpleP1};
    border-color: ${(props) => props.theme.purpleP1};
  }
`;