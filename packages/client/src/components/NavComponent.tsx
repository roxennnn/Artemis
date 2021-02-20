// To be fixed

import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Colors from '../constants/Colors';
// import AuthService from '../services/auth.service';

import LoginNavbar from './LoginNavbar';
import LoggedNavbar from './LoggedNavbar';

import logo from '../images/logo.png';

import { useDispatch, useSelector } from 'react-redux';
import { FixMeLater } from '../constants/Utilities';
import { RootState } from '../store/reducers/root.reducer';
import { setLanguage } from '../store/actions/language.action';
import { Language } from '../model/language.model';
import LanguageComponent from './language.component';
import CountryFlagComponent from './countryflag.component';

const NavComponent = (props: FixMeLater) => {
  const { strings, language } = useSelector(
    (state: RootState) => state.language
  );
  const dispatch = useDispatch();

  const [currentFlag, setCurrentFlag] = useState<FixMeLater>('GB');
  const history = useHistory();
  // const [currentUser, setCurrentUser] = useState<FixMeLater>();

  const {user, isLogged} = useSelector(
    (state: RootState) => state.user
  );

  // const location = useLocation();
  // useEffect(() => {
  //   // const user = AuthService.getCurrentUser();
  //   // setCurrentUser(user);
  // }, [location.pathname]);

  const fetchLanguage = () => {
    const lang = localStorage.getItem('language');
    if (lang) {
      // updateLanguage(lang);
      dispatch(setLanguage(lang as Language));
    }
  };

  useEffect(() => {
    fetchLanguage();
  }, []);

  useEffect(() => {
    if (language === Language.EN) {
      setCurrentFlag('GB');
    } else if (language === Language.ES) {
      setCurrentFlag('ES');
    } else if (language === Language.PT) {
      setCurrentFlag('PT');
    }
  }, [language]);

  const learnMoreClickHandler = (e: FixMeLater) => {
    // console.log(e.target.id);
    localStorage.setItem('language', language);
    history.push(e.target.id);
  };

  return (
    <nav
      className="navbar sticky-top navbar-expand-lg navbar-dark primary"
      style={{
        background: Colors.gradient,
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Link to={'/'} className="navbar-brand">
        <div style={{ width: '8.5%', padding: '0.5%' }}>
          <img alt="" src={logo} style={{ width: '100%' }} />
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
        <ul className="navbar-nav mr-auto" style={{ width: '70%' }}>
          <li
            className="nav-item dropdown"
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: '5%',
              marginRight: '5%',
            }}
          >
            <button
              style={{
                background: 'None',
                border: 'None',
                display: 'flex',
                alignItems: 'center',
                outline: 'none',
              }}
              className="dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <CountryFlagComponent countryCode={currentFlag} />
            </button>
            <div className="dropdown-menu dropdown-menu-learnmore dropdown-flags">
              <LanguageComponent
                countryCode="ES"
                label="Español"
                onClick={() => {
                  setCurrentFlag('ES');
                  // updateLanguage('es');
                  dispatch(setLanguage(Language.ES));
                  localStorage.setItem('language', 'es'); // FixMeLater
                }}
              />
              <LanguageComponent
                countryCode="PT"
                label="Português"
                onClick={() => {
                  setCurrentFlag('PT');
                  // updateLanguage('pt');
                  dispatch(setLanguage(Language.PT));
                  localStorage.setItem('language', 'pt'); // FixMeLater
                }}
              />
              <LanguageComponent
                countryCode="GB"
                label="English"
                onClick={() => {
                  setCurrentFlag('GB');
                  // updateLanguage('en');
                  dispatch(setLanguage(Language.EN));
                  localStorage.setItem('language', 'en'); // FixMeLater
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
                style={{ cursor: 'pointer' }}
                id="/learn-more"
              >
                {strings.NavComponent &&
                  strings.NavComponent.LearnMore.whatIsThisWebsite}
              </div>
              <div
                className="dropdown-item"
                onClick={learnMoreClickHandler}
                style={{ cursor: 'pointer' }}
                id="/learn-more/how-to-use-it"
              >
                {strings.NavComponent &&
                  strings.NavComponent.LearnMore.howToUseIt}
              </div>
              {/* <div className="dropdown-divider"></div> */}
              <div
                className="dropdown-item"
                onClick={learnMoreClickHandler}
                style={{ cursor: 'pointer' }}
                id="/learn-more"
              >
                {strings.NavComponent &&
                  strings.NavComponent.LearnMore.whatAndWhyOfThisDatabase}
              </div>
              <div
                className="dropdown-item"
                onClick={learnMoreClickHandler}
                style={{ cursor: 'pointer' }}
                id="/learn-more"
              >
                {strings.NavComponent &&
                  strings.NavComponent.LearnMore.useOfBlockchain}
              </div>
              <div
                className="dropdown-item"
                onClick={learnMoreClickHandler}
                style={{ cursor: 'pointer' }}
                id="/learn-more"
              >
                {strings.NavComponent &&
                  strings.NavComponent.LearnMore.technicalDocumentation}
              </div>
            </div>
          </li>

          {isLogged && !user?.organisation && (
            <li className="nav-item">
              <Link to={'/forum'} className="nav-link">
                Forum
              </Link>
            </li>
          )}
          <li className="nav-item">
            <Link to={'/faq'} className="nav-link">
              FAQ
            </Link>
          </li>
          <li className="nav-item">
            <Link to={'/about'} className="nav-link">
              {strings.NavComponent && strings.NavComponent.contactUs}
            </Link>
          </li>
        </ul>
      </div>
      <div className="collapse navbar-collapse" id="navbarTop">
        <ul className="navbar-nav ml-auto">
          <li>
            {isLogged ? (
              <LoggedNavbar
                history={props.history}
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
