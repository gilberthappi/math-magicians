import React from 'react';
import PropTypes from 'prop-types';

function Button({ label, onClick, className }) {
  return (
    <button className={className} type="button" onClick={onClick}>
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

export default Button;
