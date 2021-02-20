import React from 'react';
import { FixMeLater } from '../constants/Utilities';

import CenterView from './CenterView';

const Unauthorised = (props: FixMeLater) => {
  return (
    <CenterView middle={8} sides={2}>
      <h1 style={{ textAlign: 'center' }}>401 Unauthorised Access!</h1>
    </CenterView>
  );
};

export default Unauthorised;
