import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const StyledRichTextEditor = styled.div`
  .ql-editor {
    min-height: 200px;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    line-height: 1.6;
  }

  .ql-toolbar {
    border-top: 1px solid #ccc;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
    border-bottom: none;
    border-radius: 8px 8px 0 0;
    background: #f8f9fa;
  }

  .ql-container {
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    border-top: none;
    border-radius: 0 0 8px 8px;
    font-family: 'Montserrat', sans-serif;
  }

  .ql-editor.ql-blank::before {
    color: #999;
    font-style: normal;
  }

  .ql-snow .ql-tooltip {
    background: white;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }

  .ql-snow .ql-tooltip input[type=text] {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 8px;
    font-family: 'Montserrat', sans-serif;
  }

  .ql-snow .ql-picker-options {
    background: white;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }

  .ql-snow .ql-picker-item:hover {
    background: ${theme.lightGray};
  }

  @media screen and (max-width: 768px) {
    .ql-toolbar {
      padding: 8px;
    }
    
    .ql-toolbar .ql-formats {
      margin-right: 8px;
    }
  }
`;
