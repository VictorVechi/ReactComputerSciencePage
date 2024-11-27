import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const StyledInput = styled.input`
    width: 100%;
    border: 1px solid ${theme.darkpurpleP2};
    border-radius: 4px;
    padding: 1%;
    margin-bottom: 1%;
    font-size: 10pt;
    outline: none;
    transition: all 0.3s;
    font-family: 'Roboto', sans-serif;
    &::placeholder {
        color: ${theme.darkpurpleP2};
    }
`