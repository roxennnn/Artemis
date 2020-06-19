import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
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
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            <img src={logo} className="nav-logo" alt="logo" />
            Work Your Freedom
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/learn-more"} className="nav-link">
                Learn More
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/about"} className="nav-link">
                About
              </Link>
            </li>

            {/* {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/mod"} className="nav-link">
                  Moderator Board
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )} */}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {/* {currentUser.username} */}
                  <MdPerson fontSize="28px" color="gray" /> Profile
                </Link>
              </li>
              <li className="nav-item">
                {/* <a href="/login" className="nav-link" onClick={logOut}>
                  LogOut
                </a> */}
                <Button variant="outline-danger" href="/home" onClick={logOut}>
                  Log Out
                </Button>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item nav-btn">
                {/* <Link to={"/login"} className="nav-link">
                  Login
                </Link> */}
                <Button variant="outline-primary" href="/login">
                  Log In
                </Button>
              </li>

              <li className="nav-item nav-btn">
                {/* <Link to={"/signup"} className="nav-link">
                  Sign Up
                </Link> */}
                <Button variant="outline-success" href="/signup">
                  Sign Up
                </Button>
              </li>
            </div>
          )}
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/profile" component={ProfilePage} />
            <Route exact path="/learn-more" component={LearnMorePage} />
            <Route exact path="/about" component={AboutPage} />
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
