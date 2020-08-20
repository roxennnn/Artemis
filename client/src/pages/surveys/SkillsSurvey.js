import React, { useState, useEffect, useContext } from "react";
import CenterView from "../../components/CenterView";

import PrimaryButton from "../../components/PrimaryButton";
import BackButton from "../../components/BackButton";

import SurveyService from "../../services/survey.service";

import TableQuestions from "../../components/surveyComponents/TableQuestions";

import { LanguageContext } from "../../languages/LanguageProvider";

const SkillsSurvey = (props) => {
  const { strings, language } = useContext(LanguageContext);
  const [submitError, setSubmitError] = useState(false);

  // Change background color
  useEffect(() => {
    document.body.style = `background: rgba(59,89,152,0.05);`;

    return () => {
      document.body.style = `background: rgb(255,255,255);`;
    };
  }, []);

  // QUESTIONS' DATA

  // - 1. Organising and planning work and activities
  const t1 = strings.Profile
    ? [
        "",
        strings.Profile.ProfileSurveys.SkillsSurvey.categories[0],
        strings.Profile.ProfileSurveys.SkillsSurvey.categories[1],
        strings.Profile.ProfileSurveys.SkillsSurvey.categories[2],
        strings.Profile.ProfileSurveys.SkillsSurvey.categories[3],
        strings.Profile.ProfileSurveys.SkillsSurvey.categories[4],
      ]
    : [""];

  // - 2. General skills
  const t2 = strings.Profile
    ? [
        "",
        strings.Profile.ProfileSurveys.SkillsSurvey.categories[5],
        strings.Profile.ProfileSurveys.SkillsSurvey.categories[6],
        strings.Profile.ProfileSurveys.SkillsSurvey.categories[7],
        strings.Profile.ProfileSurveys.SkillsSurvey.categories[8],
        strings.Profile.ProfileSurveys.SkillsSurvey.categories[9],
        strings.Profile.ProfileSurveys.SkillsSurvey.categories[10],
        strings.Profile.ProfileSurveys.SkillsSurvey.categories[11],
      ]
    : [""];

  // - 3. Preparing and serving food and drinks
  const t3 = strings.Profile
    ? [
        "",
        strings.Profile.ProfileSurveys.SkillsSurvey.categories[12],
        strings.Profile.ProfileSurveys.SkillsSurvey.categories[13],
        strings.Profile.ProfileSurveys.SkillsSurvey.categories[14],
        strings.Profile.ProfileSurveys.SkillsSurvey.categories[15],
        strings.Profile.ProfileSurveys.SkillsSurvey.categories[16],
        strings.Profile.ProfileSurveys.SkillsSurvey.categories[17],
        strings.Profile.ProfileSurveys.SkillsSurvey.categories[18],
        strings.Profile.ProfileSurveys.SkillsSurvey.categories[19],
        strings.Profile.ProfileSurveys.SkillsSurvey.categories[20],
        strings.Profile.ProfileSurveys.SkillsSurvey.categories[21],
        strings.Profile.ProfileSurveys.SkillsSurvey.categories[22],
        strings.Profile.ProfileSurveys.SkillsSurvey.categories[23],
        strings.Profile.ProfileSurveys.SkillsSurvey.categories[24],
        strings.Profile.ProfileSurveys.SkillsSurvey.categories[25],
        strings.Profile.ProfileSurveys.SkillsSurvey.categories[26],
        strings.Profile.ProfileSurveys.SkillsSurvey.categories[27],
        strings.Profile.ProfileSurveys.SkillsSurvey.categories[28],
      ]
    : [""];

  // - 4. Provide beauty care
  const t4 = strings.Profile
    ? [
        "",
        strings.Profile.ProfileSurveys.SkillsSurvey.categories[29],
        strings.Profile.ProfileSurveys.SkillsSurvey.categories[30],
        strings.Profile.ProfileSurveys.SkillsSurvey.categories[31],
        strings.Profile.ProfileSurveys.SkillsSurvey.categories[32],
        strings.Profile.ProfileSurveys.SkillsSurvey.categories[33],
        strings.Profile.ProfileSurveys.SkillsSurvey.categories[34],
        strings.Profile.ProfileSurveys.SkillsSurvey.categories[35],
        strings.Profile.ProfileSurveys.SkillsSurvey.categories[36],
      ]
    : [""];

  // - 5. Providing information and support to others
  const t5 = strings.Profile
    ? [
        "",
        strings.Profile.ProfileSurveys.SkillsSurvey.categories[37],
        strings.Profile.ProfileSurveys.SkillsSurvey.categories[38],
        strings.Profile.ProfileSurveys.SkillsSurvey.categories[39],
        strings.Profile.ProfileSurveys.SkillsSurvey.categories[40],
        strings.Profile.ProfileSurveys.SkillsSurvey.categories[41],
        strings.Profile.ProfileSurveys.SkillsSurvey.categories[42],
        strings.Profile.ProfileSurveys.SkillsSurvey.categories[43],
        strings.Profile.ProfileSurveys.SkillsSurvey.categories[44],
        strings.Profile.ProfileSurveys.SkillsSurvey.categories[45],
        strings.Profile.ProfileSurveys.SkillsSurvey.categories[46],
        strings.Profile.ProfileSurveys.SkillsSurvey.categories[47],
        strings.Profile.ProfileSurveys.SkillsSurvey.categories[48],
        strings.Profile.ProfileSurveys.SkillsSurvey.categories[49],
        strings.Profile.ProfileSurveys.SkillsSurvey.categories[50],
        strings.Profile.ProfileSurveys.SkillsSurvey.categories[51],
      ]
    : [""];

  // - 6. Assist people with children, people with special needs and elderly
  const t6 = strings.Profile
    ? [
        "",
        strings.Profile.ProfileSurveys.SkillsSurvey.categories[52],
        strings.Profile.ProfileSurveys.SkillsSurvey.categories[53],
        strings.Profile.ProfileSurveys.SkillsSurvey.categories[54],
        strings.Profile.ProfileSurveys.SkillsSurvey.categories[55],
        strings.Profile.ProfileSurveys.SkillsSurvey.categories[56],
        strings.Profile.ProfileSurveys.SkillsSurvey.categories[57],
        strings.Profile.ProfileSurveys.SkillsSurvey.categories[58],
        strings.Profile.ProfileSurveys.SkillsSurvey.categories[59],
      ]
    : [""];

  // QUESTIONS's STATE

  // - 1.
  const [t1Value, setT1Value] = useState(new Array(t1.length - 1).fill(0));
  const [t1Error, setT1Error] = useState(false);

  const t1Handler = (e) => {
    const index = e.target.id - 1;
    let tmp = t1Value;
    tmp[index] = parseInt(e.target.value);
    setT1Value(tmp);
  };

  // - 2.
  const [t2Value, setT2Value] = useState(new Array(t2.length - 1).fill(0));
  const [t2Error, setT2Error] = useState(false);

  const t2Handler = (e) => {
    const index = e.target.id - 1;
    let tmp = t2Value;
    tmp[index] = parseInt(e.target.value);
    setT2Value(tmp);
  };

  // - 3.
  const [t3Value, setT3Value] = useState(new Array(t3.length - 1).fill(0));
  const [t3Error, setT3Error] = useState(false);

  const t3Handler = (e) => {
    const index = e.target.id - 1;
    let tmp = t3Value;
    tmp[index] = parseInt(e.target.value);
    setT3Value(tmp);
  };

  // - 4.
  const [t4Value, setT4Value] = useState(new Array(t4.length - 1).fill(0));
  const [t4Error, setT4Error] = useState(false);

  const t4Handler = (e) => {
    const index = e.target.id - 1;
    let tmp = t4Value;
    tmp[index] = parseInt(e.target.value);
    setT4Value(tmp);
  };

  // - 5.
  const [t5Value, setT5Value] = useState(new Array(t5.length - 1).fill(0));
  const [t5Error, setT5Error] = useState(false);

  const t5Handler = (e) => {
    const index = e.target.id - 1;
    let tmp = t5Value;
    tmp[index] = parseInt(e.target.value);
    setT5Value(tmp);
  };

  // - 6.
  const [t6Value, setT6Value] = useState(new Array(t6.length - 1).fill(0));
  const [t6Error, setT6Error] = useState(false);

  const t6Handler = (e) => {
    const index = e.target.id - 1;
    let tmp = t6Value;
    tmp[index] = parseInt(e.target.value);
    setT6Value(tmp);
  };

  // To fix empty arrays error
  useEffect(() => {
    setT1Value(new Array(t1.length - 1).fill(0));
    setT2Value(new Array(t2.length - 1).fill(0));
    setT3Value(new Array(t3.length - 1).fill(0));
    setT4Value(new Array(t4.length - 1).fill(0));
    setT5Value(new Array(t5.length - 1).fill(0));
    setT6Value(new Array(t6.length - 1).fill(0));
  }, [strings]);

  // SUBMIT button
  const onSubmit = async () => {
    setSubmitError(false);

    // Check if values are set
    let noErrors = true;

    if (t1Value.includes(0)) {
      setT1Error(true);
      noErrors = false;
    } else {
      setT1Error(false);
    }

    if (t2Value.includes(0)) {
      setT2Error(true);
      noErrors = false;
    } else {
      setT2Error(false);
    }

    if (t3Value.includes(0)) {
      setT3Error(true);
      noErrors = false;
    } else {
      setT3Error(false);
    }

    if (t4Value.includes(0)) {
      setT4Error(true);
      noErrors = false;
    } else {
      setT4Error(false);
    }

    if (t5Value.includes(0)) {
      setT5Error(true);
      noErrors = false;
    } else {
      setT5Error(false);
    }

    if (t6Value.includes(0)) {
      setT6Error(true);
      noErrors = false;
    } else {
      setT6Error(false);
    }

    // Final check:
    if (noErrors) {
      // Debugging logs
      // console.log(`t1Value: ${t1Value}`);
      // console.log(`t2Value: ${t2Value}`);
      // console.log(`t3Value: ${t3Value}`);
      // console.log(`t4Value: ${t4Value}`);
      // console.log(`t5Value: ${t5Value}`);
      // console.log(`t6Value: ${t6Value}`);

      // STEPS:
      // - make array
      const answers = [
        ...t1Value,
        ...t2Value,
        ...t3Value,
        ...t4Value,
        ...t5Value,
        ...t6Value,
      ];
      // Debugging logs
      // console.log(answers);

      // post request
      try {
        await SurveyService.submitSurvey("skills", answers);
        // Go back to profile page
        props.history.push({
          pathname: "/profile",
          state: {
            from: true,
            to: 0,
          },
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      setSubmitError(true);
      // red border
      // actually don't need to do anything
      console.log("Some errors found");
    }
  };

  return (
    <div style={{ margin: "2%" }}>
      <CenterView
        middle={10}
        sides={1}
        left={
          <BackButton
            onClick={() => {
              props.history.push({
                pathname: "/profile",
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
              strings.Profile.ProfileSurveys.SkillsSurvey.title}
          </h3>
          <div>
            {strings.Profile &&
              strings.Profile.ProfileSurveys.SkillsSurvey.introduction}
          </div>
        </div>
        <div>
          <TableQuestions
            title={
              strings.Profile &&
              strings.Profile.ProfileSurveys.SkillsSurvey.t1.title
            }
            description={
              strings.Profile &&
              strings.Profile.ProfileSurveys.SkillsSurvey.t1.description
            }
            optionList={t1}
            value={t1Value}
            onChange={t1Handler}
            error={t1Error}
            errorMessage={
              strings.Profile &&
              strings.Profile.ProfileSurveys.youMustAnswerToThisQuestion
            }
            language={language}
          />
        </div>
        <div>
          <TableQuestions
            title={
              strings.Profile &&
              strings.Profile.ProfileSurveys.SkillsSurvey.t2.title
            }
            description={
              strings.Profile &&
              strings.Profile.ProfileSurveys.SkillsSurvey.t2.description
            }
            optionList={t2}
            value={t2Value}
            onChange={t2Handler}
            error={t2Error}
            errorMessage={
              strings.Profile &&
              strings.Profile.ProfileSurveys.youMustAnswerToThisQuestion
            }
            language={language}
          />
        </div>
        <div>
          <TableQuestions
            title={
              strings.Profile &&
              strings.Profile.ProfileSurveys.SkillsSurvey.t3.title
            }
            description={
              strings.Profile &&
              strings.Profile.ProfileSurveys.SkillsSurvey.t3.description
            }
            optionList={t3}
            value={t3Value}
            onChange={t3Handler}
            error={t3Error}
            errorMessage={
              strings.Profile &&
              strings.Profile.ProfileSurveys.youMustAnswerToThisQuestion
            }
            language={language}
          />
        </div>
        <div>
          <TableQuestions
            title={
              strings.Profile &&
              strings.Profile.ProfileSurveys.SkillsSurvey.t4.title
            }
            description={
              strings.Profile &&
              strings.Profile.ProfileSurveys.SkillsSurvey.t4.description
            }
            optionList={t4}
            value={t4Value}
            onChange={t4Handler}
            error={t4Error}
            errorMessage={
              strings.Profile &&
              strings.Profile.ProfileSurveys.youMustAnswerToThisQuestion
            }
            language={language}
          />
        </div>
        <div>
          <TableQuestions
            title={
              strings.Profile &&
              strings.Profile.ProfileSurveys.SkillsSurvey.t5.title
            }
            description={
              strings.Profile &&
              strings.Profile.ProfileSurveys.SkillsSurvey.t5.description
            }
            optionList={t5}
            value={t5Value}
            onChange={t5Handler}
            error={t5Error}
            errorMessage={
              strings.Profile &&
              strings.Profile.ProfileSurveys.youMustAnswerToThisQuestion
            }
            language={language}
          />
        </div>
        <div>
          <TableQuestions
            title={
              strings.Profile &&
              strings.Profile.ProfileSurveys.SkillsSurvey.t6.title
            }
            description={
              strings.Profile &&
              strings.Profile.ProfileSurveys.SkillsSurvey.t6.description
            }
            optionList={t6}
            value={t6Value}
            onChange={t6Handler}
            error={t6Error}
            errorMessage={
              strings.Profile &&
              strings.Profile.ProfileSurveys.youMustAnswerToThisQuestion
            }
            language={language}
          />
        </div>
      </CenterView>
      {submitError && (
        <div
          style={{
            color: "red",
            textAlign: "center",
            fontSize: 16,
            marginTop: "0.5%",
            marginBottom: "0.5%",
          }}
        >
          You must answer to all the questions!
        </div>
      )}
      <PrimaryButton
        label={
          strings.Profile &&
          strings.Profile.ProfileSurveys.ExperienceSurvey.submit
        }
        onClick={onSubmit}
        buttonStyle={{ width: "10%" }}
      />
    </div>
  );
};

export default SkillsSurvey;
