import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const StyledRichTextDisplay = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  line-height: 1.8;
  color: ${theme.black};
  word-wrap: break-word;
  hyphens: auto;

  * {
    margin: 0;
    padding: 0;
  }

  p {
    margin-bottom: 1em;
    text-align: justify;
  }

  strong, b {
    font-weight: bold;
  }

  em, i {
    font-style: italic;
  }

  u {
    text-decoration: underline;
  }

  s {
    text-decoration: line-through;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 1.5em 0 0.5em 0;
    font-weight: bold;
    color: ${theme.blueP3};
    text-align: left;
  }

  h1 { font-size: 2em; }
  h2 { font-size: 1.75em; }
  h3 { font-size: 1.5em; }

  ol {
    list-style-type: decimal !important;
    list-style-position: outside !important;
    margin: 1em 0 !important;
    padding-left: 2.5em !important;
    text-align: left !important;
  }

  ul {
    list-style-type: disc !important;
    list-style-position: outside !important;
    margin: 1em 0 !important;
    padding-left: 2.5em !important;
    text-align: left !important;
  }

  li {
    display: list-item !important;
    margin-bottom: 0.5em !important;
    margin-left: 0 !important;
    padding-left: 0.5em !important;
    text-align: justify !important;
  }

  ol ol,
  ul ul,
  ol ul,
  ul ol {
    margin-top: 0.5em !important;
    margin-bottom: 0.5em !important;
  }

  blockquote {
    margin: 1em 0;
    padding: 1em 2em;
    border-left: 4px solid ${theme.orangeP3};
    background: ${theme.lightGray};
    font-style: italic;
    border-radius: 4px;
  }

  code {
    background: #f4f4f4;
    padding: 2px 6px;
    border-radius: 4px;
    font-family: 'Courier New', Courier, monospace;
    font-size: 0.9em;
  }

  pre {
    background: #f4f4f4;
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
    color: ${theme.mediumBlueP4};
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1400px) {
    font-size: 1.2rem;

    h1 { font-size: 1.75em; }
    h2 { font-size: 1.5em; }
    h3 { font-size: 1.25em; }

    ol, ul {
      padding-left: 2em !important;
    }
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem;

    h1 { font-size: 1.5em; }
    h2 { font-size: 1.3em; }
    h3 { font-size: 1.1em; }

    ol, ul {
      padding-left: 1.5em !important;
    }

    blockquote {
      padding: 0.75em 1em;
    }
  }
`;
