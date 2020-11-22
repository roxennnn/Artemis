import React, { useContext, useState, useEffect } from 'react';

import AuthService from '../services/auth.service';

import Colors from '../constants/Colors';
import PrimaryButton from '../components/PrimaryButton';

import { LanguageContext } from '../languages/LanguageProvider';
import { FixMeLater } from '../constants/Utilities';

const LandingPage = (props: FixMeLater) => {
  const { strings, language, updateLanguage } = useContext(LanguageContext);
  const [currentUser, setCurrentUser] = useState();

  const { location } = props;
  useEffect(() => {
    if (location.state && location.state.lang) {
      updateLanguage(location.state.lang);
    }
  }, [location.state, updateLanguage]);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
    const lang = localStorage.getItem('language');
    if (lang) {
      updateLanguage(lang);
    }
  }, [updateLanguage]);

  const learnMoreClickHandler = (e: FixMeLater) => {
    localStorage.setItem('language', language);
    // props.history.push(`/learn-more/how-to-use-it#${e.target.id}`);
    props.history.push(`/learn-more/how-to-use-it`);
  };

  return (
    <div style={{ backgroundColor: Colors.landingPageInfographics }}>
      {currentUser && (
        <img
          style={{
            width: '100%',
            paddingRight: 5,
          }}
          alt=""
          src={require(`../images/${language}/Home/homeBanner.png`)}
        />
      )}

      <div>
        {!currentUser && (
          <div>
            <img
              style={{
                width: '100%',
                paddingTop: '3%',
              }}
              alt=""
              src={require(`../images/${language}/Home/registrationBanner.png`)}
            />
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                marginRight: '10%',
                marginLeft: '12%',
              }}
            >
              <div
                onClick={() => {
                  localStorage.setItem('language', language);
                  props.history.push({
                    pathname: '/signup',
                    state: {
                      from: true,
                      to: 'Woman',
                    },
                  });
                }}
              >
                <img
                  className="infographic-buttons"
                  style={{
                    width: 600,
                    height: 130,
                    marginTop: '6.8%',
                    // marginLeft: "14",
                  }}
                  alt=""
                  src={require(`../images/${language}/Home/womanButton.png`)}
                />
              </div>
              <div
                onClick={() => {
                  localStorage.setItem('language', language);
                  props.history.push({
                    pathname: '/signup',
                    state: {
                      from: true,
                      to: 'Organisation',
                    },
                  });
                }}
              >
                <img
                  className="infographic-buttons"
                  style={{
                    width: 600,
                    height: 130,
                    marginTop: '6.8%',
                    // marginRight: "120%",
                  }}
                  alt=""
                  src={require(`../images/${language}/Home/organisationButton.png`)}
                />
              </div>
            </div>
            <img
              style={{
                width: '100%',
                paddingTop: '3%',
                paddingRight: 5,
              }}
              alt=""
              src={require(`../images/${language}/Home/registrationFooter.png`)}
            />
          </div>
        )}
      </div>
      <img
        style={{
          width: '100%',
          // paddingLeft: 1
        }}
        alt=""
        src={require(`../images/${language}/Home/homeLearnMore1.png`)}
      />
      <div
        style={{
          backgroundColor: Colors.landingPageInfographics,
          marginRight: '30%',
        }}
      >
        <PrimaryButton
          label={strings.LandingPage && strings.LandingPage.learnMore}
          buttonStyle={{ width: '10%' }}
          style={{ display: 'flex', justifyContent: 'flex-end' }}
          onClick={learnMoreClickHandler}
          id="woman"
        />
      </div>
      <div>
        <img
          style={{
            width: '100%',
          }}
          alt=""
          src={require(`../images/${language}/Home/homeLearnMore2.png`)}
        />
        <PrimaryButton
          label={strings.LandingPage && strings.LandingPage.learnMore}
          buttonStyle={{ width: '10%' }}
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            // bottom: currentUser ? -1320 : -1400,
            bottom: currentUser ? -1320 : -1360,
            left: -574,
            zIndex: 100,
          }}
          id="organisation"
          onClick={learnMoreClickHandler}
        />
      </div>

      {/* </div */}
    </div>
  );
};

export default LandingPage;
