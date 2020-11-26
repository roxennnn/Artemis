import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

import Colors from '../constants/Colors';

import {
  faBriefcase,
  faCog,
  faUser,
  faGraduationCap,
  faComment,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CenterView from '../components/CenterView';

import avatar2 from '../images/avatar2.png';
import { FixMeLater } from '../constants/Utilities';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/reducers/root.reducer';
import { signOut } from '../store/actions/user.action';

const styles = {
  dropdownItem: {
    color: 'black',
    textAlign: 'left' as 'left',
    fontSize: 20,
    display: 'flex',
    flexDirection: 'row' as 'row',
    alignItems: 'center',
    width: '100%',
  },
};

const LoggedNavbar = (props: FixMeLater) => {
  const history = useHistory();
  const location = useLocation();
  const { user, loading, isLogged } = useSelector(
    (state: RootState) => state.user
  );
  const dispatch = useDispatch();

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
          {isLogged && (
            <div>
              <div className="nav-item dropdown">
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
                  <span style={{ fontSize: 18 }}>{user?.username}</span>
                  {!user?.organisation && (
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
                          {!user?.organisation && (
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
                              {user?.skillsDone && (
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
                              {user?.skillsDone && (
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
                              // AuthService.logout();
                              dispatch(signOut());
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
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LoggedNavbar;
