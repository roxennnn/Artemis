import React, { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";

import Colors from "../../constants/Colors";
// import Countries from "../../constants/Countries";

/***************************************************************************
 * Copy the code from https://github.com/country-regions/react-country-region-selector/blob/master/src/CountryDropdown.js
 * and make your own dropdown component
 ***************************************************************************/

const CustomCountryDropdown = (props) => {
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
      : "Select a country"
  );

  const [currentRegion, setCurrentRegion] = useState(
    props.defaultMessageRegion ? props.defaultMessageRegion : "Select a region"
  );

  const [regions, setRegions] = useState([]);

  useEffect(() => {
    let tmp = props.countries.find((c) => {
      return c["name"] === currentCountry;
    });
    if (tmp) {
      setCurrentRegion(
        props.defaultMessageRegion
          ? props.defaultMessageRegion
          : "Select a region"
      );
      setRegions(tmp["regions"]);
    }
  }, [currentCountry]);

  return (
    <div
      id="container"
      style={{
        ...props.style.container,
      }}
      // class="select-dropdown to-hover"
      class={
        props.error ? "select-dropdown error-box" : "select-dropdown to-hover"
      }
    >
      <div>{props.title}</div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {/* Country */}
        <Dropdown onSelect={props.onSelectCountry}>
          <Dropdown.Toggle
            variant="success"
            // id="dropdown-basic"
            style={styles.dropdown}
          >
            {currentCountry}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {props.countries.map((value) => (
              <Dropdown.Item
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
            <Dropdown.Toggle variant="success" style={styles.dropdown}>
              {currentRegion}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {regions.map((value) => (
                <Dropdown.Item
                  eventKey={value.value}
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
            color: "red",
            fontSize: 16,
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          You did not respond to this question!
        </div>
      )}
    </div>
  );
};

export default CustomCountryDropdown;
