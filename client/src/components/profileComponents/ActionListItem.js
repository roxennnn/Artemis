import React from "react";
import Colors from "../../constants/Colors";

import "../../css/ProfilePage.css";

const styles = {
  actionListItem: {
    borderColor: Colors.primary,
    borderBottomoWidth: 1,
    borderBottomStyle: "solid",
    paddingTop: "1.5%",
    paddingBottom: "1.5%",
  },
  actionListText: {
    marginLeft: "3%",
  },
};

const ActionListItem = (props) => {
  
  return (
    <div
      className={
        props.current ? "current-action-list-item" : "action-list-item"
      }
      style={{ ...styles.actionListItem, ...props.style }}
      onClick={() => {
        props.onClick(props.value);
      }}
    >
      <span style={styles.actionListText}>{props.title}</span>
    </div>
  );
};

export default ActionListItem;
