import React from 'react';
import ReactCountryFlag from 'react-country-flag';

export const CountryFlagComponent = (props) => {
  return <ReactCountryFlag svg countryCode={props.countryCode} />;
};

export default CountryFlagComponent;