import axios from "axios";
import authHeader from "./auth-header";

import AuthService from "./auth.service";

const API_URL = "http://localhost:8080/api/survey/";

class SurveyService {
  submitSurvey = async (surveyTag, arr) => {
    const header = authHeader();

    const response = await axios.post(
      API_URL + surveyTag,
      {
        arr,
      },
      {
        headers: header,
      }
    );

    // console.log(response.status);
    // console.log(response.data);
    return response.data;
  };

  queryProfileData = async () => {
    const currentUser = AuthService.getCurrentUser();
    if (currentUser.organisation) {
      return { user: currentUser };
    } else {
      const header = authHeader();
      const response = await axios.get(API_URL + "vars", {
        headers: header,
      });
      // console.log(response.data);
      return response.data;
    }
  };

  resetSurvey = async (href) => {
    const header = authHeader();
    const response = await axios.get(API_URL + `reset-${href}`, {
      headers: header,
    });
    return response.status;
  };
}

export default new SurveyService();
