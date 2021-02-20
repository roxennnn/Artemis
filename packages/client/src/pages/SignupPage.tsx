import React, { useState, useContext, useEffect } from 'react';

import CenterView from '../components/CenterView';
import WomanSignUp from '../components/WomanSignUp';
import OrganisationSignUp from '../components/OrganisationSignUp';
import Colors from '../constants/Colors';

import BackButton from '../components/BackButton';
import LoginComponent from '../components/LoginComponent';
import { FixMeLater } from '../constants/Utilities';
import { RootState } from '../store/reducers/root.reducer';
import { useDispatch, useSelector } from 'react-redux';

const SignupPage = (props: FixMeLater) => {
  const { strings, language } = useSelector(
    (state: RootState) => state.language
  );
  const dispatch = useDispatch();
  const [userType, setUserType] = useState('None');

  const fetchLanguage = () => {
    const lang = localStorage.getItem('language');
  };

  useEffect(() => {
    fetchLanguage();
  }, []);

  const { location } = props;
  useEffect(() => {
    if (location.state && location.state.from) {
      setUserType(location.state.to);
    }
  }, [location.state]);

  return (
    <div>
      {userType === 'None' ? (
        <div style={{ backgroundColor: Colors.landingPageInfographics }}>
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
                  setUserType('Woman');
                }}
              >
                <img
                  className="infographic-buttons"
                  style={{
                    width: 600,
                    height: 130,
                    marginTop: '6.8%',
                    // marginLeft: "10%",
                  }}
                  alt=""
                  src={require(`../images/${language}/Home/womanButton.png`)}
                />
              </div>
              <div
                onClick={() => {
                  setUserType('Organisation');
                }}
              >
                <img
                  className="infographic-buttons"
                  style={{
                    width: 600,
                    height: 130,
                    marginTop: '6.8%',
                    // marginRight: "10%",
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
              }}
              alt=""
              src={require(`../images/${language}/Home/registrationFooter.png`)}
            />
          </div>
        </div>
      ) : (
        <div style={{ margin: '3%' }}>
          <CenterView
            left={
              userType !== 'None' ? (
                <BackButton
                  onClick={() => {
                    setUserType('None');
                  }}
                  label={
                    userType === 'Woman'
                      ? strings.SignupPage && strings.SignupPage.notAWoman
                      : userType === 'Organisation'
                      ? strings.SignupPage &&
                        strings.SignupPage.notAnOrganisation
                      : strings.back && strings.back
                  }
                />
              ) : null
            }
            right={
              <div>
                {(userType === 'Woman' || userType === 'Login-Woman') && (
                  <img
                    alt=""
                    src={require(`../images/women/woman3.png`)}
                    style={{
                      marginTop: '15%',
                      width: '300%',
                      // height: 400,
                    }}
                  />
                )}
                {(userType === 'Organisation' ||
                  userType === 'Login-Organisation') && (
                  <img
                    alt=""
                    src={require(`../images/women/woman5.png`)}
                    style={{
                      marginTop: '15%',
                      width: '300%',
                      // height: 400,
                    }}
                  />
                )}
              </div>
            }
            middle={8}
            sides={2}
          >
            {userType === 'Woman' && (
              <WomanSignUp
                history={props.history}
                strings={strings}
                language={language}
                onChangeUserType={setUserType}
              />
            )}
            {userType === 'Organisation' && (
              <OrganisationSignUp
                history={props.history}
                strings={strings}
                language={language}
                onChangeUserType={setUserType}
              />
            )}
            {userType.split('-')[0] === 'Login' && (
              <div>
                <h3>Login</h3>
                <LoginComponent
                  history={props.history}
                  strings={strings}
                  show={true}
                  language={language}
                />
                <div
                  className="hover-underline"
                  style={{
                    textAlign: 'center',
                    marginTop: '2%',
                    color: Colors.primary,
                    fontSize: 20,
                  }}
                  onClick={() => {
                    setUserType(userType.split('-')[1]);
                  }}
                >
                  {strings.SignupPage && strings.SignupPage.signupQuestion}{' '}
                </div>
              </div>
            )}
          </CenterView>
        </div>
      )}
    </div>
  );
};

export default SignupPage;
