import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/matching/";

class MatchingService {
  fetchMatchings = async () => {
    console.log("CIAO");
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
}

export default new MatchingService();
