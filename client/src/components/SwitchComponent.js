import React from "react";
import { Switch, Route } from "react-router-dom";

import SignupPage from "../pages/SignupPage";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import TodoPage from "../pages/TodoPage";
import LandingPage from "../pages/LandingPage";

// Surveys
import DemographicSurvey from "../pages/surveys/DemographicSurvey";
import ExperienceSurvey from "../pages/surveys/ExperienceSurvey";
import SkillsSurvey from "../pages/surveys/SkillsSurvey";

import OccupationDetailPage from "../pages/OccupationDetailPage";

// Learn More
import LearnMorePage from "../pages/LearnMorePage";
import HowToUseItPage from "../pages/learnMore/HowToUseItPage";

const SwitchComponent = (props) => {
  return (
    <div>
      <Switch>
        <Route exact path={["/", "/home"]} component={LandingPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/learn-more" component={LearnMorePage} />
        <Route exact path="/learn-more/how-to-use-it" component={HowToUseItPage} />
        <Route exact path="/faq" component={TodoPage} />
        <Route exact path="/forum" component={TodoPage} />
        <Route exact path="/todo" component={TodoPage} />
        <Route exact path="/consult-database" component={TodoPage} />
        
        <Route exact path="/profile/demographic-survey" component={DemographicSurvey} />
        <Route exact path="/profile/experience-survey" component={ExperienceSurvey} />
        <Route exact path="/profile/skills-survey" component={SkillsSurvey} />
        <Route exact path="/profile/occupation-detail" component={OccupationDetailPage} />
      </Switch>
    </div>
  );
};

export default SwitchComponent;
