import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './button.styles';

const Button = ({ className, texto, onClick, type = 'button', disabled = false }) => {
  return (
    <StyledButton className = {className} type={type} onClick={onClick} disabled={disabled}>
      {texto}
    </StyledButton>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  texto: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;