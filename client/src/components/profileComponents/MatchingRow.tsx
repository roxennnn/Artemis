import React from 'react';
import { useHistory } from 'react-router-dom';

import Colors from '../../constants/Colors';
import ProgressBar from '../ProgressBar';

import '../../css/MatchingRow.css';
import { FixMeLater } from '../../constants/Utilities';

const MatchingRow = (props: FixMeLater) => {
  const history = useHistory();

  const onClickMatchingHandler = () => {
    history.push({
      pathname: '/profile/occupation-detail',
      state: {
        oid: props.occupation.OID,
      },
    });
  };

  return (
    <div
      className="occupation-row"
      title={props.occupation.title}
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '1%',
        paddingLeft: '2%',
        fontSize: 24,
      }}
      onClick={onClickMatchingHandler}
    >
      <div
        className="occupation-title"
        style={{
          width: '35%',
          marginRight: '1%',
          padding: '2%',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {props.occupation.title}
      </div>
      <ProgressBar
        percentage={`${props.occupation.score}%`}
        color={Colors.primary}
        gradient={Colors.gradient}
        outsideStyle={{ width: '45%', height: 20 }}
      />
      <div style={{ width: '20%', textAlign: 'center' }}>
        {props.occupation.score} %
      </div>
    </div>
  );
};

export default MatchingRow;
