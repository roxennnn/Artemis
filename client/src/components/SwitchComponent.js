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
// import TEMPSurvey from "../pages/TEMPSurvey";

// Surveys
import DemographicSurvey from "../pages/surveys/DemographicSurvey";
import ExperienceSurvey from "../pages/surveys/ExperienceSurvey";
import SkillsSurvey from "../pages/surveys/SkillsSurvey";
import OccupationDetailPage from "../pages/OccupationDetailPage";

const SwitchComponent = (props) => {
  return (
    <div style={{margin: "2%"}}>
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
        {/* <Route exact path="/survey" component={TEMPSurvey} /> */}
        
        <Route exact path="/profile/demographic-survey" component={DemographicSurvey} />
        <Route exact path="/profile/experience-survey" component={ExperienceSurvey} />
        <Route exact path="/profile/skills-survey" component={SkillsSurvey} />
        <Route exact path="/profile/occupation-detail" component={OccupationDetailPage} />
      </Switch>
    </div>
  );
};

export default SwitchComponent;
