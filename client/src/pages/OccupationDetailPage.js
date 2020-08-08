import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";

import Colors from "../constants/Colors";
import CenterView from "../components/CenterView";
import ProgressBar from "../components/ProgressBar";
import MatchingService from "../services/matching.service";

const OccupationDetailPage = (props) => {
  const [loading, setLoading] = useState(false);
  const [occupationDetail, setOccupationDetail] = useState();

  const asyncFetchOccupationDetail = async () => {
    let oid = props.location.state.oid;
    const occ = await MatchingService.fetchOccupationDetail(oid);
    setOccupationDetail(occ.details);
  };

  useEffect(() => {
    setLoading(true);
    asyncFetchOccupationDetail();
  }, []);

  useEffect(() => {
    if (occupationDetail) {
      setLoading(false);
    }
  }, [occupationDetail]);

  const backButton = (
    <div>
      <a
        // className="btn-radius fat-btn btn btn-warning btn-lg"
        role="button"
        onClick={() => {
          props.history.goBack();
        }}
        style={{ color: Colors.primary }}
      >
        {"<"}Back
      </a>
    </div>
  );

  const avgStringArray = (arr) => {
    let avg = 0;
    for (let i = 0; i < arr.length; i++) {
      avg += parseFloat(arr[i]);
    }

    avg /= arr.length;

    return avg.toFixed(2);
  };

  return (
    <div>
      <CenterView middle={10} sides={1} left={backButton}>
        {loading ? (
          <div style={{ textAlign: "center" }}>
            <Spinner animation="border" variant="primary" />
          </div>
        ) : (
          <div>
            {occupationDetail ? (
              <div>
                <h2>{occupationDetail.title}</h2>
                <div>{occupationDetail.description}</div>
                <br />
                <h3>Required skills</h3>
                {occupationDetail.category_names.map((name, index) => {
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
                      <div style={{ width: "30%" }}>{name}</div>
                      <ProgressBar
                        // text={`${props.occupation.score}`}
                        percentage={`${occupationDetail.category_scores[index]}%`}
                        color={Colors.primary}
                        gradient={Colors.gradient}
                        outsideStyle={{ width: "50%", height: 20 }}
                      />
                    </div>
                  );
                })}
                <br />
                <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                  <h4>Affinity:</h4>
                  <div>{avgStringArray(occupationDetail.category_scores)} %</div>
                </div>
              </div>
            ) : (
              <div>An error has occured</div>
            )}
          </div>
        )}
      </CenterView>
    </div>
  );
};

export default OccupationDetailPage;
