import React, { useState, useEffect } from "react";
import CenterView from "../components/CenterView";
import Colors from "../constants/Colors";

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

const containerStyle = {
  container: {
    // borderStyle: "solid",
    // borderWidth: 2,
    // borderColor: "black",

    padding: "2%",
    margin: "2%",
    borderRadius: 20,
    shadow: 100,
    background: "white"
  },
};

const TEMPSurvey = (props) => {

  useEffect(() => {
    document.body.style = `background: rgba(59,89,152,0.05);`;

    return () => {
      document.body.style = `background: rgb(255,255,255);`;
    }
  }, []);

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
      <CenterView middle={8} sides={2}>
        <div>
          <h1>This page is used to study the Survey components</h1>
          <Dropdrown
            valueList={ages}
            value={dropDownValue}
            onSelect={dropDownOnChangeHandler}
            title="DROPDOWN"
            style={containerStyle}
          />
        </div>
        <div>
          <Checkboxes
            title="CHECKBOXES"
            optionList={optionList}
            style={containerStyle}
            onChange={checkboxesOnChangeHandler}
          />
        </div>
        <div>
          <Radiobuttons
            title="RADIOBUTTONS"
            optionList={optionList}
            style={containerStyle}
            onChange={radioOnChangeHandler}
            value={radioValue}
          />
        </div>
        <div>
          <RowRadios
            style={containerStyle}
            title="ROW RADIOS"
            optionList={rowOptions}
            value={rowRadioValue}
            onChange={rowRadioOnChangeHandler}
            left="Not at all likely"
            right="Most likely"
          />
        </div>
      </CenterView>
    </div>
  );
};

export default TEMPSurvey;
