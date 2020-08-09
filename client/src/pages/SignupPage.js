import React, { useState } from "react";
import { Container } from "react-bootstrap";

import CenterView from "../components/CenterView";
import CitizenSignUp from "../components/CitizenSignUp";
import OrganizationSignUp from "../components/OrganizationSignUp";
import PrimaryButton from "../components/PrimaryButton";

import Colors from "../constants/Colors";

import "../css/SignupPage.css";

// FORMS : https://v4-alpha.getbootstrap.com/components/forms/#textual-inputs

const styles = {
  buttons: {
    margin: 10,
    maxWidth: 300,
  },
};

const SignupPage = (props) => {
  const [userType, setUserType] = useState("None");

  const backButton = (
    <div>
      <a
        // className="btn-radius fat-btn btn btn-warning btn-lg"
        role="button"
        onClick={() => {
          setUserType("None");
        }}
        style={{ color: Colors.primary }}
      >
        {"<"}Back
      </a>
    </div>
  );

  return (
    <div style={{ margin: 50 }}>
      <CenterView
        left={userType !== "None" ? backButton : null}
        middle={8}
        sides={2}
      >
        {userType === "None" && (
          <Container>
            <h1>Sign Up</h1>
            <h2>I am a...</h2>
            <PrimaryButton
              label="Citizen"
              style={{ marginTop: 30 }}
              buttonStyle={styles.buttons}
              onClick={() => {
                setUserType("Citizen");
              }}
            />
            <PrimaryButton
              label="Organisation"
              style={{ marginTop: 30 }}
              buttonStyle={styles.buttons}
              onClick={() => {
                setUserType("Organisation");
              }}
            />
          </Container>
        )}
        {userType === "Citizen" && <CitizenSignUp history={props.history} />}
        {userType === "Organisation" && (
          <OrganizationSignUp history={props.history} />
        )}
      </CenterView>
    </div>
  );
};

export default SignupPage;
