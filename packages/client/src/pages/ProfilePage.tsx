import React, { useState, useEffect, useContext } from 'react';
import { Spinner } from 'react-bootstrap';

import CenterView from '../components/CenterView';

import ProfileInfo from '../components/profileComponents/ProfileInfo';
import ProfileMatchings from '../components/profileComponents/ProfileMatchings';
import ProfileSkills from '../components/profileComponents/ProfileSkills';

import Colors from '../constants/Colors';
import Countries from '../constants/Countries';

import {
  faMapMarkerAlt,
  faBriefcase,
  faCog,
  faUser,
  faGraduationCap,
  faComment,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import avatar2 from '../images/avatar2.png';

import '../css/ProfilePage.css';
import { emptyFunction, FixMeLater } from '../constants/Utilities';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/reducers/root.reducer';
import { setLanguage } from '../store/actions/language.action';
import { signOut } from '../store/actions/user.action';

const styles = {
  someInfo: {
    width: '72%',
    paddingLeft: '3%',
  },
};

const IconBox = (props: FixMeLater) => {
  return (
    <div
      className={
        props.title === 'Logout'
          ? 'icon-box-logout'
          : props.disabled
          ? 'icon-box icon-box-disabled'
          : props.active
          ? 'icon-box icon-box-active'
          : 'icon-box'
      }
      style={{
        // borderStyle: "solid",
        // borderWidth: 1,
        borderColor: Colors.primary,
        borderRadius: 10,
        padding: 30,
        margin: 5,
        // height: 100,

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        ...props.style,
      }}
      onClick={props.disabled ? emptyFunction : props.onClick}
    >
      <FontAwesomeIcon
        icon={props.icon}
        className="icon-hover"
        style={{ fontSize: 28 }}
      />
      <div style={{ textAlign: 'center' }}>{props.title}</div>
    </div>
  );
};

// TODO
// - Add sort buttons in occupations and skills

const ProfilePage = (props: FixMeLater) => {
  const { strings, language } = useSelector(
    (state: RootState) => state.language
  );
  const dispatch = useDispatch();

  const [showValue, setShowValue] = useState(0);
  const { user, isLogged, loading } = useSelector(
    (state: RootState) => state.user
  );
  const [geoPosition, setGeoPosition] = useState<FixMeLater>();

  useEffect(() => {
    if (user?.geoPosition) {
      const country = Countries[user.geoPosition[0] - 1];
      const region = country.regions[user.geoPosition[1] - 1];
      setGeoPosition(
        `${country.name}, ${region.name}`
      );
    }
  }, [user]);

  // Handle done surveys
  const [completionBorder, setCompletionBorder] = useState(
    `white white ${Colors.primary} white`
  );
  useEffect(() => {
    if (isLogged) {
      let counter = 0;
      if (user?.demographicsDone) {
        counter++;
      }
      if (user?.domesticDone) {
        counter++;
      }
      if (user?.skillsDone) {
        counter++;
      }
      if (counter === 1) {
        setCompletionBorder(`white white ${Colors.primary} ${Colors.primary}`);
      } else if (counter === 2) {
        setCompletionBorder(
          `${Colors.primary} white ${Colors.primary} ${Colors.primary}`
        );
      } else if (counter === 3) {
        setCompletionBorder(
          `${Colors.primary} ${Colors.primary} ${Colors.primary} ${Colors.primary}`
        );
      }
    }
  }, [user]);

  const { location } = props;
  useEffect(() => {
    if (location.state && location.state.from) {
      setShowValue(location.state.to);
    }
  }, [location.state]);

  return (
    <div style={{ margin: '2%' }}>
      {loading ? (
        <CenterView middle={8} sides={2}>
          <div style={{ textAlign: 'center' }}>
            <Spinner animation="border" variant="primary" />
          </div>
        </CenterView>
      ) : (
        <div>
          {isLogged && (
            <div className="my-container" style={{ width: '100%' }}>
              <div
                className="my-row"
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                }}
              >
                <div
                  id="left-box"
                  style={{
                    width: '25%',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      flexDirection: 'column',
                      width: '90%',
                      height: 680,

                      borderStyle: 'solid',
                      borderColor: '#ccc',
                      borderWidth: 1,
                      borderRadius: 10,
                      boxShadow: '0 8px 16px 0 rgba(59, 89, 152, 0.2)',
                    }}
                  >
                    <img
                      style={{
                        width: '38%',
                        marginTop: '6%',
                        // borderStyle: "initial",
                        borderStyle: 'solid',
                        borderColor: completionBorder,
                        borderWidth: 8,
                        // borderBottomWidth: 6,
                        borderBottomStyle: 'dotted',
                        padding: 3,
                        cursor: 'pointer',
                      }}
                      className="rounded-pill profile-page-avatar"
                      alt=""
                      title={strings.Profile && strings.Profile.changeAvatar}
                      src={avatar2}
                      // src="https://bootdey.com/img/Content/avatar/avatar9.png"
                    />
                    <div style={{ fontSize: 24, marginTop: '2%' }}>
                      <b>{isLogged && user ? user.username : ''}</b>
                    </div>
                    {geoPosition && (
                      <div style={{ textAlign: 'center' }}>
                        <FontAwesomeIcon
                          icon={faMapMarkerAlt}
                          color={Colors.primary}
                        />
                        <span style={{ marginLeft: 5 }}>{geoPosition}</span>
                        <br />
                      </div>
                    )}
                    <hr
                      style={{
                        width: '90%',
                        marginLeft: '5%',
                        marginRight: '5%',
                      }}
                    />
                    <div>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          // justifyContent: "space-between",
                          alignItems: 'center',
                        }}
                      >
                        <IconBox
                          title={
                            strings.ProfileListings &&
                            strings.ProfileListings.profile
                          }
                          icon={faUser}
                          style={{ width: 130, marginRight: 15 }}
                          active={showValue === 0}
                          onClick={() => {
                            setShowValue(0);
                          }}
                        />
                        <IconBox
                          title={
                            strings.ProfileListings &&
                            strings.ProfileListings.messages
                          }
                          icon={faComment}
                          style={{ width: 130, marginLeft: 15 }}
                          active={showValue === 1}
                          onClick={() => {
                            setShowValue(1);
                          }}
                        />
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          // justifyContent: "space-between",
                          alignItems: 'center',
                        }}
                      >
                        <IconBox
                          title={
                            strings.ProfileListings &&
                            strings.ProfileListings.occupations
                          }
                          icon={faBriefcase}
                          style={{ width: 130, marginRight: 15 }}
                          disabled={!user?.skillsDone}
                          active={showValue === 2}
                          onClick={() => {
                            setShowValue(2);
                          }}
                        />
                        <IconBox
                          title={
                            strings.ProfileListings &&
                            strings.ProfileListings.skills
                          }
                          icon={faGraduationCap}
                          style={{ width: 130, marginLeft: 15 }}
                          disabled={!user?.skillsDone}
                          active={showValue === 3}
                          onClick={() => {
                            setShowValue(3);
                          }}
                        />
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          // justifyContent: "space-between",
                          alignItems: 'center',
                        }}
                      >
                        <IconBox
                          title={
                            strings.ProfileListings &&
                            strings.ProfileListings.settings
                          }
                          icon={faCog}
                          style={{ width: 130, marginRight: 15 }}
                          active={showValue === 4}
                          onClick={() => {
                            setShowValue(4);
                          }}
                        />
                        <IconBox
                          title="Logout"
                          icon={faSignOutAlt}
                          style={{ width: 130, marginLeft: 15 }}
                          onClick={() => {
                            // AuthService.logout();
                            dispatch(signOut());
                            localStorage.setItem('language', language);
                            // props.history.push("/");
                            props.history.push({
                              pathname: '/',
                              state: {
                                lang: props.language,
                              },
                            });
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* left-box */}
                <div
                  id="right-box"
                  className="some-info"
                  style={{ ...styles.someInfo }}
                >
                  {showValue === 0 && (
                    <ProfileInfo
                      history={props.history}
                      language={language}
                      strings={strings}
                    />
                  )}
                  {showValue === 2 && (
                    <ProfileMatchings language={language} strings={strings} />
                  )}
                  {showValue === 3 && (
                    <ProfileSkills language={language} strings={strings} />
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
