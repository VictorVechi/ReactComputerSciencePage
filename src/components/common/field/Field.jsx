import React from "react";
import { StyledInput } from "./field.styles";

const Field = ({ type = "text", value, onChange, placeholder, className }) => {
  return (
    <StyledInput 
      type={type} 
      value={value} 
      onChange={onChange} 
      placeholder={placeholder}
      className={className}
    />
  );
};

export default Field;