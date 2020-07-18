import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import SignupPage from "../pages/SignupPage";
import LoginPage from "../pages/LoginPage";
import AboutPage from "../pages/AboutPage";
import LearnMorePage from "../pages/LearnMorePage";
import ProfilePage from "../pages/ProfilePage";
import FaqPage from "../pages/FaqPage";
import ConsultDatabasePage from "../pages/ConsultDatabasePage";
import ForumPage from "../pages/ForumPage";
import TodoPage from "../pages/TodoPage";

const SwitchComponent = (props) => {
  return (
    <div className="" style={{margin: "2%"}}>
      <Switch>
        <Route exact path={["/", "/home"]} component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/learn-more" component={LearnMorePage} />
        <Route exact path="/faq" component={FaqPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/forum" component={ForumPage} />
        <Route exact path="/todo" component={TodoPage} />
        <Route exact path="/consult-database" component={ConsultDatabasePage} />
        {/* <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} /> */}
      </Switch>
    </div>
  );
};

export default SwitchComponent;
