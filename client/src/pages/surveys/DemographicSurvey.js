import React, { useState, useEffect } from "react";
import CenterView from "../../components/CenterView";

import Colors from "../../constants/Colors";
import Countries from "../../constants/Countries";
import { binarise } from "../../constants/Utilities";

import Dropdrown from "../../components/surveyComponents/Dropdown";
import CountryDropdown from "../../components/surveyComponents/CountryDropdown";
import Checkboxes from "../../components/surveyComponents/Checkboxes";
import Radiobuttons from "../../components/surveyComponents/Radiobuttons";
import SurveyService from "../../services/survey.service";

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
  { label: "No formal education", value: 1 },
  { label: "Primary education", value: 2 },
  { label: "Secondary education", value: 3 },
  { label: "University degree", value: 4 },
  { label: "Post-graduate university degree", value: 5 },
  { label: "Other", value: 6 },
];

// - What is your marital status?
const maritalList = [
  { label: "Single/Never married", value: 1 },
  { label: "Married", value: 2 },
  { label: "Divorced/Separated", value: 3 },
  { label: "Widowed", value: 4 },
  { label: "Living together/Cohabitation", value: 5 },
  { label: "Other", value: 6 },
];

// - Who is the primary income earner of your household?
const primaryIncomeList = [
  { label: "Me", value: 1 },
  { label: "My husband/partner", value: 2 },
  { label: "One of my parents", value: 3 },
  { label: "One of my children", value: 4 },
  { label: "Other", value: 5 },
];

// - What do you mainly do for work?
const mainlyWorkList = [
  { label: "Working full-time for a regular salary", value: 1 },
  { label: "Working part-time for a regular salary", value: 2 },
  {
    label:
      "Working occasionally, irregular pay (whenever the work is available)",
    value: 3,
  },
  {
    label: "Working per season (e.g., only during the harvest season)",
    value: 4,
  },
  { label: "Self-employed, working for yourself", value: 5 },
  { label: "Not working but looking for a job", value: 6 },
  {
    label: "Housewife doing household chores and taking care of children",
    value: 7,
  },
  { label: "Full-time student", value: 8 },
  { label: "Not working because of retirement", value: 9 },
  { label: "Not working because of sickness, disability, etc.", value: 10 },
  { label: "Other", value: 11 },
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

  const backButton = (
    <div>
      <a
        // className="btn-radius fat-btn btn btn-warning btn-lg"
        role="button"
        onClick={() => {
          props.history.push({
            pathname: "/profile",
            state: {
              from: true,
              to: 1,
            },
          });
        }}
        style={{ color: Colors.primary }}
      >
        {"<"}Back
      </a>
    </div>
  );

  // Use as value list for the wedding age question --> the age must be less than the current one
  const [weddingAges, setWeddingAges] = useState(ages);

  // QUESTIONS
  // - How old are you?
  const [howOldAreYouValue, setHowOldAreYouValue] = useState();
  const [oldError, setOldError] = useState(false);

  const howOldAreYouOnChangeHandler = (key, obj) => {
    let possibleAges = weddingAges.filter((age) => {
      return age.value <= key;
    });
    setWeddingAges(possibleAges); // @TOFIX --> should update the viewed wedding age

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

  // - How old were you when you got married?
  const [weddingAge, setWeddingAge] = useState();
  const [weddingError, setWeddingError] = useState(false);

  const onMaritalStatusChangeHandler = (e) => {
    const newValue = parseInt(e.target.value);
    if (newValue !== 2 || newValue !== 3 || newValue !== 4) {
      setWeddingAge(1);
    }
    setMaritalStatusValue(newValue);
  };

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
  const onSubmit = async () => {
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
    if (
      maritalStatusValue === 2 ||
      maritalStatusValue === 3 ||
      maritalStatusValue === 4
    ) {
      if (
        !weddingAge ||
        parseInt(weddingAge) >
          parseInt(howOldAreYouValue || parseInt(weddingAge) === 1)
      ) {
        setWeddingError(true);
        noErrors = false;
      } else {
        setWeddingError(false);
      }
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
    if (noErrors) {
      // Debugging logs
      // console.log(`BIRTHYEAR: ${parseInt(new Date().getFullYear()) - howOldAreYouValue}`);
      // console.log(
      //   `COUNTRY: ${parseInt(country) + 1}; REGION: ${parseInt(region) + 1}`
      // );
      const transportationBinarised = binarise(transportationValues);
      // console.log(
      //   `TRANSPORTATION: ${transportationValues}; BINARISED: ${transportationBinarised}`
      // );
      // console.log(`EDUCATION: ${educationValue}`);
      // console.log(`MARITAL STATUS: ${maritalStatusValue}`);
      // console.log(`WEDDING: ${weddingAge ? weddingAge : 1}`);
      // console.log(`PRIMARY INCOME: ${primaryIncomeValue}`);
      // console.log(`MAINLY WORK: ${mainlyWorkValue}`);

      // STEPS:
      // - make array
      const answers = [
        parseInt(new Date().getFullYear()) - howOldAreYouValue,
        parseInt(country) + 1,
        parseInt(region) + 1,
        transportationBinarised,
        educationValue,
        maritalStatusValue,
        parseInt(weddingAge),
        primaryIncomeValue,
        mainlyWorkValue,
      ];
      // Debugging logs
      // console.log(answers);

      // post request
      try {
        await SurveyService.submitSurvey("demographics", answers);
        // Go back to profile page
        props.history.push({
          pathname: "/profile",
          state: {
            from: true,
            to: 1,
          },
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      // red border
      // actually don't need to do anything
      console.log("SOme errors found");
    }
  };

  return (
    <div>
      <CenterView middle={8} sides={2} left={backButton}>
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
        {(maritalStatusValue === 2 ||
          maritalStatusValue === 3 ||
          maritalStatusValue === 4) && (
          <div>
            <Dropdrown
              title="How old were you when you got married?"
              valueList={weddingAges}
              value={weddingAge}
              onSelect={onWeddingAgeChangeHandler}
              style={containerStyle}
              defaultMessage={"Select the age"}
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
            // marginRight: "4%",
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
