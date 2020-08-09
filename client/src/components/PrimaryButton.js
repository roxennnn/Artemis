import React from "react";

import Colors from "../constants/Colors";

const PrimaryButton = (props) => {
  return (
    <div
      className={
        props.divClassName
          ? "center-col col " + props.divClassName
          : "center-col col"
      }
      style={props.style}
    >
      <a
        className={
          props.buttonClassName
            ? "btn-radius btn hover-opacity-button " + props.buttonClassName
            : "btn-radius btn hover-opacity-button"
        }
        style={{
          background: Colors.gradient,
          backgroundColor: Colors.primary,
          color: Colors.accent,
          ...props.buttonStyle,
        }}
        role="button"
        onClick={props.onClick}
      >
        {props.label}
      </a>
    </div>
  );
};

export default PrimaryButton;
