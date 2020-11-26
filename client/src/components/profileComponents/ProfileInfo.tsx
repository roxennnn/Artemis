import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FixMeLater } from '../../constants/Utilities';
import { RootState } from '../../store/reducers/root.reducer';

import SurveyCard from './SurveyCard';

// showValue = 0
const ProfileInfo = (props: FixMeLater) => {
  const { user } = useSelector((state: RootState) => state.user);

  return (
    <div>
      <img
        alt=""
        src={require(`../../images/${props.language}/Profile/profileBanner.png`)}
        style={{
          width: '100%',
          borderRadius: 10,
          marginBottom: '5%',
          boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.3)',
        }}
      />
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <SurveyCard
          strings={props.strings}
          title={
            props.strings.Profile &&
            props.strings.Profile.ProfileSurveys.DemographicsSurvey.title
          }
          active={true}
          description={
            props.strings.Profile &&
            props.strings.Profile.ProfileSurveys.DemographicsSurvey.description
          }
          href="demographics-survey"
          done={user?.demographicsDone}
          timestamp={user?.demographicsTimestamp}
          history={props.history}
          cardStyle={{ marginLeft: '1.5%' }}
        />
        <SurveyCard
          strings={props.strings}
          title={
            props.strings.Profile &&
            props.strings.Profile.ProfileSurveys.SkillsSurvey.title
          }
          active={user?.demographicsDone || user?.domesticDone}
          description={
            props.strings.Profile &&
            props.strings.Profile.ProfileSurveys.SkillsSurvey.description
          }
          href="skills-survey"
          done={user?.skillsDone}
          timestamp={user?.skillsTimestamp}
          history={props.history}
          cardStyle={{ marginLeft: '3%', marginRight: '3%' }}
        />
        <SurveyCard
          strings={props.strings}
          title={
            props.strings.Profile &&
            props.strings.Profile.ProfileSurveys.DomesticSurvey.title
          }
          active={(user?.demographicsDone && user?.skillsDone) || user?.domesticDone}
          description={
            props.strings.Profile &&
            props.strings.Profile.ProfileSurveys.DomesticSurvey.description
          }
          href="domestic-survey"
          done={user?.domesticDone}
          timestamp={user?.domesticTimestamp}
          history={props.history}
          cardStyle={{ marginRight: '1.5%' }}
        />
      </div>
    </div>
  );
};

export default ProfileInfo;
