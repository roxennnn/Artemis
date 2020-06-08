import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav, Button, FormControl, Form } from "react-bootstrap";

import logo from "./logo.svg";
import "./css/App.css";

import HomePage from "./pages/HomePage";
import LearnMorePage from "./pages/LearnMorePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import UserPage from "./pages/UserPage";
import OrganizationPage from "./pages/OrganizationPage";
import AboutPage from "./pages/AboutPage";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">
            <img src={logo} className="nav-logo" alt="logo" />
            Work Your Freedom
          </Navbar.Brand>
          <Nav className="mr-auto">
            {/* <Nav.Link href="/home">Home</Nav.Link> */}
            <Nav.Link href="/learn-more">Learn More</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Form inline>
              <FormControl
                type="text"
                placeholder="¿ Is this needed ?"
                className="mr-sm-2"
              />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Nav>
          <Nav>
            {/* <Nav.Link className="signupButton" href="/login">Login</Nav.Link>
            <Nav.Link>|</Nav.Link>
            <Nav.Link className="loginButton" href="/signup">Signup</Nav.Link> */}
            <Button variant="outline-success" href="/signup">Sign Up</Button>
            <Nav.Link> </Nav.Link>
            <Button variant="outline-primary" href="/login">Log In</Button>
          </Nav>
        </Navbar>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/signup">
            <SignupPage />
          </Route>
          <Route path="/learn-more">
            <LearnMorePage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
