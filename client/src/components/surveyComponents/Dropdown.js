import React, { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";

import Colors from "../../constants/Colors";

import "../../css/surveyComponents/Dropdown.css";

/***************************************************************************
 * PROPS:
 * - title: text displayed for the question
 * - value: state value used to keep track of the answer of the question (MAYBE NOT NEEDED)
 * - onSelect: handler function to react to the value change
 * - valueList: list of values from which the user has to choose
 * - defaultMessage: default message to show before any value is chosen
 * - style: to add some custom style { container | button }
 ***************************************************************************/

const CustomDropdown = (props) => {
  const [current, setCurrent] = useState(
    props.defaultMessage ? props.defaultMessage : "Select an option"
  );

  const { defaultMessage } = props;

  useEffect(() => {
    if (
      current === "" ||
      current === undefined ||
      current === "Select an option"
    ) {
      setCurrent(props.defaultMessage && defaultMessage);
    }
  }, [defaultMessage]);

  return (
    <div
      id="container"
      style={{
        ...props.style.container,
      }}
      // class="select-dropdown to-hover"
      class={
        props.error ? "select-dropdown error-box" : "select-dropdown to-hover"
      }
    >
      <div>{props.title}</div>
      <Dropdown onSelect={props.onSelect}>
        <Dropdown.Toggle
          variant="success"
          // id="dropdown-basic"
          style={{
            background: Colors.gradient,
            backgroundColor: Colors.primary,
            color: Colors.accent,
            minWidth: 150,
            margin: 10,
            ...props.style.button,
          }}
        >
          {current}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {props.valueList.map((value) => (
            <Dropdown.Item
              eventKey={value.value}
              href=""
              onClick={() => {
                setCurrent(value.name);
              }}
            >
              {value.name}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      {props.error && (
        <div
          style={{
            color: "red",
            fontSize: 16,
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          {props.errorMessage}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
