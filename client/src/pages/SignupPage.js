import React, { useState } from "react";
import { Container } from "react-bootstrap";

import CenterView from "../components/CenterView";
import CitizenSignUp from "../components/CitizenSignUp";
import OrganizationSignUp from "../components/OrganizationSignUp";

import Colors from "../constants/Colors";

import "../css/SignupPage.css";

// FORMS : https://v4-alpha.getbootstrap.com/components/forms/#textual-inputs

const styles = {
  buttons: {
    background: Colors.gradient,
    backgroundColor: Colors.primary,
    color: Colors.accent,
    margin: 10,
    maxWidth: 300
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
            <div className="center-col col" style={{ marginTop: 30 }}>
              <a
                className="btn-radius btn"
                style={styles.buttons}
                role="button"
                onClick={() => {
                  setUserType("Citizen");
                }}
              >
                Citizen
              </a>
            </div>
            <div className="center-col col" style={{ marginTop: 30 }}>
              <a
                className="btn-radius btn"
                role="button"
                onClick={() => {
                  setUserType("Organization");
                }}
                style={styles.buttons}
              >
                Organization
              </a>
            </div>
          </Container>
        )}
        {userType === "Citizen" && <CitizenSignUp history={props.history} />}
        {userType === "Organization" && (
          <OrganizationSignUp history={props.history} />
        )}
      </CenterView>
    </div>
  );
};

export default SignupPage;
