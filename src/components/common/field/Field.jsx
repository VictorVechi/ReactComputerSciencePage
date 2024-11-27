import React from "react";
import { StyledInput } from "./field.styles";

const Field = ({ type = "text", value, onChange, placeholder }) => {
  return (
    <StyledInput 
      type={type} 
      value={value} 
      onChange={onChange} 
      placeholder={placeholder} 
    />
  );
};

export default Field;