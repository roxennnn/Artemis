import React, { useState, useEffect } from 'react';
import CenterView from '../../components/CenterView';

import Countries from '../../constants/Countries';
import { binarise, FixMeLater } from '../../constants/Utilities';

import PrimaryButton from '../../components/PrimaryButton';
import BackButton from '../../components/BackButton';

import Dropdown from '../../components/surveyComponents/Dropdown';
import CountryDropdown from '../../components/surveyComponents/CountryDropdown';
import Checkboxes from '../../components/surveyComponents/Checkboxes';
import Radiobuttons from '../../components/surveyComponents/Radiobuttons';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/reducers/root.reducer';
import { submitSurvey } from '../../store/actions/user.action';

// - How old are you
const ageRange = [...Array(47).keys()].map((i) => {
  return { name: i + 18, value: i + 18 };
});

// Styles
const containerStyle = {
  container: {
    // borderStyle: "solid",
    // borderWidth: 2,
    // borderColor: "black",

    padding: '2%',
    margin: '2%',
    borderRadius: 20,
    shadow: 100,
    background: 'white',
  },
};

const DemographicSurvey = (props: FixMeLater) => {
  const strings = useSelector((state: RootState) => state.language.strings);
  const [submitError, setSubmitError] = useState(false);

  const dispatch = useDispatch();

  // QUESTIONS' DATA

  const ages = [
    {
      name:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DemographicsSurvey.younger,
      value: 17,
    },
    ...ageRange,
    {
      name:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DemographicsSurvey.older,
      value: 65,
    },
  ];

  // - Means of transport available
  const transportationList = [
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DemographicsSurvey.transportation.bike,
      value: 0,
    },
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DemographicsSurvey.transportation.car,
      value: 1,
    },
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DemographicsSurvey.transportation.bus,
      value: 2,
    },
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DemographicsSurvey.transportation.train,
      value: 3,
    },
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DemographicsSurvey.transportation
          .scooter,
      value: 4,
    },
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DemographicsSurvey.transportation.other,
      value: 5,
    },
  ];

  // - What is your highest level of education?
  const educationsList = [
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DemographicsSurvey.education
          .noFormalEducation,
      value: 1,
    },
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DemographicsSurvey.education
          .primaryEducation,
      value: 2,
    },
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DemographicsSurvey.education
          .secondaryEducation,
      value: 3,
    },
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DemographicsSurvey.education
          .universityDegree,
      value: 4,
    },
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DemographicsSurvey.education
          .postGraduateUniversityDegree,
      value: 5,
    },
    { label: 'Other', value: 6 },
  ];

  // - What is your marital status?
  const maritalList = [
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DemographicsSurvey.marital.single,
      value: 1,
    },
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DemographicsSurvey.marital.married,
      value: 2,
    },
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DemographicsSurvey.marital.divorced,
      value: 3,
    },
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DemographicsSurvey.marital.widowed,
      value: 4,
    },
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DemographicsSurvey.marital.cohabitating,
      value: 5,
    },
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DemographicsSurvey.marital.other,
      value: 6,
    },
  ];

  // - Who is the primary income earner of your household?
  const primaryIncomeList = [
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DemographicsSurvey.primaryIncome.me,
      value: 1,
    },
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DemographicsSurvey.primaryIncome.partner,
      value: 2,
    },
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DemographicsSurvey.primaryIncome.parents,
      value: 3,
    },
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DemographicsSurvey.primaryIncome
          .children,
      value: 4,
    },
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DemographicsSurvey.primaryIncome.other,
      value: 5,
    },
  ];

  // - What do you mainly do for work?
  const mainlyWorkList = [
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DemographicsSurvey.mainlyWork
          .fullTimeRegularSalary,
      value: 1,
    },
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DemographicsSurvey.mainlyWork
          .partTimeRegularSalary,
      value: 2,
    },
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DemographicsSurvey.mainlyWork
          .occasionally,
      value: 3,
    },
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DemographicsSurvey.mainlyWork.perSeason,
      value: 4,
    },
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DemographicsSurvey.mainlyWork
          .selfEmployed,
      value: 5,
    },
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DemographicsSurvey.mainlyWork.lookingFor,
      value: 6,
    },
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DemographicsSurvey.mainlyWork.housewife,
      value: 7,
    },
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DemographicsSurvey.mainlyWork.student,
      value: 8,
    },
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DemographicsSurvey.mainlyWork.retired,
      value: 9,
    },
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DemographicsSurvey.mainlyWork.disability,
      value: 10,
    },
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DemographicsSurvey.mainlyWork.other,
      value: 11,
    },
  ];

  // Change background color
  useEffect(() => {
    document.body.style.cssText = `background: rgba(59,89,152,0.05);`;

    return () => {
      document.body.style.cssText = `background: rgb(255,255,255);`;
    };
  }, []);

  // Use as value list for the wedding age question --> the age must be less than the current one
  const [weddingAges, setWeddingAges] = useState(ages);
  // solve the strings language problem
  useEffect(() => {
    if (weddingAges.length === ages.length) {
      setWeddingAges(ages);
    } else {
      if (howOldAreYouValue) {
        const possibleAges = ages.filter((age) => {
          return age.value <= (howOldAreYouValue || 100); // FixMeLater
        });
        setWeddingAges(possibleAges); // @TOFIX --> should update the viewed wedding age
      }
    }
  }, [strings]);

  // QUESTIONS
  // - How old are you?
  const [howOldAreYouValue, setHowOldAreYouValue] = useState<FixMeLater>();
  const [oldError, setOldError] = useState(false);

  const howOldAreYouOnChangeHandler = (key: FixMeLater) => {
    const possibleAges = ages.filter((age) => {
      return age.value <= key;
    });
    setWeddingAges(possibleAges); // @TOFIX --> should update the viewed wedding age

    setHowOldAreYouValue(key);
  };

  // - Country question
  const [country, setCountry] = useState<FixMeLater>();
  const [region, setRegion] = useState<FixMeLater>();
  const [countryError, setCountryError] = useState(false);

  const onCountrySelectHandler = (value: FixMeLater) => {
    setCountry(value);
  };
  const onRegionSelectHandler = (value: FixMeLater) => {
    setRegion(value);
  };

  // - Means of transport available
  const [transportationValues, setTransportationValues] = useState(
    new Array(transportationList.length).fill(0)
  );
  const [transportationError, setTransportationError] = useState(false);
  const onTransporationChangeHanlder = (e: FixMeLater) => {
    // of interest: e.target.value --> needed to be made integer (to be considered as index)
    const tmpValues = transportationValues;
    const index = parseInt(e.target.value, 10);
    let tmp = tmpValues[index];
    tmp = (tmp + 1) % 2; // update the value: if 0 -> 1, if 1 -> 0
    tmpValues[index] = tmp;
    setTransportationValues(tmpValues);
  };

  // - What is your highest level of education?
  const [educationValue, setEducationValue] = useState(-1);
  const [educationError, setEducationError] = useState(false);

  const onEducationChangeHandler = (e: FixMeLater) => {
    setEducationValue(parseInt(e.target.value, 10));
  };

  // - What is your marital status?
  const [maritalStatusValue, setMaritalStatusValue] = useState(-1);
  const [maritalError, setMaritalError] = useState(false);

  // - How old were you when you got married?
  const [weddingAge, setWeddingAge] = useState<FixMeLater>();
  const [weddingError, setWeddingError] = useState(false);

  const onMaritalStatusChangeHandler = (e: FixMeLater) => {
    const newValue = parseInt(e.target.value, 10);
    if (newValue < 2 || newValue > 4) {
      setWeddingAge(1);
    }
    setMaritalStatusValue(newValue);
  };

  const onWeddingAgeChangeHandler = (key: FixMeLater, obj: FixMeLater) => {
    setWeddingAge(key);
  };

  // - Who is the primary income earner of your household?
  const [primaryIncomeValue, setPrimaryIncomeValue] = useState(-1);
  const [primaryIncomeError, setPrimaryIncomeError] = useState(false);

  const onPrimaryIncomeChangeHandler = (e: FixMeLater) => {
    setPrimaryIncomeValue(parseInt(e.target.value, 10));
  };

  // - What do you mainly do for work?
  const [mainlyWorkValue, setMainlyWorkValue] = useState(-1);
  const [mainlyWorkError, setMainlyWorkError] = useState(false);

  const onMainlyWorkChangeHandler = (e: FixMeLater) => {
    setMainlyWorkValue(parseInt(e.target.value, 10));
  };

  // SUBMIT button
  const onSubmit = async () => {
    setSubmitError(false);

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
        parseInt(weddingAge, 10) > parseInt(howOldAreYouValue as string, 10) ||
        parseInt(weddingAge, 10) === 1
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
      const transportationBinarised = binarise(transportationValues);

      // STEPS:
      // - make array
      const answers = [
        new Date().getFullYear() -
          (!!howOldAreYouValue ? howOldAreYouValue : 0),
        parseInt(country, 10) + 1,
        parseInt(region, 10) + 1,
        transportationBinarised,
        educationValue,
        maritalStatusValue,
        parseInt(weddingAge, 10),
        primaryIncomeValue,
        mainlyWorkValue,
      ];

      // post request
      try {
        dispatch(submitSurvey('demographics', answers));
        // Go back to profile page
        props.history.push({
          pathname: '/profile',
          state: {
            from: true,
            to: 0,
          },
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      // red border
      // actually don't need to do anything
      setSubmitError(true);
    }
  };

  return (
    <div style={{ margin: '2%' }}>
      <CenterView
        middle={8}
        sides={2}
        left={
          <BackButton
            onClick={() => {
              props.history.push({
                pathname: '/profile',
                state: {
                  from: true,
                  to: 0,
                },
              });
            }}
            label={strings.back && strings.back}
          />
        }
      >
        <div>
          <h3>
            {strings.Profile &&
              strings.Profile.ProfileSurveys.DemographicsSurvey.title}
          </h3>
          <div>
            {strings.Profile &&
              strings.Profile.ProfileSurveys.DemographicsSurvey.introduction}
          </div>
          <Dropdown
            valueList={ages}
            value={howOldAreYouValue}
            onSelect={howOldAreYouOnChangeHandler}
            title={
              strings.Profile &&
              strings.Profile.ProfileSurveys.DemographicsSurvey.howOldAreYou
            }
            style={containerStyle}
            defaultMessage={
              strings.Profile &&
              strings.Profile.ProfileSurveys.DemographicsSurvey.selectYourAge
            }
            error={oldError}
            errorMessage={
              strings.Profile &&
              strings.Profile.ProfileSurveys.youMustAnswerToThisQuestion
            }
          />
        </div>
        <div>
          <CountryDropdown
            title={
              strings.Profile &&
              strings.Profile.ProfileSurveys.DemographicsSurvey.whereAreYouFrom
            }
            countries={Countries}
            country={country}
            onSelectCountry={onCountrySelectHandler}
            region={region}
            onSelectRegion={onRegionSelectHandler}
            style={containerStyle}
            error={countryError}
            errorMessage={
              strings.Profile &&
              strings.Profile.ProfileSurveys.youMustAnswerToThisQuestion
            }
            strings={strings}
          />
        </div>
        <div>
          <Checkboxes
            title={
              strings.Profile &&
              strings.Profile.ProfileSurveys.DemographicsSurvey.transportation
                .title
            }
            optionList={transportationList}
            style={containerStyle}
            onChange={onTransporationChangeHanlder}
            error={transportationError}
            errorMessage={
              strings.Profile &&
              strings.Profile.ProfileSurveys.youMustAnswerToThisQuestion
            }
          />
        </div>
        <div>
          <Radiobuttons
            title={
              strings.Profile &&
              strings.Profile.ProfileSurveys.DemographicsSurvey.education.title
            }
            optionList={educationsList}
            style={containerStyle}
            onChange={onEducationChangeHandler}
            value={educationValue}
            error={educationError}
            errorMessage={
              strings.Profile &&
              strings.Profile.ProfileSurveys.youMustAnswerToThisQuestion
            }
          />
        </div>
        <div>
          <Radiobuttons
            title={
              strings.Profile &&
              strings.Profile.ProfileSurveys.DemographicsSurvey.marital.title
            }
            optionList={maritalList}
            style={containerStyle}
            onChange={onMaritalStatusChangeHandler}
            value={maritalStatusValue}
            error={maritalError}
            errorMessage={
              strings.Profile &&
              strings.Profile.ProfileSurveys.youMustAnswerToThisQuestion
            }
          />
        </div>
        {(maritalStatusValue === 2 ||
          maritalStatusValue === 3 ||
          maritalStatusValue === 4) && (
          <div>
            <Dropdown
              title={
                strings.Profile &&
                strings.Profile.ProfileSurveys.DemographicsSurvey.weddingAge
              }
              valueList={weddingAges}
              value={weddingAge}
              onSelect={onWeddingAgeChangeHandler}
              style={containerStyle}
              defaultMessage={
                strings.Profile &&
                strings.Profile.ProfileSurveys.DemographicsSurvey.selectTheAge
              }
              error={weddingError}
              errorMessage={
                strings.Profile &&
                strings.Profile.ProfileSurveys.youMustAnswerToThisQuestion
              }
            />
          </div>
        )}
        <div>
          <Radiobuttons
            title={
              strings.Profile &&
              strings.Profile.ProfileSurveys.DemographicsSurvey.primaryIncome
                .title
            }
            optionList={primaryIncomeList}
            style={containerStyle}
            onChange={onPrimaryIncomeChangeHandler}
            value={primaryIncomeValue}
            error={primaryIncomeError}
            errorMessage={
              strings.Profile &&
              strings.Profile.ProfileSurveys.youMustAnswerToThisQuestion
            }
          />
        </div>
        <div>
          <Radiobuttons
            title={
              strings.Profile &&
              strings.Profile.ProfileSurveys.DemographicsSurvey.mainlyWork.title
            }
            optionList={mainlyWorkList}
            style={containerStyle}
            onChange={onMainlyWorkChangeHandler}
            value={mainlyWorkValue}
            error={mainlyWorkError}
            errorMessage={
              strings.Profile &&
              strings.Profile.ProfileSurveys.youMustAnswerToThisQuestion
            }
          />
        </div>
      </CenterView>
      {submitError && (
        <div
          style={{
            color: 'red',
            textAlign: 'center',
            fontSize: 16,
            marginTop: '0.5%',
            marginBottom: '0.5%',
          }}
        >
          {strings.Profile &&
            strings.Profile.ProfileSurveys.youMustAnswerToAllTheQuestions}
        </div>
      )}
      <PrimaryButton
        label={
          strings.Profile &&
          strings.Profile.ProfileSurveys.DemographicsSurvey.submit
        }
        onClick={onSubmit}
        buttonStyle={{ width: '10%' }}
      />
    </div>
  );
};

export default DemographicSurvey;
