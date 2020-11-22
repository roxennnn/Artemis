import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignupPage from '../pages/SignupPage';
import ProfilePage from '../pages/ProfilePage';
import TodoPage from '../pages/TodoPage';
import LandingPage from '../pages/LandingPage';
import OrganisationPage from '../pages/OrganisationPage';

// Surveys
import DemographicSurvey from '../pages/surveys/DemographicSurvey';
import DomesticSurvey from '../pages/surveys/DomesticSurvey';
import SkillsSurvey from '../pages/surveys/SkillsSurvey';

import OccupationDetailPage from '../pages/OccupationDetailPage';

// Learn More
import HowToUseItPage from '../pages/learnMore/HowToUseItPage';
import { FixMeLater } from '../constants/Utilities';

const SwitchComponent = (props: FixMeLater) => {
  // const { location } = props;

  // useEffect(() => {
  //   props.onChangeLocation(location.pathname);
  // }, [location.pathname]);

  return (
    <div>
      <Switch>
        <Route exact path={['/', '/home']} component={LandingPage} />
        {/* <Route exact path="/login" component={LoginPage} /> */}
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/organisation" component={OrganisationPage} />
        <Route exact path="/learn-more" component={TodoPage} />
        <Route
          exact
          path="/learn-more/how-to-use-it"
          component={HowToUseItPage}
        />
        <Route exact path="/faq" component={TodoPage} />
        <Route exact path="/forum" component={TodoPage} />
        <Route exact path="/todo" component={TodoPage} />
        <Route exact path="/consult-database" component={TodoPage} />

        <Route
          exact
          path="/profile/demographic-survey"
          component={DemographicSurvey}
        />
        <Route
          exact
          path="/profile/domestic-survey"
          component={DomesticSurvey}
        />
        <Route exact path="/profile/skills-survey" component={SkillsSurvey} />
        <Route
          exact
          path="/profile/occupation-detail"
          component={OccupationDetailPage}
        />
      </Switch>
    </div>
  );
};

export default SwitchComponent;
