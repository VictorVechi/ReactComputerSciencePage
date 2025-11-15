import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const StyledRichTextDisplay = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  line-height: 1.8;
  color: ${theme.black};
  word-wrap: break-word;

  p {
    margin-bottom: 1em;
  }

  strong {
    font-weight: bold;
  }

  em {
    font-style: italic;
  }

  u {
    text-decoration: underline;
  }

  s {
    text-decoration: line-through;
  }

  h1 {
    font-size: 2em;
    font-weight: bold;
    margin: 0.67em 0;
  }

  h2 {
    font-size: 1.5em;
    font-weight: bold;
    margin: 0.75em 0;
  }

  h3 {
    font-size: 1.17em;
    font-weight: bold;
    margin: 0.83em 0;
  }

  ol, ul {
    margin: 1em 0;
    padding-left: 2em;
  }

  ol {
    list-style-type: decimal;
  }

  ul {
    list-style-type: disc;
  }

  li {
    margin-bottom: 0.5em;
  }

  blockquote {
    border-left: 4px solid ${theme.lightGray};
    padding-left: 1em;
    margin: 1em 0;
    color: #666;
    font-style: italic;
  }

  code {
    background-color: #f4f4f4;
    padding: 2px 6px;
    border-radius: 3px;
    font-family: 'Courier New', monospace;
    font-size: 0.9em;
  }

  pre {
    background-color: #f4f4f4;
    padding: 1em;
    border-radius: 4px;
    overflow-x: auto;
    margin: 1em 0;

    code {
      background: none;
      padding: 0;
    }
  }

  a {
    color: ${theme.blue};
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: ${theme.darkBlue};
      text-decoration: underline;
    }

    &:visited {
      color: #551a8b;
    }
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 1.6;

    h1 {
      font-size: 1.75em;
    }

    h2 {
      font-size: 1.4em;
    }

    h3 {
      font-size: 1.1em;
    }

    ol, ul {
      padding-left: 1.5em;
    }
  }
`;
