import React from "react";
import PropTypes from "prop-types";
import "./Btn.scss";

const Button = props => {
  return (
    <button
      className={`btn ${props.className}`}
      onClick={props.onClick ? () => props.onCLick() : null}
    >
      {props.children}
    </button>
  );
};

export const OutlineButton = props => {
    return (
        <Button
        className={`btn-outline ${props.className}`}
        onClick={props.onClick ? () => props.onClick() : null}>
            {props.children}
        </Button>
    );
};

Button.protoTypes = {
  onClick: PropTypes.func,
};

export default Button;
