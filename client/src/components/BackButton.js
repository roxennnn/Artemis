import React from "react";

import Colors from "../constants/Colors";

const BackButton = (props) => {
  return (
    <div className="hover-underline" style={{ color: Colors.primary }}>
      <a
        role="button"
        onClick={props.onClick}
        style={{ color: Colors.primary }}
      >
        {"<"}{props.label}
      </a>
    </div>
  );
};
export default BackButton;
