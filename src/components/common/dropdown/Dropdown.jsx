import React from "react";
import { StyledDropdown } from "./dropdown.styles";

const DropdownBtn = ({ label, options, value, onChange }) => {
    return (
        <StyledDropdown>
            <div className="dropdown-container">
                <label htmlFor="dropdown">{label}</label>
                <select id="dropdown" value={value} onChange={onChange}>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        </StyledDropdown>
    );
};

export default DropdownBtn;