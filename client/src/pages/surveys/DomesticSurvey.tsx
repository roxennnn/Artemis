import React, { useState, useEffect } from 'react';
import CenterView from '../../components/CenterView';

import { binarise, FixMeLater } from '../../constants/Utilities';

import PrimaryButton from '../../components/PrimaryButton';
import BackButton from '../../components/BackButton';
import Checkboxes from '../../components/surveyComponents/Checkboxes';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/reducers/root.reducer';
import { submitSurvey } from '../../store/actions/user.action';

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

const Domestic = (props: FixMeLater) => {
  const strings = useSelector((state: RootState) => state.language.strings);
  const dispatch = useDispatch();

  // Change background color
  useEffect(() => {
    document.body.style.cssText = `background: rgba(59,89,152,0.05);`;

    return () => {
      document.body.style.cssText = `background: rgb(255,255,255);`;
    };
  }, []);

  // Search for 1s in state arrays
  const searchOnes = (arr: FixMeLater) => {
    return arr.includes(1);
  };

  // QUESTIONS' DATA

  // - I would like to ask you to tell me whether at any time in your life,
  // any husband, partner or ex-partner has done any of the following things:
  const q1List = [
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DomesticSurvey.q1.first,
      value: 0,
    },
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DomesticSurvey.q1.second,
      value: 1,
    },
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DomesticSurvey.q1.third,
      value: 2,
    },
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DomesticSurvey.q1.fourth,
      value: 3,
    },
  ];

  // - I would like to ask you to tell me whether at any time in your life,
  // any husband, partner or ex-partner has done any of the following things:
  const q2List = [
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DomesticSurvey.q2.first,
      value: 0,
    },
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DomesticSurvey.q2.second,
      value: 1,
    },
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DomesticSurvey.q2.third,
      value: 2,
    },
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DomesticSurvey.q2.fourth,
      value: 3,
    },
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DomesticSurvey.q2.fifth,
      value: 4,
    },
  ];

  // - Now I am going to ask you about situations that happen to some women.
  // Please tell me whether the following statements apply to your relationship with your (last) husband (partner):
  const q3List = [
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DomesticSurvey.q3.first,
      value: 0,
    },
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DomesticSurvey.q3.second,
      value: 1,
    },
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DomesticSurvey.q3.third,
      value: 2,
    },
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DomesticSurvey.q3.fourth,
      value: 3,
    },
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DomesticSurvey.q3.fifth,
      value: 4,
    },
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DomesticSurvey.q3.sixth,
      value: 5,
    },
  ];

  // - Sometimes husbands/partners get upset by the things that their wives do.
  // In your opinion, is it justified for your husband/partner to beat you in the following situations:
  const q4List = [
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DomesticSurvey.q4.first,
      value: 0,
    },
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DomesticSurvey.q4.second,
      value: 1,
    },
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DomesticSurvey.q4.third,
      value: 2,
    },
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DomesticSurvey.q4.fourth,
      value: 3,
    },
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DomesticSurvey.q4.fifth,
      value: 4,
    },
  ];

  // - I would like to ask you if at any time in your life your husband/life partner or
  // any other partner with whom you were married or in a relationship with has ever done any of the following things:
  const q5List = [
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DomesticSurvey.q5.first,
      value: 0,
    },
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DomesticSurvey.q5.second,
      value: 1,
    },
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DomesticSurvey.q5.third,
      value: 2,
    },
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DomesticSurvey.q5.fourth,
      value: 3,
    },
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DomesticSurvey.q5.fifth,
      value: 4,
    },
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DomesticSurvey.q5.sixth,
      value: 5,
    },
  ];

  // - Would like you to tell me whether at any time in your life your husband/life partner
  // or any other partner that you were married to or lived with has done any of the following things:
  const q6List = [
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DomesticSurvey.q6.first,
      value: 0,
    },
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DomesticSurvey.q6.second,
      value: 1,
    },
  ];

  // - Please tell me whether any of the following things happened to you as a result of something that your partner (husband) did:
  const q7List = [
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DomesticSurvey.q7.first,
      value: 0,
    },
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DomesticSurvey.q7.second,
      value: 1,
    },
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DomesticSurvey.q7.third,
      value: 2,
    },
  ];

  // - What particular situations make/made him violent? Any other situation?
  const q8List = [
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DomesticSurvey.q8.first,
      value: 0,
    },
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DomesticSurvey.q8.second,
      value: 1,
    },
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DomesticSurvey.q8.third,
      value: 2,
    },
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DomesticSurvey.q8.fourth,
      value: 3,
    },
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DomesticSurvey.q8.fifth,
      value: 4,
    },
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DomesticSurvey.q8.sixth,
      value: 5,
    },
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DomesticSurvey.q8.seventh,
      value: 6,
    },
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DomesticSurvey.q8.eighth,
      value: 7,
    },
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DomesticSurvey.q8.ninth,
      value: 8,
    },
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DomesticSurvey.q8.tenth,
      value: 9,
    },
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DomesticSurvey.q8.eleventh,
      value: 10,
    },
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DomesticSurvey.q8.twelveth,
      value: 11,
    },
  ];

  // - When this (these) person (people) assaulted you during the past year, to whom did you go for help?
  const q9List = [
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DomesticSurvey.q9.first,
      value: 0,
    },
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DomesticSurvey.q9.second,
      value: 1,
    },
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DomesticSurvey.q9.third,
      value: 2,
    },
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DomesticSurvey.q9.fourth,
      value: 3,
    },
    {
      label:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DomesticSurvey.q9.fifth,
      value: 4,
    },
  ];

  // QUESTIONS' STATE
  const [q7Visibility, setQ7Visibility] = useState(false);
  const [q8Visibility, setQ8Visibility] = useState(false);

  // - I would like to ask you to tell me whether at any time in your life,
  // any husband, partner or ex-partner has done any of the following things:
  const [q1Values, setQ1Values] = useState(new Array(q1List.length).fill(0));

  const onQ1ChangeHandler = (e: FixMeLater) => {
    // of interest: e.target.value --> needed to be made integer (to be considered as index)
    const tmpValues = q1Values;
    const index = parseInt(e.target.value, 10);
    let tmp = tmpValues[index];
    tmp = (tmp + 1) % 2; // update the value: if 0 -> 1, if 1 -> 0
    tmpValues[index] = tmp;
    setQ1Values(tmpValues);

    const q8vist = searchOnes([
      ...tmpValues,
      ...q1Values,
      ...q2Values,
      ...q4Values,
      ...q5Values,
      ...q6Values,
    ]);
    setQ8Visibility(q8vist);
  };

  // - I would like to ask you to tell me whether at any time in your life,
  // any husband, partner or ex-partner has done any of the following things:
  const [q2Values, setQ2Values] = useState(new Array(q2List.length).fill(0));

  const onQ2ChangeHandler = (e: FixMeLater) => {
    // of interest: e.target.value --> needed to be made integer (to be considered as index)
    const tmpValues = q2Values;
    const index = parseInt(e.target.value, 10);
    let tmp = tmpValues[index];
    tmp = (tmp + 1) % 2; // update the value: if 0 -> 1, if 1 -> 0
    tmpValues[index] = tmp;
    setQ2Values(tmpValues);

    const q8vist = searchOnes([
      ...tmpValues,
      ...q1Values,
      ...q3Values,
      ...q4Values,
      ...q5Values,
      ...q6Values,
    ]);
    setQ8Visibility(q8vist);
  };

  // - Now I am going to ask you about situations that happen to some women.
  // Please tell me whether the following statements apply to your relationship with your (last) husband (partner):
  const [q3Values, setQ3Values] = useState(new Array(q3List.length).fill(0));

  const onQ3ChangeHandler = (e: FixMeLater) => {
    // of interest: e.target.value --> needed to be made integer (to be considered as index)
    const tmpValues = q3Values;
    const index = parseInt(e.target.value, 10);
    let tmp = tmpValues[index];
    tmp = (tmp + 1) % 2; // update the value: if 0 -> 1, if 1 -> 0
    tmpValues[index] = tmp;
    setQ3Values(tmpValues);

    const q8vist = searchOnes([
      ...tmpValues,
      ...q1Values,
      ...q2Values,
      ...q4Values,
      ...q5Values,
      ...q6Values,
    ]);
    setQ8Visibility(q8vist);
  };

  // - Sometimes husbands/partners get upset by the things that their wives do.
  // In your opinion, is it justified for your husband/partner to beat you in the following situations:
  const [q4Values, setQ4Values] = useState(new Array(q4List.length).fill(0));

  const onQ4ChangeHandler = (e: FixMeLater) => {
    // of interest: e.target.value --> needed to be made integer (to be considered as index)
    const tmpValues = q4Values;
    const index = parseInt(e.target.value, 10);
    let tmp = tmpValues[index];
    tmp = (tmp + 1) % 2; // update the value: if 0 -> 1, if 1 -> 0
    tmpValues[index] = tmp;
    setQ4Values(tmpValues);

    const q7vist = searchOnes([...tmpValues, ...q5Values, ...q6Values]);
    setQ7Visibility(q7vist);

    const q8vist = searchOnes([
      ...tmpValues,
      ...q1Values,
      ...q2Values,
      ...q3Values,
      ...q5Values,
      ...q6Values,
    ]);
    setQ8Visibility(q8vist);
  };

  // - I would like to ask you if at any time in your life your husband/life partner or
  // any other partner with whom you were married or in a relationship with has ever done any of the following things:
  const [q5Values, setQ5Values] = useState(new Array(q5List.length).fill(0));

  const onQ5ChangeHandler = (e: FixMeLater) => {
    // of interest: e.target.value --> needed to be made integer (to be considered as index)
    const tmpValues = q5Values;
    const index = parseInt(e.target.value, 10);
    let tmp = tmpValues[index];
    tmp = (tmp + 1) % 2; // update the value: if 0 -> 1, if 1 -> 0
    tmpValues[index] = tmp;
    setQ5Values(tmpValues);

    const q7vist = searchOnes([...tmpValues, ...q4Values, ...q6Values]);
    setQ7Visibility(q7vist);

    const q8vist = searchOnes([
      ...tmpValues,
      ...q1Values,
      ...q2Values,
      ...q3Values,
      ...q4Values,
      ...q6Values,
    ]);
    setQ8Visibility(q8vist);
  };

  // - Would like you to tell me whether at any time in your life your husband/life partner or
  // any other partner that you were married to or lived with has done any of the following things:
  const [q6Values, setQ6Values] = useState(new Array(q6List.length).fill(0));

  const onQ6ChangeHandler = (e: FixMeLater) => {
    // of interest: e.target.value --> needed to be made integer (to be considered as index)
    const tmpValues = q6Values;
    const index = parseInt(e.target.value, 10);
    let tmp = tmpValues[index];
    tmp = (tmp + 1) % 2; // update the value: if 0 -> 1, if 1 -> 0
    tmpValues[index] = tmp;
    setQ6Values(tmpValues);

    const q7vist = searchOnes([...tmpValues, ...q5Values, ...q4Values]);
    setQ7Visibility(q7vist);

    const q8vist = searchOnes([
      ...tmpValues,
      ...q1Values,
      ...q2Values,
      ...q3Values,
      ...q4Values,
      ...q5Values,
    ]);
    setQ8Visibility(q8vist);
  };

  // - Please tell me whether any of the following things happened to you as a result of something that your partner (husband) did:
  const [q7Values, setQ7Values] = useState(new Array(q7List.length).fill(0));

  const onQ7ChangeHandler = (e: FixMeLater) => {
    // of interest: e.target.value --> needed to be made integer (to be considered as index)
    const tmpValues = q7Values;
    const index = parseInt(e.target.value, 10);
    let tmp = tmpValues[index];
    tmp = (tmp + 1) % 2; // update the value: if 0 -> 1, if 1 -> 0
    tmpValues[index] = tmp;
    setQ7Values(tmpValues);
  };

  // - What particular situations make/made him violent? Any other situation?
  const [q8Values, setQ8Values] = useState(new Array(q8List.length).fill(0));

  const onQ8ChangeHandler = (e: FixMeLater) => {
    // of interest: e.target.value --> needed to be made integer (to be considered as index)
    const tmpValues = q8Values;
    const index = parseInt(e.target.value, 10);
    let tmp = tmpValues[index];
    tmp = (tmp + 1) % 2; // update the value: if 0 -> 1, if 1 -> 0
    tmpValues[index] = tmp;
    setQ8Values(tmpValues);
  };

  // - When this (these) person (people) assaulted you during the past year, to whom did you go for help?
  const [q9Values, setQ9Values] = useState(new Array(q9List.length).fill(0));

  const onQ9ChangeHandler = (e: FixMeLater) => {
    // of interest: e.target.value --> needed to be made integer (to be considered as index)
    const tmpValues = q9Values;
    const index = parseInt(e.target.value, 10);
    let tmp = tmpValues[index];
    tmp = (tmp + 1) % 2; // update the value: if 0 -> 1, if 1 -> 0
    tmpValues[index] = tmp;
    setQ9Values(tmpValues);
  };

  // SUBMIT button
  const onSubmit = async () => {
    // STEPS:
    // - binarise answers
    const q1Binarised = binarise(q1Values) + 1;
    // console.log(`q1 answers: ${q1Values}; Binarised: ${q1Binarised}`);
    const q2Binarised = binarise(q2Values) + 1;
    // console.log(`q2 answers: ${q2Values}; Binarised: ${q2Binarised}`);
    const q3Binarised = binarise(q3Values) + 1;
    // console.log(`q3 answers: ${q3Values}; Binarised: ${q3Binarised}`);
    const q4Binarised = binarise(q4Values) + 1;
    // console.log(`q4 answers: ${q4Values}; Binarised: ${q4Binarised}`);
    const q5Binarised = binarise(q5Values) + 1;
    // console.log(`q5 answers: ${q5Values}; Binarised: ${q5Binarised}`);
    const q6Binarised = binarise(q6Values) + 1;
    // console.log(`q6 answers: ${q6Values}; Binarised: ${q6Binarised}`);
    const q7Binarised = binarise(q7Values) + 1;
    // console.log(`q7 answers: ${q7Values}; Binarised: ${q7Binarised}`);
    const q8Binarised = binarise(q8Values) + 1;
    // console.log(`q8 answers: ${q8Values}; Binarised: ${q8Binarised}`);
    const q9Binarised = binarise(q9Values) + 1;
    // console.log(`q9 answers: ${q9Values}; Binarised: ${q9Binarised}`);

    // - make array
    const answers = [
      q1Binarised,
      q2Binarised,
      q3Binarised,
      q4Binarised,
      q5Binarised,
      q6Binarised,
      q7Binarised,
      q8Binarised,
      q9Binarised,
    ];

    // post request
    try {
      dispatch(submitSurvey('domestic', answers));
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
              strings.Profile.ProfileSurveys.DomesticSurvey.title}
          </h3>
          <div>
            {strings.Profile &&
              strings.Profile.ProfileSurveys.DomesticSurvey.introduction}
          </div>
        </div>
        <div>
          <Checkboxes
            title={
              strings.Profile &&
              strings.Profile.ProfileSurveys.DomesticSurvey.q1.title
            }
            optionList={q1List}
            style={containerStyle}
            onChange={onQ1ChangeHandler}
          />
        </div>
        <div>
          <Checkboxes
            title={
              strings.Profile &&
              strings.Profile.ProfileSurveys.DomesticSurvey.q2.title
            }
            optionList={q2List}
            style={containerStyle}
            onChange={onQ2ChangeHandler}
          />
        </div>
        <div>
          <Checkboxes
            title={
              strings.Profile &&
              strings.Profile.ProfileSurveys.DomesticSurvey.q3.title
            }
            optionList={q3List}
            style={containerStyle}
            onChange={onQ3ChangeHandler}
          />
        </div>
        <div>
          <Checkboxes
            title={
              strings.Profile &&
              strings.Profile.ProfileSurveys.DomesticSurvey.q4.title
            }
            optionList={q4List}
            style={containerStyle}
            onChange={onQ4ChangeHandler}
          />
        </div>
        <div>
          <Checkboxes
            title={
              strings.Profile &&
              strings.Profile.ProfileSurveys.DomesticSurvey.q5.title
            }
            optionList={q5List}
            style={containerStyle}
            onChange={onQ5ChangeHandler}
          />
        </div>
        <div>
          <Checkboxes
            title={
              strings.Profile &&
              strings.Profile.ProfileSurveys.DomesticSurvey.q6.title
            }
            optionList={q6List}
            style={containerStyle}
            onChange={onQ6ChangeHandler}
          />
        </div>
        {q7Visibility && (
          <div>
            <Checkboxes
              title={
                strings.Profile &&
                strings.Profile.ProfileSurveys.DomesticSurvey.q7.title
              }
              optionList={q7List}
              style={containerStyle}
              onChange={onQ7ChangeHandler}
            />
          </div>
        )}
        {q8Visibility && (
          <div>
            <div>
              <Checkboxes
                title={
                  strings.Profile &&
                  strings.Profile.ProfileSurveys.DomesticSurvey.q8.title
                }
                optionList={q8List}
                style={containerStyle}
                onChange={onQ8ChangeHandler}
              />
            </div>
            <div>
              <Checkboxes
                title={
                  strings.Profile &&
                  strings.Profile.ProfileSurveys.DomesticSurvey.q9.title
                }
                optionList={q9List}
                style={containerStyle}
                onChange={onQ9ChangeHandler}
              />
            </div>
          </div>
        )}
      </CenterView>
      <PrimaryButton
        label={
          strings.Profile &&
          strings.Profile.ProfileSurveys.DomesticSurvey.submit
        }
        onClick={onSubmit}
        buttonStyle={{ width: '10%' }}
      />
    </div>
  );
};

export default Domestic;
