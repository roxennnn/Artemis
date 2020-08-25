import React, { useContext, useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import ReactCountryFlag from "react-country-flag";

import Colors from "../constants/Colors.js";
import AuthService from "../services/auth.service";

import LoginNavbar from "./LoginNavbar";
import LoggedNavbar from "./LoggedNavbar";

import logo from "../images/logos/logo5.png";

// Multilingual
import { LanguageContext } from "../languages/LanguageProvider";

const LanguageComponent = (props) => {
  return (
    <div
      className="dropdown-item flag-dropdown-item"
      onClick={props.onClick}
      style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <ReactCountryFlag svg countryCode={props.countryCode} />
      <div className="flag-dropdown-label" style={{ marginLeft: "10%" }}>
        {props.label}
      </div>
    </div>
  );
};

const NavComponent = (props) => {
  const { strings, language, updateLanguage } = useContext(LanguageContext);
  const [currentFlag, setCurrentFlag] = useState();
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState();

  const location = useLocation();
  useEffect(() => {
    const user = AuthService.getCurrentUser();
    setCurrentUser(user);
  }, [location.pathname]);

  const fetchLanguage = () => {
    const lang = localStorage.getItem("language");
    if (lang) {
      updateLanguage(lang);
    }
  };

  useEffect(() => {
    fetchLanguage();
  }, []);

  useEffect(() => {
    if (language === "en") {
      setCurrentFlag("GB");
    } else if (language === "es") {
      setCurrentFlag("ES");
    } else if (language === "pt") {
      setCurrentFlag("PT");
    }
  }, [language]);

  const learnMoreClickHandler = (e) => {
    // console.log(e.target.id);
    localStorage.setItem("language", language);
    history.push(e.target.id);
  };

  return (
    <nav
      className="navbar sticky-top navbar-expand-lg navbar-dark primary"
      style={{
        background: Colors.gradient,
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Link to={"/"} className="navbar-brand">
        {/* <img src={logo} className="nav-logo" alt="logo" /> */}
        {/* <div style={{ fontSize: 28 }}>A R T E M I S</div> */}
        <div style={{ width: "8.5%", padding: "0.5%" }}>
          <img alt="" src={logo} style={{ width: "100%" }} />
        </div>
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
      <div
        className="collapse navbar-collapse"
        id="navbarTop"
        style={{ marginLeft: -1420 }}
      >
        <ul className="navbar-nav mr-auto" style={{ width: "70%" }}>
          <li
            className="nav-item dropdown"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginLeft: "5%",
              marginRight: "5%",
            }}
          >
            <button
              style={{
                background: "None",
                border: "None",
                display: "flex",
                alignItems: "center",
                outline: "none",
              }}
              class="dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <ReactCountryFlag countryCode={currentFlag} />
            </button>
            {/* </a> */}
            <div className="dropdown-menu dropdown-menu-learnmore dropdown-flags">
              <LanguageComponent
                countryCode="ES"
                label="Español"
                onClick={() => {
                  setCurrentFlag("ES");
                  updateLanguage("es");
                  localStorage.setItem("language", "es");
                }}
              />
              <LanguageComponent
                countryCode="PT"
                label="Português"
                onClick={() => {
                  setCurrentFlag("PT");
                  updateLanguage("pt");
                  localStorage.setItem("language", "pt");
                }}
              />
              <LanguageComponent
                countryCode="GB"
                label="English"
                onClick={() => {
                  setCurrentFlag("GB");
                  updateLanguage("en");
                  localStorage.setItem("language", "en");
                }}
              />
            </div>
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
              <div
                className="dropdown-item"
                onClick={learnMoreClickHandler}
                style={{ cursor: "pointer" }}
                id="/learn-more"
              >
                {strings.NavComponent &&
                  strings.NavComponent.LearnMore.whatIsThisWebsite}
              </div>
              <div
                className="dropdown-item"
                onClick={learnMoreClickHandler}
                style={{ cursor: "pointer" }}
                id="/learn-more/how-to-use-it"
              >
                {strings.NavComponent &&
                  strings.NavComponent.LearnMore.howToUseIt}
              </div>
              {/* <div className="dropdown-divider"></div> */}
              <div
                className="dropdown-item"
                onClick={learnMoreClickHandler}
                style={{ cursor: "pointer" }}
                id="/learn-more"
              >
                {strings.NavComponent &&
                  strings.NavComponent.LearnMore.whatAndWhyOfThisDatabase}
              </div>
              <div
                className="dropdown-item"
                onClick={learnMoreClickHandler}
                style={{ cursor: "pointer" }}
                id="/learn-more"
              >
                {strings.NavComponent &&
                  strings.NavComponent.LearnMore.useOfBlockchain}
              </div>
              <div
                className="dropdown-item"
                onClick={learnMoreClickHandler}
                style={{ cursor: "pointer" }}
                id="/learn-more"
              >
                {strings.NavComponent &&
                  strings.NavComponent.LearnMore.technicalDocumentation}
              </div>
            </div>
          </li>

          {currentUser && !currentUser.organisation && (
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
        <ul className="navbar-nav ml-auto">
          <li>
            {currentUser ? (
              <LoggedNavbar
                history={props.history}
                currentUser={currentUser}
                strings={strings}
                language={language}
              />
            ) : (
              <LoginNavbar
                history={props.history}
                strings={strings}
                language={language}
              />
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavComponent;
