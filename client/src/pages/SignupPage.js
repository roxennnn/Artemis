import React, { useState, useContext, useEffect } from "react";
import { Container } from "react-bootstrap";

import CenterView from "../components/CenterView";
import CitizenSignUp from "../components/CitizenSignUp";
import OrganisationSignUp from "../components/OrganisationSignUp";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../constants/Colors";

import { LanguageContext } from "../languages/LanguageProvider";

import BackButton from "../components/BackButton";
import LoginComponent from "../components/LoginComponent";

const styles = {
  buttons: {
    margin: 10,
    maxWidth: 300,
  },
};

const SignupPage = (props) => {
  const { strings, language, updateLanguage } = useContext(LanguageContext);
  const [userType, setUserType] = useState("None");

  const fetchLanguage = async () => {
    const lang = await localStorage.getItem("language");
    updateLanguage(lang);
  };

  useEffect(() => {
    fetchLanguage();
  }, []);

  return (
    <div style={{ margin: "3%" }}>
      <CenterView
        left={
          userType !== "None" ? (
            <BackButton
              onClick={() => {
                setUserType("None");
              }}
              label={
                userType === "Citizen"
                  ? strings.SignupPage && strings.SignupPage.notAWoman
                  : userType === "Organisation"
                  ? strings.SignupPage && strings.SignupPage.notAnOrganisation
                  : strings.back && strings.back
              }
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
          <CitizenSignUp
            history={props.history}
            strings={strings}
            onChangeUserType={setUserType}
          />
        )}
        {userType === "Organisation" && (
          <OrganisationSignUp
            history={props.history}
            strings={strings}
            onChangeUserType={setUserType}
          />
        )}
        {userType.split("-")[0] === "Login" && (
          <div>
            <h3>Login</h3>
            <LoginComponent
              history={props.history}
              strings={strings}
              show={true}
              language={language}
            />
            <div
              className="hover-underline"
              style={{
                textAlign: "center",
                marginTop: "2%",
                color: Colors.primary,
                fontSize: 20,
              }}
              onClick={() => {
                setUserType(userType.split("-")[1]);
              }}
            >
              {strings.SignupPage && strings.SignupPage.signupQuestion}{" "}
            </div>
          </div>
        )}
      </CenterView>
    </div>
  );
};

export default SignupPage;
