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
      <div
        className={
          props.disabled
            ? props.buttonClassName
              ? "btn-radius btn btn-radius-disabled " +
                props.buttonClassName
              : "btn-radius btn btn-radius-disabled"
            : props.buttonClassName
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
        onClick={props.disabled ? "" : props.onClick}
      >
        {props.label}
      </div>
    </div>
  );
};

export default PrimaryButton;
