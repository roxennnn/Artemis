import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button, NavDropdown } from "react-bootstrap";
import MdPerson from "react-ionicons/lib/MdPerson";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
import logo from "./logo.svg";

import AuthService from "./services/auth.service";

// import BoardUser from "./components/board-user.component";
// import BoardModerator from "./components/board-moderator.component";
// import BoardAdmin from "./components/board-admin.component";

import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import AboutPage from "./pages/AboutPage";
import LearnMorePage from "./pages/LearnMorePage";
import ProfilePage from "./pages/ProfilePage";
import FaqPage from "./pages/FaqPage";
import ConsultDatabasePage from "./pages/ConsultDatabasePage";
import ForumPage from "./pages/ForumPage";
import TodoPage from "./pages/TodoPage";

import Colors from "./constants/Colors.js";

import LoginComponent from "./components/LoginComponent";

const App = (props) => {
  const [currentUser, setCurrentUser] = useState();
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };

  return (
    <Router>
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark primary">
          <Link
            to={"/"}
            className="navbar-brand"
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginLeft: 5,
            }}
          >
            {/* <img src={logo} className="nav-logo" alt="logo" /> */}
            <div style={{ fontSize: 28 }}>Work Your Freedom</div>
            <div style={{ fontSize: 18 }}>
              Find the job that best fits your skills!
            </div>
          </Link>
          {/* Collapsed toggler button */}
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTop"
            aria-controls="navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          {/* Collapsing navbar */}
          <div class="collapse navbar-collapse" id="navbarTop">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item dropdown">
                <a
                  class="nav-link"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Learn More
                </a>
                <div
                  class="dropdown-menu dropdown-menu-learnmore"
                  aria-labelledby="navbarDropdown"
                >
                  <a class="dropdown-item" href="/learn-more">
                    What is this website
                  </a>
                  <a class="dropdown-item" href="/learn-more">
                    How to use it
                  </a>
                  {/* <div class="dropdown-divider"></div> */}
                  <a class="dropdown-item" href="/learn-more">
                    What and why of this database
                  </a>
                  <a class="dropdown-item" href="/learn-more">
                    Use of blockchain
                  </a>
                  <a class="dropdown-item" href="/learn-more">
                    Technical documentation
                  </a>
                </div>
              </li>
              
              {currentUser && (
                <li className="nav-item">
                  <Link to={"/forum"} className="nav-link">
                    Forum
                  </Link>
                </li>
              )}
              {currentUser && (
                <li className="nav-item">
                  <Link to={"/consult-database"} className="nav-link">
                    Consult Database
                  </Link>
                </li>
              )}
              <li className="nav-item">
                <Link to={"/faq"} className="nav-link">
                  FAQ
                </Link>
              </li>
              <li className="nav-item" onclick="myFunction()">
                <Link to={"/about"} className="nav-link">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  TEMP USER
                </Link>
              </li>
            </ul>
          </div>
          <div class="collapse navbar-collapse" id="navbarTop">
            <ul class="navbar-nav ml-auto">
              {/* <li class="nav-item">
                <span class="nav-link nav-text">Already have an account?</span>
              </li> */}
              <li class="nav-item dropdown">
                <a
                  class="nav-link"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span class="nav-text">Already have an account?</span> Login
                </a>
                <ul id="login-dp" class="dropdown-menu dropdown-menu-right">
                  <li>
                    <div class="row">
                      <div class="col-xl">
                        <LoginComponent history={props.history} />
                        <div class="bottom-login text-center">
                          New here ?{" "}
                          <a href="/signup">
                            <b style={{ color: Colors.primary }}>Join Us</b>
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container mt-3">
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
            <Route
              exact
              path="/consult-database"
              component={ConsultDatabasePage}
            />
            {/* <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} /> */}
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
