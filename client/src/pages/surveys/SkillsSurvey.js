import React, { useState, useEffect } from "react";
import CenterView from "../../components/CenterView";

import Colors from "../../constants/Colors";

import TableQuestions from "../../components/surveyComponents/TableQuestions";

// QUESTIONS' DATA

// - 1. Organising and planning work and activities
const t1 = [
  "",
  "Organise basic activities",
  "Perform administrative tasks",
  "Process payments",
  "Handle money",
  "Administer financial information",
];
const t1Title = "1. Organising and planning work and activities";
const t1Description =
  "This section is related to organisational, administrative and logistical tasks. \n\nHow familiar are you with the following activities? Please think about your hobbies, house duties and past working experiences (if any). Rate as follows:\nBeginner = I have never done this activity and I don’t have any related knowledge.\nIntermediate = I have done this activity a few times and/or I have some basic related knowledge.\nCompetent = I have done this activity sometimes and I have good related knowledge.\nProficient = I often do this activity and I have a very good related knowledge.\n ";

// - 2. General skills
const t2 = [
  "Perform cleaning",
  "Activities (at home)",
  "Perform cleaning activities in an environment beyond home",
  "Perform basic first aid",
  "Acs as a leader",
  "Work under pressure",
  "Work in a team",
  "Drive a car",
];
const t2Title = "2. General skills";
const t2Description =
  "This section relates to general skills such as working in a team, acting as a leader but also some practical skills such as cleaning.\n\nHow familiar are you with the following activities? Please think about your hobbies, house duties and past working experiences (if any). Rate as follows:\nBeginner = I have never done this activity and I don’t have any related knowledge.\nIntermediate = I have done this activity a few times and/or I have some basic related knowledge.\nCompetent = I have done this activity sometimes and I have good related knowledge.\nProficient = I often do this activity and I have a very good related knowledge.\n ";

// - 3. Preparing and serving food and drinks
const t3 = [
  "Conduct basic food preparation",
  "Cook meat and fish",
  "Cook vegetables and dairy products",
  "Cook pasta",
  "Prepare desserts such as pastries",
  "Prepare fish for cooking",
  "Prepare sandwiches",
  "Prepare drinks such as cocktails or speciality coffees",
  "Present food in an appealing manner",
  "Understand diets and nutritional properties of food",
  "Keep a clean kitchen",
  "Maintain cooking equipment",
  "Operate cooking equipment",
  "Greet guests",
  "Serve food and drinks",
  "Work with recipes",
  "Store food safely",
];
const t3Title = "3. Preparing and serving food and drinks";
const t3Description =
  "This section is related to food and drinks and relates to preparing, serving, and other aspects related to food and drink.\n\nHow familiar are you with the following activities? Please think about your hobbies, house duties and past working experiences (if any). Rate as follows:\nBeginner = I have never done this activity and I don’t have any related knowledge.\nIntermediate = I have done this activity a few times and/or I have some basic related knowledge.\nCompetent = I have done this activity sometimes and I have good related knowledge.\nProficient = I often do this activity and I have a very good related knowledge.\n ";

// - 4. Provide beauty care
const t4 = [
  "Apply make-up",
  "Perform nail care treatments",
  "Perform skin care",
  "Treatments",
  "Remove body hair",
  "Give massages",
  "Wash and style hair",
  "Cur, perm and colour hair",
  "Treat minor problems with the hair or scalp",
];
const t4Title = "4. Provide beauty care";
const t4Description =
  "This section is related to beauty care, and includes skin care, cosmetics and hair care.\n\nHow familiar are you with the following activities? Please think about your hobbies, house duties and past working experiences (if any). Rate as follows:\nBeginner = I have never done this activity and I don’t have any related knowledge.\nIntermediate = I have done this activity a few times and/or I have some basic related knowledge.\nCompetent = I have done this activity sometimes and I have good related knowledge.\nProficient = I often do this activity and I have a very good related knowledge.\n ";

// - 5. Providing information and support to others
const t5 = [
  "Provide information and give instructions",
  "Write information in a clear way",
  "Collect information",
  "Understand and answer technical questions",
  "Understand and follow guidelines",
  "Assist people and give advice",
  "Guide tourists or other visitors",
  "Be familiar with the local culture",
  "Assist guests during events",
  "Plan and organise activities for guests",
  "Manage groups of people",
  "Assist people with mobility",
  "Maintain good public relations",
  "Interpret and respond adequately to people's emotions",
  "Speak more than one language",
];
const t5Title = "5. Providing information and support to others";
const t5Description =
  "This section focuses on providing information to people, understanding others’ needs and maintaining good relations.\n\nHow familiar are you with the following activities? Please think about your hobbies, house duties and past working experiences (if any). Rate as follows:\nBeginner = I have never done this activity and I don’t have any related knowledge.\nIntermediate = I have done this activity a few times and/or I have some basic related knowledge.\nCompetent = I have done this activity sometimes and I have good related knowledge.\nProficient = I often do this activity and I have a very good related knowledge.\n ";

// - 6. Assist people with children, people with special needs and elderly
const t6 = [
  "Provide general care and assistance to children",
  "Assist children in learning",
  "Provide school assistance",
  "Help children with special learning difficulties",
  "Help children to resolve personal, psychological, or social problems",
  "Run domestic care activities",
  "Assist people with disabilities",
  "Assist elderly people",
];
const t6Title =
  "6. Assist people with children, people with special needs and elderly";
const t6Description =
  "This section includes activities to help and support children, people with special needs and elderly.\n\nHow familiar are you with the following activities? Please think about your hobbies, house duties and past working experiences (if any). Rate as follows:\nBeginner = I have never done this activity and I don’t have any related knowledge.\nIntermediate = I have done this activity a few times and/or I have some basic related knowledge.\nCompetent = I have done this activity sometimes and I have good related knowledge.\nProficient = I often do this activity and I have a very good related knowledge.\n ";


const SkillsSurvey = (props) => {
  // Change background color
  useEffect(() => {
    document.body.style = `background: rgba(59,89,152,0.05);`;

    return () => {
      document.body.style = `background: rgb(255,255,255);`;
    };
  }, []);

  // QUESTIONS's STATE

  // - 1.
  const [t1Value, setT1Value] = useState(new Array(t1.length - 1).fill(0));
  const [t1Error, setT1Error] = useState(false);

  const t1Handler = (e) => {
    const index = e.target.id - 1;
    let tmp = t1Value;
    tmp[index] = parseInt(e.target.value);
    setT1Value(tmp);

    console.log(t1Value);
  };

  // - 2.
  const [t2Value, setT2Value] = useState(new Array(t2.length - 1).fill(0));
  const [t2Error, setT2Error] = useState(false);

  const t2Handler = (e) => {
    const index = e.target.id - 1;
    let tmp = t2Value;
    tmp[index] = parseInt(e.target.value);
    setT2Value(tmp);

    console.log(t2Value);
  };

  // - 3.
  const [t3Value, setT3Value] = useState(new Array(t3.length - 1).fill(0));
  const [t3Error, setT3Error] = useState(false);

  const t3Handler = (e) => {
    const index = e.target.id - 1;
    let tmp = t3Value;
    tmp[index] = parseInt(e.target.value);
    setT3Value(tmp);

    console.log(t3Value);
  };

  // - 4.
  const [t4Value, setT4Value] = useState(new Array(t4.length - 1).fill(0));
  const [t4Error, setT4Error] = useState(false);

  const t4Handler = (e) => {
    const index = e.target.id - 1;
    let tmp = t4Value;
    tmp[index] = parseInt(e.target.value);
    setT4Value(tmp);

    console.log(t4Value);
  };

  // - 5.
  const [t5Value, setT5Value] = useState(new Array(t5.length - 1).fill(0));
  const [t5Error, setT5Error] = useState(false);

  const t5Handler = (e) => {
    const index = e.target.id - 1;
    let tmp = t5Value;
    tmp[index] = parseInt(e.target.value);
    setT5Value(tmp);

    console.log(t5Value);
  };

  // - 6.
  const [t6Value, setT6Value] = useState(new Array(t6.length - 1).fill(0));
  const [t6Error, setT6Error] = useState(false);

  const t6Handler = (e) => {
    const index = e.target.id - 1;
    let tmp = t6Value;
    tmp[index] = parseInt(e.target.value);
    setT6Value(tmp);

    console.log(t6Value);
  };

  // SUBMIT button
  const onSubmit = () => {
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
      // submit
      console.log("TODO");
      // props.setSurveyDone();
      // props.history.push("/profile");
      props.history.push({
        pathname: "/profile",
        state: {
          from: true,
        },
      });
    } else {
      // red border
      // actually don't need to do anything
      console.log("Some errors found");
    }
  };

  return (
    <div>
      <CenterView middle={10} sides={1}>
        <div>
          <h1>Skills survey</h1>
        </div>
        <div>
          <TableQuestions
            title={t1Title}
            description={t1Description}
            optionList={t1}
            value={t1Value}
            onChange={t1Handler}
            error={t1Error}
          />
        </div>
        <div>
          <TableQuestions
            title={t2Title}
            description={t2Description}
            optionList={t2}
            value={t2Value}
            onChange={t2Handler}
            error={t2Error}
          />
        </div>
        <div>
          <TableQuestions
            title={t3Title}
            description={t3Description}
            optionList={t3}
            value={t3Value}
            onChange={t3Handler}
            error={t3Error}
          />
        </div>
        <div>
          <TableQuestions
            title={t4Title}
            description={t4Description}
            optionList={t4}
            value={t4Value}
            onChange={t4Handler}
            error={t4Error}
          />
        </div>
        <div>
          <TableQuestions
            title={t5Title}
            description={t5Description}
            optionList={t5}
            value={t5Value}
            onChange={t5Handler}
            error={t5Error}
          />
        </div>
        <div>
          <TableQuestions
            title={t6Title}
            description={t6Description}
            optionList={t6}
            value={t6Value}
            onChange={t6Handler}
            error={t6Error}
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

export default SkillsSurvey;
