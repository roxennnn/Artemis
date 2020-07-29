import React from "react";
import { Switch, Route } from "react-router-dom";

// import HomePage from "../pages/HomePage";
import SignupPage from "../pages/SignupPage";
import LoginPage from "../pages/LoginPage";
import AboutPage from "../pages/AboutPage";
import LearnMorePage from "../pages/LearnMorePage";
import ProfilePage from "../pages/ProfilePage";
import FaqPage from "../pages/FaqPage";
import ConsultDatabasePage from "../pages/ConsultDatabasePage";
import ForumPage from "../pages/ForumPage";
import TodoPage from "../pages/TodoPage";
import LandingPage from "../pages/LandingPage";
import TEMPSurvey from "../pages/TEMPSurvey";

import DemographicSurvey from "../pages/surveys/DemographicSurvey";
import ExperienceSurvey from "../pages/surveys/ExperienceSurvey";

const SwitchComponent = (props) => {
  return (
    <div className="" style={{margin: "2%"}}>
      <Switch>
        <Route exact path={["/", "/home"]} component={LandingPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/learn-more" component={LearnMorePage} />
        <Route exact path="/faq" component={FaqPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/forum" component={ForumPage} />
        <Route exact path="/todo" component={TodoPage} />
        <Route exact path="/consult-database" component={ConsultDatabasePage} />
        <Route exact path="/survey" component={TEMPSurvey} />
        {/* <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} /> */}
        <Route exact path="/profile/demographic-survey" component={DemographicSurvey} />
        <Route exact path="/profile/experience-survey" component={ExperienceSurvey} />
      </Switch>
    </div>
  );
};

export default SwitchComponent;
