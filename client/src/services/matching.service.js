import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/matching/";

class MatchingService {
  fetchMatchings = async () => {
    const header = authHeader();

    const response = await axios.get(
      API_URL + "fetch-matchings",
      {
        headers: header,
      }
    );
    console.log(response.status);
    console.log(response.data);
    return response.data;
  };

  fetchOccupationDetail = async (oid) => {
    const header = authHeader();

    const response = await axios.get(
      API_URL + `occupation-detail/${oid}`,
      {
        headers: header,
      }
    );
    console.log(response.status);
    console.log(response.data);
    return response.data;
  };

  fetchSkills = async () => {
    const header = authHeader();

    const response = await axios.get(
      API_URL + "fetch-skills",
      {
        headers: header,
      }
    );
    console.log(response.status);
    console.log(response.data);
    return response.data;
  };
}

export default new MatchingService();
