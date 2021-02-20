import React from 'react';
import { faTrash, faRedoAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import PrimaryButton from '../PrimaryButton';
import Colors from '../../constants/Colors';
import { FixMeLater } from '../../constants/Utilities';
import { resetSurvey } from '../../store/actions/user.action';
import { useDispatch } from 'react-redux';

const SurveyCard = (props: FixMeLater) => {
  const dispatch = useDispatch();
  const onClickHandler = () => {
    props.history.push(`profile/${props.href}`);
  };

  return (
    <div
      className={
        props.active ? 'survey-card survey-card-active' : 'survey-card'
      }
      title={props.active ? '' : 'Take previous surveys before taking this'}
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: '30%',
        height: 330,

        borderStyle: 'solid',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        boxShadow: '0 8px 16px 0 rgba(59, 89, 152, 0.2)',

        padding: 20,
        opacity: 0.5,
        ...props.cardStyle,
      }}
    >
      <div
        style={{
          marginBottom: '5%',
          borderBottomWidth: 1,
          borderBottomStyle: 'solid',
          borderColor: Colors.primary,
        }}
        className="survey-card-title"
      >
        <div>{props.title}</div>
      </div>
      <div style={{ textAlign: 'center', fontSize: 22, marginBottom: '5%' }}>
        {props.description}
      </div>
      {props.done ? (
        <div style={{ width: '100%' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              width: '100%',
            }}
          >
            <PrimaryButton
              label={
                <FontAwesomeIcon
                  icon={faTrash}
                  className="survey-card-icon"
                  style={{ color: Colors.accent, fontSize: 22 }}
                />
              }
              title={
                props.strings.Profile &&
                props.strings.Profile.ProfileSurveys.resetAnswers
              }
              onClick={async () => {
                dispatch(resetSurvey(props.href.split('-survey')[0]));
              }}
              // style={{borderStyle: "solid", borderColor: "red", width: "20%"}}
              buttonStyle={{
                minWidth: 10,
                width: '80%',
                marginLeft: '15%',
                padding: 10,
              }}
            />
            <PrimaryButton
              label={
                <FontAwesomeIcon
                  icon={faRedoAlt}
                  className="survey-card-icon"
                  style={{ color: Colors.accent, fontSize: 22 }}
                />
              }
              title={
                props.strings.Profile &&
                props.strings.Profile.ProfileSurveys.retakeSurvey
              }
              onClick={onClickHandler}
              buttonStyle={{
                minWidth: 10,
                width: '80%',
                marginRight: '15%',
                padding: 10,
              }}
            />
          </div>
          <div style={{ fontSize: 20, marginTop: '2%', textAlign: 'center' }}>
            {props.strings.Profile &&
              props.strings.Profile.ProfileSurveys.lastAccess}{' '}
            {props.timestamp}
          </div>
        </div>
      ) : (
        <PrimaryButton
          label={
            props.strings.Profile &&
            props.strings.Profile.ProfileSurveys.takeSurvey
          }
          onClick={onClickHandler}
          disabled={!props.active}
          buttonStyle={{ fontSize: 20 }}
        />
      )}
    </div>
  );
};

export default SurveyCard;
