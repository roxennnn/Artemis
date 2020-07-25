import React from "react";
import {
  Radio,
  FormControl,
  RadioGroup,
  FormLabel,
  FormControlLabel,
} from "@material-ui/core";

import "../../css/surveyComponents/Radiobuttons.css";

/***************************************************************************
 * PROPS:
 * - title: text displayed for the question
 * - optionList: list of values to use to make the checkboxes list (made of 2 properties: { value | label })
 * - onChange: onChange handler to be used when a checkbox is checked (or unchecked)
 * - value: corresponds to the answer
 * - style: to add some custom style { container }
 ***************************************************************************/


const Radiobuttons = (props) => {
  return (
    <div
      id="container"
      style={{
        ...props.style.container,
      }}
    >
      <div>{props.title}</div>
      <FormControl component="fieldset">
        {/* <FormLabel component="legend">{props.title}</FormLabel> */}
        <RadioGroup
          name="gender1"
          value={props.value}
          onChange={props.onChange}
        >
          {props.optionList.map((option) => (
            <FormControlLabel
              value={option.value}
              control={<Radio color="primary"/>}
              label={option.label}
              color="primary"
            />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default Radiobuttons;
