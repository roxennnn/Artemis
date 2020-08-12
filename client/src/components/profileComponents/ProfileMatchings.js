import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";

import MatchingService from "../../services/matching.service";

import Colors from "../../constants/Colors";
import CenterView from "../CenterView";
import MatchingRow from "./MatchingRow";
import PrimaryButton from "../PrimaryButton";

//showValue = 2
const ProfileMatchings = (props) => {
  const [loading, setLoading] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [occupationMatchings, setOccupationMatchings] = useState();

  const { strings, language } = props;

  useEffect(() => {
    setLoading(true);
    asyncFetchOccupations();
    setLoading(false);
  }, [language]);

  const asyncFetchOccupations = async () => {
    const matchings = await MatchingService.fetchMatchings(language);
    setOccupationMatchings(matchings.scoredOccupations);
  };

  const onClickShowAll = () => {
    setShowAll(true);
  };

  const onClickShowLess = () => {
    setShowAll(false);
  };

  return (
    <div style={{ width: "100%" }}>
      {loading ? (
        <CenterView middle={8} sides={2}>
          <div style={{ textAlign: "center" }}>
            <Spinner animation="border" variant="primary" />
          </div>
        </CenterView>
      ) : (
        <div style={{ width: "100%" }}>
          <h3>
            {strings.Profile && strings.Profile.ProfileMatchings.title}
          </h3>
          <div style={{ whiteSpace: "pre-wrap", fontSize: 22 }}>
            {!showAll &&
              "Here you can find the results of the matchmaking based on your profile/answers. The percentages indicate the share of skills you have for every occupation.\nClick on the occupations to learn more about them. Click on the percentages to see which skills you already have for that occupation and which ones you can still learn.\nClick on see more to see other jobs with a smaller matching score."}
          </div>
          <div id="matchings" style={{ margin: "5%" }}>
            {occupationMatchings && (
              <div>
                {showAll ? (
                  <div>
                    {occupationMatchings.map((o, index) => {
                      return <MatchingRow occupation={o} key={index} />;
                    })}
                    <PrimaryButton
                      label={
                        strings.Profile &&
                        strings.Profile.ProfileMatchings.showLess
                      }
                      style={{ margin: "5%" }}
                      buttonStyle={{ padding: 10, width: "10%" }}
                      onClick={onClickShowLess}
                    />
                  </div>
                ) : (
                  <div>
                    {occupationMatchings.slice(0, 5).map((o, index) => {
                      return <MatchingRow occupation={o} key={index} />;
                    })}
                    <PrimaryButton
                      label={
                        strings.Profile &&
                        strings.Profile.ProfileMatchings.showAll
                      }
                      style={{ margin: "5%" }}
                      buttonStyle={{ padding: 10, width: "10%" }}
                      onClick={onClickShowAll}
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileMatchings;
