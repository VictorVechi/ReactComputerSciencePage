import styled from 'styled-components';
import { theme } from '../../../styles/theme';

export const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    text-decoration: none;
    color: ${theme.darkpurpleP2};
    font-size: 18px;
    border-radius: 5px;
    width: 200px;
    height: 30px;
    font-weight: bold;
    border: 2px solid ${theme.darkpurpleP2};
    transition: 0.3s;
    box-shadow: 5px 5px 0px 0px ${theme.darkpurpleP2};
    background-color: ${theme.white};

    &:hover {
        border-color: ${theme.orangeP3};
        box-shadow: 0 0 ${theme.orangeP3};
        color: ${theme.orangeP3};
        background-color: ${theme.white};
    }

`;