import React from "react";

const styles = {
  // inside: {
  //   display: "flex",
  //   height: "100%",
  //   alignItems: "center",
  //   borderRadius: 10,
  // },
  // outside: {
  //   display: "flex",
  //   width: "100%",
  //   height: 25,
  //   borderWidth: 1,
  //   justifyContent: "flex-start",
  //   marginVertical: 2,
  //   borderRadius: 10,
  // },
  outside: {
    width: "100%",
    height: 50,
    borderStyle: "solid",
    borderWidth: "1%",
    borderRadius: 25,
    // borderColor: "linear-gradient(#000000, #ffffff);"
  },
  inside: {
    height: "100%",
    borderRadius: 20,
  },
  text: {
    // position: "absolute",
    // marginLeft: "48%",
    display: "flex",
    justifyContent: "center",
  }
};

const ProgressBar = (props) => {
  return (
    <div id="outside" style={{ ...styles.outside, ...props.outsideStyle, borderColor: props.color }}>
      <div id="inside" style={{ ...styles.inside, ...props.insideStyle, width: props.percentage, background: props.gradient, backgroundColor: props.color  }}>
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
