import React, { useState, useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';

import Colors from '../../constants/Colors';
import { FixMeLater } from '../../constants/Utilities';
// import Countries from "../../constants/Countries";

/***************************************************************************
 * Copy the code from https://github.com/country-regions/react-country-region-selector/blob/master/src/CountryDropdown.js
 * and make your own dropdown component
 ***************************************************************************/

const CustomCountryDropdown = (props: FixMeLater) => {
  const styles = {
    dropdown: {
      background: Colors.gradient,
      backgroundColor: Colors.primary,
      color: Colors.accent,
      minWidth: 150,
      margin: 10,
      ...props.style.button,
    },
  };

  const [currentCountry, setCurrentCountry] = useState(
    props.defaultMessageCountry
      ? props.defaultMessageCountry
      : props.strings.Profile
      ? props.strings.Profile.ProfileSurveys.DemographicsSurvey.selectCountry
      : 'Select'
  );

  const { strings } = props;

  useEffect(() => {
    if (
      currentCountry === '' ||
      currentCountry === undefined ||
      currentCountry === 'Select'
    ) {
      setCurrentCountry(
        props.strings.Profile &&
          props.strings.Profile.ProfileSurveys.DemographicsSurvey.selectCountry
      );
    }
    setCurrentCountry(
      props.strings.Profile &&
        props.strings.Profile.ProfileSurveys.DemographicsSurvey.selectCountry
    );
  }, [strings]);

  const [currentRegion, setCurrentRegion] = useState(
    props.defaultMessageRegion
      ? props.defaultMessageRegion
      : props.strings.Profile &&
          props.strings.Profile.ProfileSurveys.DemographicsSurvey.selectARegion
  );

  const [regions, setRegions] = useState([]);

  useEffect(() => {
    const tmp = props.countries.find((c: FixMeLater) => {
      const name = 'name';
      return c[name] === currentCountry;
    });
    if (tmp) {
      setCurrentRegion(
        props.defaultMessageRegion
          ? props.defaultMessageRegion
          : props.strings.Profile &&
              props.strings.Profile.ProfileSurveys.DemographicsSurvey
                .selectARegion
      );
      const regionsLit = 'regions';
      setRegions(tmp[regionsLit]);
    }
  }, [currentCountry, props.countries, props.defaultMessageRegion]);

  return (
    <div
      id="container"
      style={{
        ...props.style.container,
      }}
      // class="select-dropdown to-hover"
      className={
        props.error ? 'select-dropdown error-box' : 'select-dropdown to-hover'
      }
    >
      <div>{props.title}</div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {/* Country */}
        <Dropdown onSelect={props.onSelectCountry}>
          <Dropdown.Toggle
            variant="success"
            id="dropdown-country"
            style={styles.dropdown}
          >
            {currentCountry}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {props.countries.map((value: FixMeLater) => (
              <Dropdown.Item
                key={value.name}
                eventKey={value.value}
                href=""
                onClick={() => {
                  setCurrentCountry(value.name);
                }}
              >
                {value.name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        {/* Region */}
        {regions.length > 0 && (
          <Dropdown onSelect={props.onSelectRegion}>
            <Dropdown.Toggle
              variant="success"
              style={styles.dropdown}
              id="dropdown-region"
            >
              {currentRegion}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {regions.map((value: FixMeLater, index: number) => (
                <Dropdown.Item
                  key={value.name}
                  eventKey={index.toString()}
                  href=""
                  onClick={() => {
                    setCurrentRegion(value.name);
                  }}
                >
                  {value.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        )}
      </div>
      {props.error && (
        <div
          style={{
            color: 'red',
            fontSize: 16,
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          {props.errorMessage}
        </div>
      )}
    </div>
  );
};

export default CustomCountryDropdown;
