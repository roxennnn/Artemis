import React, { useContext, useState, useEffect } from "react";

import AuthService from "../services/auth.service";

import Colors from "../constants/Colors";
import PrimaryButton from "../components/PrimaryButton";

import { LanguageContext } from "../languages/LanguageProvider";

const LandingPage = (props) => {
  const { strings, language } = useContext(LanguageContext);
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const learnMoreClickHandler = (e) => {
    localStorage.setItem("language", language);
    // props.history.push(`/learn-more/how-to-use-it#${e.target.id}`);
    props.history.push(`/learn-more/how-to-use-it`);
  };

  return (
    <div style={{ backgroundColor: Colors.landingPageInfographics }}>
      {currentUser && (
        <img
          style={{
            width: "100%",
          }}
          alt=""
          src={require(`../images/${language}/Home/homeBanner.png`)}
        />
      )}

      <div>
        {!currentUser && (
          <img
            style={{
              width: "100%",
              paddingTop: "3%",
            }}
            alt=""
            src={require(`../images/en/Home/homeRegister.png`)}
          />
        )}
      </div>
      <img
        style={{
          width: "100%",
        }}
        alt=""
        src={require(`../images/en/Home/homeLearnMore1.png`)}
      />
      <div
        style={{
          backgroundColor: Colors.landingPageInfographics,
          marginRight: "30%",
        }}
      >
        <PrimaryButton
          label={strings.LandingPage && strings.LandingPage.learnMore}
          buttonStyle={{ width: "10%" }}
          style={{ display: "flex", justifyContent: "flex-end" }}
          onClick={learnMoreClickHandler}
          id="woman"
        />
      </div>
      <div>
        <img
          style={{
            width: "100%",
          }}
          alt=""
          src={require(`../images/en/Home/homeLearnMore2.png`)}
        />
        <PrimaryButton
          label={strings.LandingPage && strings.LandingPage.learnMore}
          buttonStyle={{ width: "10%" }}
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            bottom: currentUser ? -1340 : -1390,
            left: -574,
            zIndex: 100,
          }}
          id="organisation"
          onClick={learnMoreClickHandler}
        />
      </div>

      {/* </div */}
    </div>
  );
};

export default LandingPage;
