import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const StyledInput = styled.input`
    width: 100%;
    border: 2px solid ${theme.darkpurpleP2};
    border-radius: 4px;
    padding: 1%;
    margin-bottom: 1%;
    font-size: 10pt;
    outline: none;
    transition: all 0.3s;
    font-family: 'Roboto', sans-serif;
    caret-color: ${theme.darkpurpleP2};
    &::placeholder {
        color: ${theme.darkpurpleP2};
    }
`