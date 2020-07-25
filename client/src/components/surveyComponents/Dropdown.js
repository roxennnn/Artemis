import React, {useState} from "react";
import { Dropdown } from "react-bootstrap";

import Colors from "../../constants/Colors";

import "../../css/surveyComponents/Dropdown.css";

/***************************************************************************
 * PROPS:
 * - title: text displayed for the question
 * - value: state value used to keep track of the answer of the question (MAYBE NOT NEEDED)
 * - onSelect: handler function to react to the value change
 * - valueList: list of values from which the user has to choose
 * - defaultMessage: default message to show before any value is choosen
 * - style: to add some custom style { container | button }
 ***************************************************************************/

const CustomDropdown = (props) => {
  const [current, setCurrent] = useState(
    props.defaultMessage ? props.defaultMessage : "select an option"
  );

  return (
    <div
      id="container"
      style={{
        ...props.style.container
      }}
      class="select-dropdown to-hover"
    >
      <div>{props.title}</div>
      <Dropdown onSelect={props.onSelect}>
        <Dropdown.Toggle
          variant="success"
          // id="dropdown-basic"
          style={{
            backgroundColor: Colors.primary,
            minWidth: 150,
            ...props.style.button
          }}
        >
          {current}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {props.valueList.map((value) => (
            <Dropdown.Item eventKey={value.value} href="" onClick={() => {setCurrent(value.name)}}>
              {value.name}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default CustomDropdown;
