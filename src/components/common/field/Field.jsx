import React from "react";
import { StyledInput } from "./field.styles";

const Field = ({ type = "text", value, onChange, placeholder, className, onKeyDown }) => {
  return (
    <StyledInput 
      type={type} 
      value={value} 
      onChange={onChange} 
      placeholder={placeholder}
      className={className}
      onKeyDown={onKeyDown}
    />
  );
};

export default Field;