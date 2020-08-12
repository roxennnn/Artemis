import React, { useState, useContext } from "react";
import { Container } from "react-bootstrap";

import CenterView from "../components/CenterView";
import CitizenSignUp from "../components/CitizenSignUp";
import OrganisationSignUp from "../components/OrganisationSignUp";
import PrimaryButton from "../components/PrimaryButton";

import { LanguageContext } from "../languages/LanguageProvider";

import "../css/SignupPage.css";
import BackButton from "../components/BackButton";

const styles = {
  buttons: {
    margin: 10,
    maxWidth: 300,
  },
};

const SignupPage = (props) => {
  const { strings } = useContext(LanguageContext);
  const [userType, setUserType] = useState("None");

  return (
    <div style={{ margin: 50 }}>
      <CenterView
        left={
          userType !== "None" ? (
            <BackButton
              onClick={() => {
                setUserType("None");
              }}
              label={strings.back && strings.back}
            />
          ) : null
        }
        middle={8}
        sides={2}
      >
        {userType === "None" && (
          <Container>
            <h3>{strings.SignupPage && strings.SignupPage.registerForFree}</h3>
            <br />
            <h4>{strings.SignupPage && strings.SignupPage.areYouA}</h4>
            <PrimaryButton
              label={strings.SignupPage && strings.SignupPage.citizen}
              style={{ marginTop: 30 }}
              buttonStyle={styles.buttons}
              onClick={() => {
                setUserType("Citizen");
              }}
            />
            <PrimaryButton
              label={strings.SignupPage && strings.SignupPage.organisation}
              style={{ marginTop: 30 }}
              buttonStyle={styles.buttons}
              onClick={() => {
                setUserType("Organisation");
              }}
            />
          </Container>
        )}
        {userType === "Citizen" && (
          <CitizenSignUp history={props.history} strings={strings} />
        )}
        {userType === "Organisation" && (
          <OrganisationSignUp history={props.history} strings={strings} />
        )}
      </CenterView>
    </div>
  );
};

export default SignupPage;
