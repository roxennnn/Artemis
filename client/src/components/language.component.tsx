import React from 'react';
import { FixMeLater } from '../constants/Utilities';
import CountryFlagComponent from './countryflag.component';

const LanguageComponent = (props: FixMeLater) => {
  return (
    <div
      className="dropdown-item flag-dropdown-item"
      onClick={props.onClick}
      style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
    >
      <CountryFlagComponent svg countryCode={props.countryCode} />
      <div className="flag-dropdown-label" style={{ marginLeft: '10%' }}>
        {props.label}
      </div>
    </div>
  );
};

export default LanguageComponent;
