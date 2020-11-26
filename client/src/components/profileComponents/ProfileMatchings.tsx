import React, { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';

import CenterView from '../CenterView';
import MatchingRow from './MatchingRow';
import PrimaryButton from '../PrimaryButton';

import Colors from '../../constants/Colors';

// import woman from "../../images/women/woman0.png";
import woman from '../../images/women/woman2.png';
import { FixMeLater } from '../../constants/Utilities';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/reducers/root.reducer';
import { getMatchings } from '../../store/actions/matching.action';
import { Matching } from '../../model/matching.model';

// showValue = 2
const ProfileMatchings = (props: FixMeLater) => {
  const [showAll, setShowAll] = useState(false);

  const { strings, language } = useSelector(
    (state: RootState) => state.language
  );
  const { matchings, loading } = useSelector(
    (state: RootState) => state.matching
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMatchings(language));
    console.log(matchings);
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
              src={require(`../../images/${language}/Profile/occupationsBanner.png`)}
              style={{
                width: '100%',
              }}
            />
          </div>
          <div style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
            <div id="left-box" style={{ width: showAll ? '50%' : '65%' }}>
              {matchings.length > 0 && (
                <div>
                  {showAll ? (
                    <div>
                      {matchings.map(
                        (o: Matching, index: number) => {
                          if (index % 2 === 0) {
                            return <MatchingRow occupation={o} key={index} />;
                          }
                          return undefined;
                        }
                      )}
                    </div>
                  ) : (
                    <div>
                      {matchings
                        .slice(0, 5)
                        .map((o: FixMeLater, index: number) => {
                          return <MatchingRow occupation={o} key={index} />;
                        })}
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
              {matchings.length > 0 && (
                <div>
                  {showAll ? (
                    <div>
                      {matchings.map(
                        (o: FixMeLater, index: number) => {
                          if (index % 2 === 1) {
                            return <MatchingRow occupation={o} key={index} />;
                          }
                          return undefined;
                        }
                      )}
                    </div>
                  ) : (
                    <img src={woman} alt="" style={{ width: '100%' }} />
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

export default ProfileMatchings;
