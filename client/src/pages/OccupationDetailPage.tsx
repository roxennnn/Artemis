import React, { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';

import Colors from '../constants/Colors';
import BackButton from '../components/BackButton';
import CenterView from '../components/CenterView';
import ProgressBar from '../components/ProgressBar';

import { FixMeLater } from '../constants/Utilities';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/reducers/root.reducer';
import { setLanguage } from '../store/actions/language.action';
import { getOccupationDetail } from '../store/actions/matching.action';

const OccupationDetailPage = (props: FixMeLater) => {
  const { strings, language } = useSelector(
    (state: RootState) => state.language
  );
  const { currentOccupation, loading } = useSelector(
    (state: RootState) => state.matching
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOccupationDetail(language, props.location.state.oid));
  }, [language]);

  const avgStringArray = (arr: FixMeLater) => {
    let avg = 0;
    for (const a of arr) {
      avg += parseFloat(a);
    }

    avg /= arr.length;

    return avg.toFixed(2);
  };

  return (
    <div style={{ margin: '2%' }}>
      <CenterView
        middle={10}
        sides={1}
        left={
          <BackButton
            onClick={() => {
              localStorage.setItem('language', language);
              // props.history.goBack();
              props.history.push({
                pathname: '/profile',
                state: {
                  from: true,
                  to: 2,
                },
              });
            }}
            label={strings.back && strings.back}
          />
        }
        right={
          <div>
            <img
              alt=""
              src={require(`../images/women/woman4.png`)}
              style={{
                margin: '30%',
                width: '650%',
                // height: 400,
              }}
            />
          </div>
        }
      >
        {loading ? (
          <div style={{ textAlign: 'center' }}>
            <Spinner animation="border" variant="primary" />
          </div>
        ) : (
          <div style={{ fontSize: 22 }}>
            {currentOccupation ? (
              <div>
                <h2>{currentOccupation.title}</h2>
                <div>{currentOccupation.description}</div>
                <br />
                <h3>
                  {strings.Profile &&
                    strings.Profile.ProfileMatchings.OccupationDetails
                      .requiredSkills}
                </h3>
                {currentOccupation.categoryNames.map(
                  (name: FixMeLater, index: number) => {
                    return (
                      <div
                        key={index}
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                          marginTop: '2%',
                        }}
                      >
                        <div style={{ width: '50%' }}>{name}</div>
                        <ProgressBar
                          percentage={`${currentOccupation.categoryScores[index]}%`}
                          color={Colors.primary}
                          gradient={Colors.gradient}
                          outsideStyle={{ width: '50%', height: 20 }}
                        />
                      </div>
                    );
                  }
                )}
                <br />
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    fontSize: 24,
                  }}
                >
                  <div style={{ fontWeight: 'bold' }}>
                    {strings.Profile &&
                      strings.Profile.ProfileMatchings.OccupationDetails
                        .affinity}
                  </div>
                  <div style={{ marginLeft: '2%' }}>
                    {avgStringArray(currentOccupation.categoryScores)} %
                  </div>
                </div>
              </div>
            ) : (
              <div>
                {strings.anErrorHasOccurred && strings.anErrorHasOccurred}
              </div>
            )}
          </div>
        )}
      </CenterView>
    </div>
  );
};

export default OccupationDetailPage;
