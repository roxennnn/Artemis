import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactCountryFlag from "react-country-flag";

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
  const [currentFlag, setCurrentFlag] = useState("ES");

  const fetchLanguage = async () => {
    const lang = await localStorage.getItem("language");
    if (lang) {
      updateLanguage(lang);
      if (lang === "en") {
        setCurrentFlag("GB");
      } else if (lang === "es") {
        setCurrentFlag("ES");
      } else if (lang === "pt") {
        setCurrentFlag("PT");
      }
    }
  };

  useEffect(() => {
    fetchLanguage();
  }, []);

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
              style={{ background: "None", border: "None" }}
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
                }}
              />
              <LanguageComponent
                countryCode="PT"
                label="Português"
                onClick={() => {
                  setCurrentFlag("PT");
                  updateLanguage("pt");
                }}
              />
              <LanguageComponent
                countryCode="GB"
                label="English"
                onClick={() => {
                  setCurrentFlag("GB");
                  updateLanguage("en");
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
        <ul className="navbar-nav ml-auto">
          <li>
            {props.currentUser ? (
              <LoggedNavbar
                history={props.history}
                currentUser={props.currentUser}
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
