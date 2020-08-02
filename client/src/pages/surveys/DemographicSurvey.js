import React, { useState, useEffect } from "react";
import CenterView from "../../components/CenterView";


import Colors from "../../constants/Colors";
import Countries from "../../constants/Countries";

import Dropdrown from "../../components/surveyComponents/Dropdown";
import CountryDropdown from "../../components/surveyComponents/CountryDropdown";
import Checkboxes from "../../components/surveyComponents/Checkboxes";
import Radiobuttons from "../../components/surveyComponents/Radiobuttons";


// QUESTIONS' DATA

// - How old are you
let ageRange = [...Array(47).keys()].map((i) => {
  return { name: i + 18, value: i + 18 };
});
const ages = [
  { name: "17 or younger", value: 17 },
  ...ageRange,
  { name: "65 or older", value: 65 },
];

// - Means of transport available
const transportationList = [
  { label: "Bike", value: 0 },
  { label: "Car", value: 1 },
  { label: "Bus/Tram", value: 2 },
  { label: "Train", value: 3 },
  { label: "Scooter/Motorbike", value: 4 },
  { label: "Other", value: 5 },
];

// - What is your highest level of education?
const educationsList = [
  { label: "No formal education", value: 0 },
  { label: "Primary education", value: 1 },
  { label: "Secondary education", value: 2 },
  { label: "University degree", value: 3 },
  { label: "Post-graduate university degree", value: 4 },
  { label: "Other", value: 5 },
];

// - What is your marital status?
const maritalList = [
  { label: "Single/Never married", value: 0 },
  { label: "Married", value: 1 },
  { label: "Divorced/Separated", value: 2 },
  { label: "Widowed", value: 3 },
  { label: "Living together/Cohabitation", value: 4 },
  { label: "Other", value: 5 },
];

// - Who is the primary income earner of your household?
const primaryIncomeList = [
  { label: "Me", value: 0 },
  { label: "My husband/partner", value: 1 },
  { label: "One of my parents", value: 2 },
  { label: "One of my children", value: 3 },
  { label: "Other", value: 4 },
];

// - What do you mainly do for work?
const mainlyWorkList = [
  { label: "Working full-time for a regular salary", value: 0 },
  { label: "Working part-time for a regular salary", value: 1 },
  { label: "Working occasionally, irregular pay (whenever the work is available)", value: 2 },
  { label: "Working per season (e.g., only during the harvest season)", value: 3 },
  { label: "Self-employed, working for yourself", value: 4 },
  { label: "Not working but looking for a job", value: 5 },
  { label: "Housewife doing household chores and taking care of children", value: 6 },
  { label: "Full-time student", value: 7 },
  { label: "Not working because of retirement", value: 8 },
  { label: "Not working because of sickness, disability, etc.", value: 9 },
  { label: "Other", value: 10 },
];

// Styles
const containerStyle = {
  container: {
    // borderStyle: "solid",
    // borderWidth: 2,
    // borderColor: "black",

    padding: "2%",
    margin: "2%",
    borderRadius: 20,
    shadow: 100,
    background: "white",
  },
};

const DemographicSurvey = (props) => {
  // Change background color
  useEffect(() => {
    document.body.style = `background: rgba(59,89,152,0.05);`;

    return () => {
      document.body.style = `background: rgb(255,255,255);`;
    };
  }, []);

  // QUESTIONS
  // - How old are you?
  const [howOldAreYouValue, setHowOldAreYouValue] = useState();
  const [oldError, setOldError] = useState(false);

  const howOldAreYouOnChangeHandler = (key, obj) => {
    setHowOldAreYouValue(key);
  };

  // - Country question
  const [country, setCountry] = useState();
  const [region, setRegion] = useState();
  const [countryError, setCountryError] = useState(false);

  const onCountrySelectHandler = (value) => {
    setCountry(value);
  };
  const onRegionSelectHandler = (value) => {
    setRegion(value);
  };

  // - Means of transport available
  const [transportationValues, setTransportationValues] = useState(
    new Array(transportationList.length).fill(0)
  );
  const [transportationError, setTransportationError] = useState(false);

  const onTransporationChangeHanlder = (e) => {
    // of interest: e.target.value --> needed to be made integer (to be considered as index)
    let tmp_values = transportationValues;
    const index = parseInt(e.target.value);
    let tmp = tmp_values[index];
    tmp = (tmp + 1) % 2; // update the value: if 0 -> 1, if 1 -> 0
    tmp_values[index] = tmp;
    setTransportationValues(tmp_values);
  };

  // - What is your highest level of education?
  const [educationValue, setEducationValue] = useState(-1);
  const [educationError, setEducationError] = useState(false);
  
  const onEducationChangeHandler = (e) => {
    setEducationValue(parseInt(e.target.value));
  };

  // - What is your marital status?
  const [maritalStatusValue, setMaritalStatusValue] = useState(-1);
  const [maritalError, setMaritalError] = useState(false);
  
  const onMaritalStatusChangeHandler = (e) => {
    setMaritalStatusValue(parseInt(e.target.value));
  };

  // - How old were you when you got married?
  const [weddingAge, setWeddingAge] = useState();
  const [weddingError, setWeddingError] = useState(false);
  
  const onWeddingAgeChangeHandler = (key, obj) => {
    setWeddingAge(key);
  };

  // - Who is the primary income earner of your household?
  const [primaryIncomeValue, setPrimaryIncomeValue] = useState(-1);
  const [primaryIncomeError, setPrimaryIncomeError] = useState(false);
  
  const onPrimaryIncomeChangeHandler = (e) => {
    setPrimaryIncomeValue(parseInt(e.target.value));
  };

  // - What do you mainly do for work?
  const [mainlyWorkValue, setMainlyWorkValue] = useState(-1);
  const [mainlyWorkError, setMainlyWorkError] = useState(false);
  
  const onMainlyWorkChangeHandler = (e) => {
    setMainlyWorkValue(parseInt(e.target.value));
  };

  // SUBMIT button
  const onSubmit = () => {
    // Check if values are set
    let noErrors = true;

    // - How old
    if (!howOldAreYouValue) {
      setOldError(true);
      noErrors = false;
    } else {
      setOldError(false);
    }

    // - Country
    if (!country) {
      setCountryError(true);
      noErrors = false;
    } else {
      if (!region) {
        setCountryError(true);
        noErrors = false;
      } else {
        setCountryError(false);
      }
    }

    // - Transportation
    if (!transportationValues.find((val) => val === 1)) {
      setTransportationError(true);
      noErrors = false;
    } else {
      setTransportationError(false);
    }

    // - Education
    if (educationValue < 0) {
      setEducationError(true);
      noErrors = false;
    } else {
      setEducationError(false);
    }

    // - Marital status
    if (maritalStatusValue < 0) {
      setMaritalError(true);
      noErrors = false;
    } else {
      setMaritalError(false);
    }

    // - Wedding
    if ((maritalStatusValue === 1 || maritalStatusValue === 2 || maritalStatusValue === 3) && !weddingAge) {
      setWeddingError(true);
      noErrors = false;
    } else {
      setWeddingError(false);
    }

    // - Primary income
    if (primaryIncomeValue < 0) {
      setPrimaryIncomeError(true);
      noErrors = false;
    } else {
      setPrimaryIncomeError(false);
    }

    // - Mainly work
    if (mainlyWorkValue < 0) {
      setMainlyWorkError(true);
      noErrors = false;
    } else {
      setMainlyWorkError(false);
    }

    // Final check:
    if (noErrors) { // submit
      console.log("TODO");
      // props.setSurveyDone();
      // props.history.push("/profile");
      props.history.push({
        pathname: '/profile',
        state: { 
            from: true,
            to: 1
        }
      })
    } else { // red border
      // actually don't need to do nothing
      console.log("SOme errors found");
    }
     
  };

  return (
    <div>
      <CenterView middle={8} sides={2}>
        <div>
          <h1>Demographic survey</h1>
          <Dropdrown
            valueList={ages}
            value={howOldAreYouValue}
            onSelect={howOldAreYouOnChangeHandler}
            title="How old are you?"
            style={containerStyle}
            defaultMessage="Select your age"
            error={oldError}
          />
        </div>
        <div>
          <CountryDropdown
            title="Where are you from?"
            countries={Countries}
            country={country}
            onSelectCountry={onCountrySelectHandler}
            region={region}
            onSelectRegion={onRegionSelectHandler}
            style={containerStyle}
            error={countryError}
          />
        </div>
        <div>
          <Checkboxes
            title="Means of transport available:"
            optionList={transportationList}
            style={containerStyle}
            onChange={onTransporationChangeHanlder}
            error={transportationError}
          />
        </div>
        <div>
          <Radiobuttons
            title="What is your highest level of education?"
            optionList={educationsList}
            style={containerStyle}
            onChange={onEducationChangeHandler}
            value={educationValue}
            error={educationError}
          />
        </div>
        <div>
          <Radiobuttons
            title="What is your marital status?"
            optionList={maritalList}
            style={containerStyle}
            onChange={onMaritalStatusChangeHandler}
            value={maritalStatusValue}
            error={maritalError}
          />
        </div>
        {(maritalStatusValue === 1 ||
          maritalStatusValue === 2 ||
          maritalStatusValue === 3) && (
          <div>
            <Dropdrown
              title="How old were you when you got married?"
              valueList={ages}
              value={weddingAge}
              onSelect={onWeddingAgeChangeHandler}
              style={containerStyle}
              defaultMessage="Select the age"
              error={weddingError}
            />
          </div>
        )}
        <div>
          <Radiobuttons
            title="Who is the primary income earner of your household?"
            optionList={primaryIncomeList}
            style={containerStyle}
            onChange={onPrimaryIncomeChangeHandler}
            value={primaryIncomeValue}
            error={primaryIncomeError}
          />
        </div>
        <div>
          <Radiobuttons
            title="What do you mainly do for work?"
            optionList={mainlyWorkList}
            style={containerStyle}
            onChange={onMainlyWorkChangeHandler}
            value={mainlyWorkValue}
            error={mainlyWorkError}
          />
        </div>
      </CenterView>
      <div className="col center-col">
        <a
          className="btn-radius2 btn"
          style={{
            background: Colors.gradient,
            backgroundColor: Colors.primary,
            color: Colors.accent,
            marginRight: "4%",
          }}
          role="button"
          onClick={onSubmit}
        >
          Submit
        </a>
      </div>
    </div>
  );
};

export default DemographicSurvey;
