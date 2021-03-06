import React, { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';

import Colors from '../../constants/Colors';
import CenterView from '../CenterView';
import PrimaryButton from '../PrimaryButton';
import ProgressBar from '../ProgressBar';

import image from '../../images/women/woman1.png';
import { FixMeLater } from '../../constants/Utilities';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/reducers/root.reducer';
import { getSkills } from '../../store/actions/matching.action';

const SkillRow = (props: FixMeLater) => {
  return (
    <div
      key={props.index}
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '1%',
        paddingLeft: '2%',
        fontSize: 24,
      }}
      title={props.skill.name}
    >
      <div
        style={{
          width: '50%',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          marginRight: '1%',
          padding: '2%',
        }}
      >
        {props.skill.name}
      </div>
      <ProgressBar
        percentage={`${props.skill.score}%`}
        color={Colors.primary}
        gradient={Colors.gradient}
        outsideStyle={{ width: '45%', height: 20 }}
      />
    </div>
  );
};

// showValue = 2
const ProfileSkills = (props: FixMeLater) => {
  const [showAll, setShowAll] = useState(false);

  const { strings, language } = useSelector(
    (state: RootState) => state.language
  );
  const { skills, loading } = useSelector((state: RootState) => state.matching);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSkills(language));
  }, [language]);

  const onClickShowAll = () => {
    setShowAll(true);
  };

  const onClickShowLess = () => {
    setShowAll(false);
  };

  return (
    <div style={{ width: '100%' }}>
      {loading ? (
        <CenterView middle={8} sides={2}>
          <div style={{ textAlign: 'center' }}>
            <Spinner animation="border" variant="primary" />
          </div>
        </CenterView>
      ) : (
        <div style={{ width: '100%' }}>
          <div
            style={{
              backgroundColor: Colors.profileBannerInfographics,
              width: '100%',
              borderRadius: 10,
              marginBottom: '1%',
              boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.3)',
              paddingBottom: '1%',
            }}
          >
            <img
              alt=""
              src={require(`../../images/${language}/Profile/skillsBanner.png`)}
              style={{
                width: '100%',
              }}
            />
          </div>
          <div style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
            <div id="left-box" style={{ width: showAll ? '50%' : '65%' }}>
              {skills.length > 0 && (
                <div>
                  {showAll ? (
                    <div>
                      {skills
                        ? skills.map((skill, index) => {
                            if (index % 2 === 0) {
                              return <SkillRow skill={skill} key={index} />;
                            }
                          })
                        : undefined}
                    </div>
                  ) : (
                    <div>
                      {skills.length > 0
                        ? skills.slice(0, 5).map((skill, index) => {
                            return <SkillRow skill={skill} key={index} />;
                          })
                        : undefined}
                      <PrimaryButton
                        label={
                          strings.Profile &&
                          strings.Profile.ProfileMatchings.showAll
                        }
                        style={{ margin: '5%' }}
                        buttonStyle={{ padding: 10, width: '10%' }}
                        onClick={onClickShowAll}
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
            <div id="right-box" style={{ width: showAll ? '50%' : '35%' }}>
              {skills.length > 0 && (
                <div>
                  {showAll ? (
                    <div>
                      {skills.length > 0 &&
                        skills.map((skill, index) => {
                          if (index % 2 === 1) {
                            return <SkillRow skill={skill} key={index} />;
                          }
                        })}
                    </div>
                  ) : (
                    <img src={image} alt="" style={{ width: '100%' }} />
                  )}
                </div>
              )}
            </div>
          </div>
          {showAll && (
            <div style={{ textAlign: 'center', width: '90%' }}>
              <PrimaryButton
                label={
                  strings.Profile && strings.Profile.ProfileMatchings.showLess
                }
                style={{ marginTop: '5%' }}
                buttonStyle={{ padding: 10, width: '10%' }}
                onClick={onClickShowLess}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProfileSkills;
