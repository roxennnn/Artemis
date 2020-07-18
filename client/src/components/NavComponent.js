import React from "react";
import { Link } from "react-router-dom";

import Colors from "../constants/Colors.js";

import LoginComponent from "./LoginComponent";

const NavComponent = (props) => {
  return (
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

          {props.currentUser && (
            <li className="nav-item">
              <Link to={"/forum"} className="nav-link">
                Forum
              </Link>
            </li>
          )}
          {props.currentUser && (
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
  );
};

export default NavComponent;
