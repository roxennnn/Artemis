import React from 'react';
import { FixMeLater } from '../constants/Utilities';

/***************************************************************************
 * PROPS:
 * - color: the color of the bar
 * - gradient: gradient color
 * - percentage: percentage used by the bar
 * - text: text to show in the colored part of the bar
 * - outsideStyle: style of the outside div
 * - insideStyle: style of the inside div
 * - textStyle: style of the text
 ***************************************************************************/

const styles = {
  outside: {
    width: '100%',
    height: 50,
    borderStyle: 'solid',
    borderWidth: '1%',
    borderRadius: 25,
  },
  inside: {
    height: '100%',
    borderRadius: 20,
  },
  text: {
    display: 'flex',
    justifyContent: 'center',
  },
};

const ProgressBar = (props: FixMeLater) => {
  return (
    <div
      id="outside"
      style={{
        ...styles.outside,
        borderColor: props.color,
        ...props.outsideStyle,
      }}
    >
      <div
        id="inside"
        style={{
          ...styles.inside,
          width: props.percentage,
          background: props.gradient,
          backgroundColor: props.color,
          ...props.insideStyle,
        }}
      >
        <div id="text" style={{ ...styles.text, ...props.textStyle }}>
          {props.text}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;

// <div style={styles.outside}>
//   <div
//     style={{
//       ...styles.inside,
//       width: props.percentage,
//       backgroundColor: props.color ? props.color : "red",
//     }}
//   ></div>
//   <div
//     style={{
//       position: "absolute",
//       marginLeft: "48%",
//       justifyContent: "center",
//     }}
//   >
//     <div>{props.text}</div>
//   </div>
// </div>
