import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

import Colors from '../constants/Colors';

import {
  faBriefcase,
  faCog,
  // faTools,
  // faUtensils,
  faUser,
  // faDice,
  // faHammer,
  faGraduationCap,
  faComment,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import AuthService from '../services/auth.service';
import SurveyService from '../services/survey.service';

import CenterView from '../components/CenterView';

import avatar2 from '../images/avatar2.png';
import { FixMeLater } from '../constants/Utilities';

const styles = {
  dropdownItem: {
    color: 'black',
    textAlign: 'left' as 'left',
    fontSize: 20,
    display: 'flex',
    flexDirection: 'row' as 'row',
    alignItems: 'center',
    // justifyContent: "space-evenly",
    width: '100%',
  },
};

const LoggedNavbar = (props: FixMeLater) => {
  const history = useHistory();
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState<FixMeLater>(); // data of logged user
  const [loading, setLoading] = useState(false);

  const [skillsDone, setSkillsDone] = useState();

  const asyncQueryProfileData = async () => {
    const user = await SurveyService.queryProfileData();
    if (user && user.user) {
      setCurrentUser(user.user);
      setSkillsDone(user.user.skills_done);
    }
  };
  useEffect(() => {
    // @TOFIX: it does not update the dropdown menu when the skills survey is done unless a page refresh is done
    setLoading(true);
    if (location.pathname === '/profile') {
      asyncQueryProfileData();
    } else {
      setLoading(false); // it should work now
    }
  }, [location.pathname]);

  useEffect(() => {
    if (currentUser) {
      setLoading(false);
    }
  }, [currentUser]);

  return (
    <div>
      {loading ? (
        <CenterView middle={8} sides={2}>
          <div style={{ textAlign: 'center' }}>
            <Spinner animation="border" variant="primary" />
          </div>
        </CenterView>
      ) : (
        <div>
          {currentUser && (
            <div>
              <li className="nav-item dropdown">
                <a
                  className="nav-link profile-nav-link"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                  }}
                >
                  <span style={{ fontSize: 18 }}>{currentUser.username}</span>
                  {!currentUser.organisation && (
                    <img // No percentages... @TOFIX for a responsive design
                      style={{
                        width: '8%',
                        marginLeft: 20,
                        borderStyle: 'solid',
                        borderColor: 'white',
                        borderWidth: 1,
                      }}
                      className="rounded-pill nav-avatar"
                      alt=""
                      src={avatar2}
                    />
                  )}
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-right"
                  style={{ backgroundColor: Colors.primary, opacity: 0.9 }}
                >
                  <li>
                    <div className="row">
                      <div className="col-xl">
                        <div className="bottom-login text-center">
                          <span
                            className="dropdown-item profile-dropdown-item"
                            style={styles.dropdownItem}
                            onClick={() => {
                              history.push({
                                pathname: '/profile',
                                state: {
                                  from: true,
                                  to: 0,
                                },
                              });
                            }}
                          >
                            <div style={{ width: '25%' }}>
                              <FontAwesomeIcon
                                className="profile-dropdown-icon"
                                icon={faUser}
                                style={{ fontSize: 25 }}
                              />
                            </div>
                            <div style={{ width: '70%', marginRight: '5%' }}>
                              {props.strings.ProfileListings &&
                                props.strings.ProfileListings.profile}
                            </div>
                          </span>
                          {!currentUser.organisation && (
                            <div>
                              <span
                                className="dropdown-item profile-dropdown-item"
                                style={styles.dropdownItem}
                                onClick={() => {
                                  history.push({
                                    pathname: '/profile',
                                    state: {
                                      from: true,
                                      to: 1,
                                    },
                                  });
                                }}
                              >
                                <div style={{ width: '25%' }}>
                                  <FontAwesomeIcon
                                    className="profile-dropdown-icon"
                                    icon={faComment}
                                    style={{ fontSize: 25 }}
                                  />
                                </div>
                                <div
                                  style={{ width: '70%', marginRight: '5%' }}
                                >
                                  {props.strings.ProfileListings &&
                                    props.strings.ProfileListings.messages}
                                </div>
                              </span>
                              {skillsDone && (
                                <span
                                  className="dropdown-item profile-dropdown-item"
                                  style={styles.dropdownItem}
                                  onClick={() => {
                                    history.push({
                                      pathname: '/profile',
                                      state: {
                                        from: true,
                                        to: 2,
                                      },
                                    });
                                  }}
                                >
                                  <div style={{ width: '25%' }}>
                                    <FontAwesomeIcon
                                      className="profile-dropdown-icon"
                                      icon={faBriefcase}
                                      style={{ fontSize: 25 }}
                                    />
                                  </div>
                                  <div
                                    style={{ width: '70%', marginRight: '5%' }}
                                  >
                                    {props.strings.ProfileListings &&
                                      props.strings.ProfileListings.occupations}
                                  </div>
                                </span>
                              )}
                              {skillsDone && (
                                <span
                                  className="dropdown-item profile-dropdown-item"
                                  style={styles.dropdownItem}
                                  onClick={() => {
                                    history.push({
                                      pathname: '/profile',
                                      state: {
                                        from: true,
                                        to: 3,
                                      },
                                    });
                                  }}
                                >
                                  <div style={{ width: '25%' }}>
                                    <FontAwesomeIcon
                                      className="profile-dropdown-icon"
                                      icon={faGraduationCap}
                                      style={{ fontSize: 25 }}
                                    />
                                  </div>
                                  <div
                                    style={{ width: '70%', marginRight: '5%' }}
                                  >
                                    {props.strings.ProfileListings &&
                                      props.strings.ProfileListings.skills}
                                  </div>
                                </span>
                              )}
                            </div>
                          )}

                          <div className="dropdown-divider"></div>
                          <span
                            className="dropdown-item profile-dropdown-item"
                            style={styles.dropdownItem}
                            onClick={() => {
                              history.push({
                                pathname: '/profile',
                                state: {
                                  from: true,
                                  to: 4,
                                },
                              });
                            }}
                          >
                            <div style={{ width: '25%' }}>
                              <FontAwesomeIcon
                                className="profile-dropdown-icon"
                                icon={faCog}
                                style={{ fontSize: 25 }}
                              />
                            </div>
                            <div style={{ width: '70%', marginRight: '5%' }}>
                              {props.strings.ProfileListings &&
                                props.strings.ProfileListings.settings}
                            </div>
                          </span>
                          <span
                            className="dropdown-item logout-dropdown-item"
                            style={{ ...styles.dropdownItem, color: '#dc3545' }}
                            onClick={() => {
                              AuthService.logout();
                              localStorage.setItem('language', props.language);
                              if (location.pathname === '/') {
                                history.push('/home');
                              } else {
                                history.push('/');
                              }
                            }}
                          >
                            <div style={{ width: '25%' }}>
                              <FontAwesomeIcon
                                icon={faSignOutAlt}
                                style={{ fontSize: 25 }}
                              />
                            </div>
                            <div style={{ width: '70%', marginRight: '5%' }}>
                              Logout
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LoggedNavbar;
