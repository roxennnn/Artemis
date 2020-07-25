import React from "react";
import { Checkbox } from "@material-ui/core";

import "../../css/surveyComponents/Checkboxes.css";

/***************************************************************************
 * PROPS:
 * - title: text displayed for the question
 * - optionList: list of values to use to make the checkboxes list (made of 2 properties: { value | label })
 * - onChange: onChange handler to be used when a checkbox is checked (or unchecked)
 * - style: to add some custom style { container }
 ***************************************************************************/


const Checkboxes = (props) => {
  return (
    <div
      id="container"
      style={{
        ...props.style.container
      }}
    >
      <div id="title">{props.title}</div>
      {props.optionList.map((option) => (
        <div>
          <Checkbox value={option.value} onChange={props.onChange} color="primary" />
          <span>{option.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Checkboxes;
