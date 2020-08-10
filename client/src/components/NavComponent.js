import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import Colors from "../constants/Colors.js";
// import logo from "../images/logo.svg";

import LoginNavbar from "./LoginNavbar";
import LoggedNavbar from "./LoggedNavbar";

// Multilingual
import { LanguageContext } from "../languages/LanguageProvider";

const styles = {
  languages: {
    color: Colors.accent,
  },
};

const LanguageComponent = (props) => {
  return (
    <div
      className={
        props.current
          ? "language-selector language-current"
          : "language-selector"
      }
      style={{
        ...props.style,
        textDecoration: props.current ? "underline" : "",
        // fontSize: props.current ? 20 : 18
      }}
      onClick={props.onClick}
    >
      {props.name}
    </div>
  );
};

const NavComponent = (props) => {
  const { strings, language, updateLanguage } = useContext(LanguageContext);

  // useEffect(() => {
  //   if (strings.navComponent) {
  //     console.log(strings.navComponent.loginNavbar);
  //   }
  // }, [strings]);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark primary"
      style={{ background: Colors.gradient }}
    >
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
        {/* <div style={{ fontSize: 18 }}>
          Find the job that best fits your skills!
        </div> */}
      </Link>
      {/* Collapsed toggler button */}
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTop"
        aria-controls="navbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Collapsing navbar */}
      <div className="collapse navbar-collapse" id="navbarTop">
        <ul className="navbar-nav mr-auto" style={{ width: "70%" }}>
          <li
            className="nav-item"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginLeft: "5%",
              marginRight: "5%",
            }}
          >
            <LanguageComponent
              style={{ ...styles.languages, marginRight: "10%" }}
              name="es"
              onClick={(e) => {
                updateLanguage(e.target.innerText);
              }}
              current={language === "es"}
            />
            <div style={{ ...styles.languages, fontSize: 28 }}>|</div>
            <LanguageComponent
              style={{
                ...styles.languages,
                marginLeft: "10%",
              }}
              name="en"
              onClick={(e) => {
                updateLanguage(e.target.innerText);
              }}
              current={language === "en"}
            />
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {strings.NavComponent && strings.NavComponent.LearnMore.learnMore}
            </a>
            <div
              className="dropdown-menu dropdown-menu-learnmore"
              aria-labelledby="navbarDropdown"
            >
              <a className="dropdown-item" href="/learn-more">
                {strings.NavComponent &&
                  strings.NavComponent.LearnMore.whatIsThisWebsite}
              </a>
              <a className="dropdown-item" href="/learn-more">
                {strings.NavComponent &&
                  strings.NavComponent.LearnMore.howToUseIt}
              </a>
              {/* <div className="dropdown-divider"></div> */}
              <a className="dropdown-item" href="/learn-more">
                {strings.NavComponent &&
                  strings.NavComponent.LearnMore.whatAndWhyOfThisDatabase}
              </a>
              <a className="dropdown-item" href="/learn-more">
                {strings.NavComponent &&
                  strings.NavComponent.LearnMore.useOfBlockchain}
              </a>
              <a className="dropdown-item" href="/learn-more">
                {strings.NavComponent &&
                  strings.NavComponent.LearnMore.technicalDocumentation}
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
          <li className="nav-item">
            <Link to={"/faq"} className="nav-link">
              FAQ
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/about"} className="nav-link">
              {strings.NavComponent && strings.NavComponent.contactUs}
            </Link>
          </li>
        </ul>
      </div>
      <div className="collapse navbar-collapse" id="navbarTop">
        <ul
          className="navbar-nav ml-auto"
        >
          <li>
            {props.currentUser ? (
              <LoggedNavbar
                history={props.history}
                currentUser={props.currentUser}
                strings={strings}
              />
            ) : (
              <LoginNavbar history={props.history} strings={strings} />
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavComponent;
