import React from 'react';

import Colors from '../constants/Colors';
import { emptyFunction, FixMeLater } from '../constants/Utilities';

const PrimaryButton = (props: FixMeLater) => {
  return (
    <div
      className={
        props.divClassName
          ? 'center-col col ' + props.divClassName
          : 'center-col col'
      }
      title={props.title}
      style={props.style}
    >
      <div
        className={
          props.disabled
            ? props.buttonClassName
              ? 'btn-radius btn btn-radius-disabled ' + props.buttonClassName
              : 'btn-radius btn btn-radius-disabled'
            : props.buttonClassName
            ? 'btn-radius btn hover-opacity-button ' + props.buttonClassName
            : 'btn-radius btn hover-opacity-button'
        }
        style={{
          background: Colors.gradient,
          backgroundColor: Colors.primary,
          color: Colors.accent,
          ...props.buttonStyle,
        }}
        role="button"
        onClick={props.disabled ? emptyFunction : props.onClick}
      >
        {props.label}
      </div>
    </div>
  );
};

export default PrimaryButton;
