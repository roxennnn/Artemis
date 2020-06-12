import React, { useState } from "react";
import { Container } from "react-bootstrap";

import CenterView from "../components/CenterView";
import CitizenSignUp from "../components/CitizendSignUp";
import OrganizationSignUp from "../components/OrganizationSignUp";

import "../css/SignupPage.css";

// FORMS : https://v4-alpha.getbootstrap.com/components/forms/#textual-inputs

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
        style={{color: "blue"}}
      >
        {"<"}Back
      </a>
    </div>
  );

  return (
    <div style={{ margin: 50 }}>
      <CenterView left={userType !== "None" ? backButton : null}>
        {userType === "None" && (
          <Container>
            <h1>Sign Up</h1>
            <h2>I am a...</h2>
            <div className="center-col col" style={{ marginTop: 30 }}>
              <a
                className="btn-radius fat-btn btn btn-warning btn-lg"
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
                className="btn-radius  fat-btn btn btn-warning btn-lg"
                role="button"
                onClick={() => {
                  setUserType("Organization");
                }}
              >
                Organization
              </a>
            </div>
          </Container>
        )}
        {userType === "Citizen" && <CitizenSignUp />}
        {userType === "Organization" && <OrganizationSignUp />}
      </CenterView>
    </div>
  );
};

export default SignupPage;
