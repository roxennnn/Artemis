import React, { useState, useEffect } from "react";
import CenterView from "../../components/CenterView";

import Colors from "../../constants/Colors";
import { binarise } from "../../constants/Utilities";

import Checkboxes from "../../components/surveyComponents/Checkboxes";
import SurveyService from "../../services/survey.service";

// QUESTIONS' DATA

// - I would like to ask you to tell me whether at any time in your life, any husband, partner or ex-partner has done any of the following things:
const q1List = [
  { label: "Deny your access to financial resources", value: 0 },
  { label: "Deny your access to property and durable goods", value: 1 },
  {
    label:
      "Deliberately not comply with economic responsibilities, such as alimony or financial support for the family, exposing you to poverty and hardship",
    value: 2,
  },
  { label: "Deny your access a job and education", value: 3 },
];

// - I would like to ask you to tell me whether at any time in your life, any husband, partner or ex-partner has done any of the following things:
const q2List = [
  { label: "Insulted you or made you feel bad about yourself", value: 0 },
  { label: "Belittled or humiliated you in front of other people", value: 1 },
  {
    label:
      "Done something on purpose to scare or intimidate you (for example, by the way he looks at you, yells, or destroys things)",
    value: 2,
  },
  { label: "Threatened to harm you or someone important to you", value: 3 },
  { label: "Threatened to take away your children", value: 4 },
];

// - Now I am going to ask you about situations that happen to some women. Please tell me whether the following statements apply to your relationship with your (last) husband (partner):
const q3List = [
  {
    label:
      "Your husband (partner) gets jealous or mad if you talk(ed) with another man",
    value: 0,
  },
  { label: "He frequently accuses you of being unfaithful", value: 1 },
  {
    label: "He prevents you from visiting or receiving visits by your friends",
    value: 2,
  },
  { label: "He tries to limit your visits/contact with your family", value: 3 },
  { label: "He insists on knowing where you go (went) at all times", value: 4 },
  { label: "He does not trust you with money", value: 5 },
];

// - Sometimes husbands/partners get upset by the things that their wives do. In your opinion, is it justified for your husband/partner to beat you in the following situations:
const q4List = [
  { label: "You leave the house without telling him", value: 0 },
  { label: "You neglect the children", value: 1 },
  { label: "You argue with him", value: 2 },
  {
    label: "You don’t want/refuse to have sexual intercourse with him",
    value: 3,
  },
  { label: "You burn the food", value: 4 },
];

// - I would like to ask you if at any time in your life your husband/life partner or any other partner with whom you were married or in a relationship with has ever done any of the following things:
const q5List = [
  {
    label: "Slapped you or threw something at you that could hurt you",
    value: 0,
  },
  { label: "Pushed you, shoved you or pulled your hair", value: 1 },
  {
    label: "Hit you with his fist or with something else that could hurt you",
    value: 2,
  },
  { label: "Kicked you, dragged you or beat you up", value: 3 },
  { label: "Tried to choke or burn you on purpose", value: 4 },
  {
    label: "Threatened to use a gun, knife, or another weapon against you",
    value: 5,
  },
];

// - Would like you to tell me whether at any time in your life your husband/life partner or any other partner that you were married to or lived with has done any of the following things:
const q6List = [
  {
    label:
      "You feel forced because of fear (of your partner) to have unwanted sexual intercourse",
    value: 0,
  },
  {
    label:
      "He used force to make you have sexual intercourse when you did not want to or make you perform sex acts that you did not approve of",
    value: 1,
  },
];

// - Please tell me whether any of the following things happened to you as a result of something that your partner (husband) did:
const q7List = [
  { label: "You had bruises and pain", value: 0 },
  {
    label:
      "You had serious injuries to your eyes, sprains, dislocations, or burns",
    value: 1,
  },
  {
    label: "You had deep wounds, broken teeth, or any other serious injury",
    value: 2,
  },
];

// - What particular situations make/made him violent? Any other situation?
const q8List = [
  { label: "No particular reason (for pleasure)", value: 0 },
  { label: "When he is drunk or under the influence of drugs", value: 1 },
  { label: "Problems with money", value: 2 },
  { label: "Problems with his work", value: 3 },
  { label: "When he is unemployed", value: 4 },
  { label: "When there is no food in the house", value: 5 },
  { label: "Problems with your  family or his", value: 6 },
  { label: "When you are pregnant", value: 7 },
  { label: "He is jealous", value: 8 },
  { label: "You refuse to have sex", value: 9 },
  { label: "You disobey", value: 10 },
  { label: "You complain", value: 11 },
];

// - When this (these) person (people) assaulted you during the past year, to whom did you go for help?
const q9List = [
  { label: "Family", value: 0 },
  { label: "Friends", value: 1 },
  { label: "Police", value: 2 },
  { label: "Telephone help lines", value: 3 },
  { label: "Shelters", value: 4 },
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

const ExperienceSurvey = (props) => {
  // Change background color
  useEffect(() => {
    document.body.style = `background: rgba(59,89,152,0.05);`;

    return () => {
      document.body.style = `background: rgb(255,255,255);`;
    };
  }, []);

  // Search for 1s in state arrays
  const searchOnes = (arr) => {
    return arr.includes(1);
  };

  // QUESTIONS' STATE
  const [q7Visibility, setQ7Visibility] = useState(false);
  const [q8Visibility, setQ8Visibility] = useState(false);

  // - I would like to ask you to tell me whether at any time in your life, any husband, partner or ex-partner has done any of the following things:
  const [q1Values, setQ1Values] = useState(new Array(q1List.length).fill(0));

  const onQ1ChangeHandler = (e) => {
    // of interest: e.target.value --> needed to be made integer (to be considered as index)
    let tmp_values = q1Values;
    const index = parseInt(e.target.value);
    let tmp = tmp_values[index];
    tmp = (tmp + 1) % 2; // update the value: if 0 -> 1, if 1 -> 0
    tmp_values[index] = tmp;
    setQ1Values(tmp_values);

    let q8vist = searchOnes([
      ...tmp_values,
      ...q1Values,
      ...q2Values,
      ...q4Values,
      ...q5Values,
      ...q6Values,
    ]);
    setQ8Visibility(q8vist);
  };

  // - I would like to ask you to tell me whether at any time in your life, any husband, partner or ex-partner has done any of the following things:
  const [q2Values, setQ2Values] = useState(new Array(q2List.length).fill(0));

  const onQ2ChangeHandler = (e) => {
    // of interest: e.target.value --> needed to be made integer (to be considered as index)
    let tmp_values = q2Values;
    const index = parseInt(e.target.value);
    let tmp = tmp_values[index];
    tmp = (tmp + 1) % 2; // update the value: if 0 -> 1, if 1 -> 0
    tmp_values[index] = tmp;
    setQ2Values(tmp_values);

    let q8vist = searchOnes([
      ...tmp_values,
      ...q1Values,
      ...q3Values,
      ...q4Values,
      ...q5Values,
      ...q6Values,
    ]);
    setQ8Visibility(q8vist);
  };

  // - Now I am going to ask you about situations that happen to some women. Please tell me whether the following statements apply to your relationship with your (last) husband (partner):
  const [q3Values, setQ3Values] = useState(new Array(q3List.length).fill(0));

  const onQ3ChangeHandler = (e) => {
    // of interest: e.target.value --> needed to be made integer (to be considered as index)
    let tmp_values = q3Values;
    const index = parseInt(e.target.value);
    let tmp = tmp_values[index];
    tmp = (tmp + 1) % 2; // update the value: if 0 -> 1, if 1 -> 0
    tmp_values[index] = tmp;
    setQ3Values(tmp_values);

    let q8vist = searchOnes([
      ...tmp_values,
      ...q1Values,
      ...q2Values,
      ...q4Values,
      ...q5Values,
      ...q6Values,
    ]);
    setQ8Visibility(q8vist);
  };

  // - Sometimes husbands/partners get upset by the things that their wives do. In your opinion, is it justified for your husband/partner to beat you in the following situations:
  const [q4Values, setQ4Values] = useState(new Array(q4List.length).fill(0));

  const onQ4ChangeHandler = (e) => {
    // of interest: e.target.value --> needed to be made integer (to be considered as index)
    let tmp_values = q4Values;
    const index = parseInt(e.target.value);
    let tmp = tmp_values[index];
    tmp = (tmp + 1) % 2; // update the value: if 0 -> 1, if 1 -> 0
    tmp_values[index] = tmp;
    setQ4Values(tmp_values);

    let q7vist = searchOnes([...tmp_values, ...q5Values, ...q6Values]);
    setQ7Visibility(q7vist);

    let q8vist = searchOnes([
      ...tmp_values,
      ...q1Values,
      ...q2Values,
      ...q3Values,
      ...q5Values,
      ...q6Values,
    ]);
    setQ8Visibility(q8vist);
  };

  // - I would like to ask you if at any time in your life your husband/life partner or any other partner with whom you were married or in a relationship with has ever done any of the following things:
  const [q5Values, setQ5Values] = useState(new Array(q5List.length).fill(0));

  const onQ5ChangeHandler = (e) => {
    // of interest: e.target.value --> needed to be made integer (to be considered as index)
    let tmp_values = q5Values;
    const index = parseInt(e.target.value);
    let tmp = tmp_values[index];
    tmp = (tmp + 1) % 2; // update the value: if 0 -> 1, if 1 -> 0
    tmp_values[index] = tmp;
    setQ5Values(tmp_values);

    let q7vist = searchOnes([...tmp_values, ...q4Values, ...q6Values]);
    setQ7Visibility(q7vist);

    let q8vist = searchOnes([
      ...tmp_values,
      ...q1Values,
      ...q2Values,
      ...q3Values,
      ...q4Values,
      ...q6Values,
    ]);
    setQ8Visibility(q8vist);
  };

  // - Would like you to tell me whether at any time in your life your husband/life partner or any other partner that you were married to or lived with has done any of the following things:
  const [q6Values, setQ6Values] = useState(new Array(q6List.length).fill(0));

  const onQ6ChangeHandler = (e) => {
    // of interest: e.target.value --> needed to be made integer (to be considered as index)
    let tmp_values = q6Values;
    const index = parseInt(e.target.value);
    let tmp = tmp_values[index];
    tmp = (tmp + 1) % 2; // update the value: if 0 -> 1, if 1 -> 0
    tmp_values[index] = tmp;
    setQ6Values(tmp_values);

    let q7vist = searchOnes([...tmp_values, ...q5Values, ...q4Values]);
    setQ7Visibility(q7vist);

    let q8vist = searchOnes([
      ...tmp_values,
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

  const onQ7ChangeHandler = (e) => {
    // of interest: e.target.value --> needed to be made integer (to be considered as index)
    let tmp_values = q7Values;
    const index = parseInt(e.target.value);
    let tmp = tmp_values[index];
    tmp = (tmp + 1) % 2; // update the value: if 0 -> 1, if 1 -> 0
    tmp_values[index] = tmp;
    setQ7Values(tmp_values);
  };

  // - What particular situations make/made him violent? Any other situation?
  const [q8Values, setQ8Values] = useState(new Array(q8List.length).fill(0));

  const onQ8ChangeHandler = (e) => {
    // of interest: e.target.value --> needed to be made integer (to be considered as index)
    let tmp_values = q8Values;
    const index = parseInt(e.target.value);
    let tmp = tmp_values[index];
    tmp = (tmp + 1) % 2; // update the value: if 0 -> 1, if 1 -> 0
    tmp_values[index] = tmp;
    setQ8Values(tmp_values);
  };

  // - When this (these) person (people) assaulted you during the past year, to whom did you go for help?
  const [q9Values, setQ9Values] = useState(new Array(q9List.length).fill(0));

  const onQ9ChangeHandler = (e) => {
    // of interest: e.target.value --> needed to be made integer (to be considered as index)
    let tmp_values = q9Values;
    const index = parseInt(e.target.value);
    let tmp = tmp_values[index];
    tmp = (tmp + 1) % 2; // update the value: if 0 -> 1, if 1 -> 0
    tmp_values[index] = tmp;
    setQ9Values(tmp_values);
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
    
    // Debugging logs
    // console.log(answers);

    // post request
    try {
      await SurveyService.submitSurvey("experience", answers);
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
  };

  return (
    <div>
      <CenterView middle={8} sides={2}>
        <div>
          <h1>Survey about your experience</h1>
          <div>
            When two people marry or live together, they usually share both good
            and bad moments. I would like to ask you some questions about your
            current and past relationships and how your husband/partner treats
            (or treated) you. I would like to assure you that your answers will
            be kept secret and that you do not have to answer any questions that
            you do not want to.
          </div>
        </div>
        <div>
          <Checkboxes
            title="I would like to ask you to tell me whether at any time in your life, any husband, partner or ex-partner has done any of the following things:"
            optionList={q1List}
            style={containerStyle}
            onChange={onQ1ChangeHandler}
          />
        </div>
        <div>
          <Checkboxes
            title="I would like to ask you to tell me whether at any time in your life, any husband, partner or ex-partner has done any of the following things:"
            optionList={q2List}
            style={containerStyle}
            onChange={onQ2ChangeHandler}
          />
        </div>
        <div>
          <Checkboxes
            title="Now I am going to ask you about situations that happen to some women. Please tell me whether the following statements apply to your relationship with your (last) husband (partner):"
            optionList={q3List}
            style={containerStyle}
            onChange={onQ3ChangeHandler}
          />
        </div>
        <div>
          <Checkboxes
            title="Sometimes husbands/partners get upset by the things that their wives do. In your opinion, is it justified for your husband/partner to beat you in the following situations:"
            optionList={q4List}
            style={containerStyle}
            onChange={onQ4ChangeHandler}
          />
        </div>
        <div>
          <Checkboxes
            title="I would like to ask you if at any time in your life your husband/life partner or any other partner with whom you were married or in a relationship with has ever done any of the following things:"
            optionList={q5List}
            style={containerStyle}
            onChange={onQ5ChangeHandler}
          />
        </div>
        <div>
          <Checkboxes
            title="Would like you to tell me whether at any time in your life your husband/life partner or any other partner that you were married to or lived with has done any of the following things:"
            optionList={q6List}
            style={containerStyle}
            onChange={onQ6ChangeHandler}
          />
        </div>
        {q7Visibility && (
          <div>
            <Checkboxes
              title="Please tell me whether any of the following things happened to you as a result of something that your partner (husband) did:"
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
                title="What particular situations make/made him violent? Any other situation?"
                optionList={q8List}
                style={containerStyle}
                onChange={onQ8ChangeHandler}
              />
            </div>
            <div>
              <Checkboxes
                title="When this (these) person (people) assaulted you during the past year, to whom did you go for help?"
                optionList={q9List}
                style={containerStyle}
                onChange={onQ9ChangeHandler}
              />
            </div>
          </div>
        )}
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

export default ExperienceSurvey;
