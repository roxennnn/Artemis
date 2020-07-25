import React, { useState } from "react";

import Dropdrown from "../components/surveyComponents/Dropdown";
import Checkboxes from "../components/surveyComponents/Checkboxes";
import Radiobuttons from "../components/surveyComponents/Radiobuttons";
import RowRadios from "../components/surveyComponents/RowRadios";

const VALUES = [
  { name: "Volvo", value: "volvo" },
  { name: "Saab", value: "saab" },
  { name: "Mercedes", value: "mercedes" },
  { name: "Audi", value: "audi" },
];
const ages = [...Array(100).keys()].map((i) => {
  return { name: i, value: i };
});

const optionList = [
  { label: "ciao", value: 0 },
  { label: "test", value: 1 },
  { label: "bella", value: 2 },
  { label: "wow", value: 3 },
];

const rowOptions = [1, 2, 3, 4];

const borderStyle = {
  container: {
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "black",
  },
};

const TEMPSurvey = (props) => {
  const [dropDownValue, setDropDownValue] = useState();
  const [checkboxesValues, setCheckboxesValues] = useState(
    new Array(optionList.length).fill(0)
  );
  const [radioValue, setRadioValue] = useState(-1);
  const [rowRadioValue, setRowRadioValue] = useState(-1);

  const dropDownOnChangeHandler = (key, obj) => {
    console.log(key);
    // console.log(obj);
    setDropDownValue(key);
  };

  const checkboxesOnChangeHandler = (e) => {
    // of interest: e.target.value --> needed to be made integer (to be considered as index)
    let tmp_values = checkboxesValues;
    const index = parseInt(e.target.value);
    let tmp = tmp_values[index];
    tmp = (tmp + 1) % 2; // update the value: if 0 -> 1, if 1 -> 0
    tmp_values[index] = tmp;
    setCheckboxesValues(tmp_values);
    //console.log(checkboxesValues);
  };

  const radioOnChangeHandler = (e) => {
    setRadioValue(parseInt(e.target.value));
    // console.log(radioValue);
  };

  const rowRadioOnChangeHandler = (e) => {
    setRowRadioValue(parseInt(e.target.value));
  };

  return (
    <div>
      <div>
        <h1>This page is used to study the Survey components</h1>
        <Dropdrown
          valueList={ages}
          value={dropDownValue}
          onSelect={dropDownOnChangeHandler}
          title="DROPDOWN"
          style={borderStyle}
        />
      </div>
      <div>
        <Checkboxes
          title="CHECKBOXES"
          optionList={optionList}
          style={borderStyle}
          onChange={checkboxesOnChangeHandler}
        />
      </div>
      <div>
        <Radiobuttons
          title="RADIOBUTTONS"
          optionList={optionList}
          style={borderStyle}
          onChange={radioOnChangeHandler}
          value={radioValue}
        />
      </div>
      <div>
        <RowRadios
          style={borderStyle}
          title="ROW RADIOS"
          optionList={rowOptions}
          value={rowRadioValue}
          onChange={rowRadioOnChangeHandler}
          left="Not at all likely"
          right="Most likely"
        />
      </div>
    </div>
  );
};

export default TEMPSurvey;
