import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";

import MatchingService from "../../services/matching.service";

import CenterView from "../CenterView";

//showValue = 2
const ProfileMatchings = (props) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // console.log(props.userId);
    MatchingService.fetchMatchings(props.userId);
    setLoading(false);
  }, []);

  return (
    <div>
      {loading ? (
        <CenterView middle={8} sides={2}>
          <div style={{ textAlign: "center" }}>
            <Spinner animation="border" variant="primary" />
          </div>
        </CenterView>
      ) : (
        <div>
          <h3>Job matchings</h3>
          <div style={{ whiteSpace: "pre-wrap", fontSize: 22 }}>
            {
              "Here you can find the results of the matchmaking based on your profile/answers. The percentages indicate the share of skills you have for every occupation.\nClick on the occupations to learn more about them. Click on the percentages to see which skills you already have for that occupation and which ones you can still learn.\nClick on see more to see other jobs with a smaller matching score."
            }
          </div>
          <div id="matchings"></div>
        </div>
      )}
    </div>
  );
};

export default ProfileMatchings;
