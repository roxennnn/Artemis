import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";

import MatchingService from "../../services/matching.service";

import Colors from "../../constants/Colors";
import CenterView from "../CenterView";
import ProgressBar from "../ProgressBar";

const ProfileSkills = (props) => {
  const [loading, setLoading] = useState(false);
  const [skills, setSkills] = useState();

  const { language } = props;

  useEffect(() => {
    setLoading(true);
    asyncFetchSkills();
    setLoading(false);
  }, [language]);

  const asyncFetchSkills = async () => {
    const skills = await MatchingService.fetchSkills(language);
    setSkills(skills.scores);
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
        <div>
          <h3>Skills</h3>
          <div style={{ fontSize: 22 }}>
            {skills ? (
              <div>
                {skills.map((skill, index) => {
                  return (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: "2%",
                      }}
                    >
                      <div style={{ width: "55%" }}>{skill.name}</div>
                      <ProgressBar
                        percentage={`${skill.score}%`}
                        color={Colors.primary}
                        gradient={Colors.gradient}
                        outsideStyle={{ width: "30%", height: 20 }}
                      />
                    </div>
                  );
                })}
              </div>
            ) : (
              <div>An error has occured</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileSkills;
