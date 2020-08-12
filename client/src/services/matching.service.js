import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/matching/";

class MatchingService {
  fetchMatchings = async (lang) => {
    const header = authHeader();

    const response = await axios.get(
      API_URL + `fetch-matchings/${lang}`,
      {
        headers: header,
      }
    );
    console.log(response.status);
    console.log(response.data);
    return response.data;
  };

  fetchOccupationDetail = async (lang, oid) => {
    const header = authHeader();

    const response = await axios.get(
      API_URL + `occupation-detail/${lang}/${oid}`,
      {
        headers: header,
      }
    );
    console.log(response.status);
    console.log(response.data);
    return response.data;
  };

  fetchSkills = async (lang) => {
    const header = authHeader();

    const response = await axios.get(
      API_URL + `fetch-skills/${lang}`,
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
