import React from "react";

const styles = {
  outside: {
    width: "100%",
    height: 50,
    borderStyle: "solid",
    borderWidth: "1%",
    borderRadius: 25,
  },
  inside: {
    height: "100%",
    borderRadius: 20,
  },
  text: {
    display: "flex",
    justifyContent: "center",
  },
};

const ProgressBar = (props) => {
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
