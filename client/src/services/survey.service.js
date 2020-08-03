import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/survey/";

class SurveyService {
  // login = async (username, password) => {
  //   const response = await axios
  //     .post(API_URL + "signin", {
  //       username,
  //       password
  //     });
  //   if (response.data.accessToken) {
  //     localStorage.setItem("user", JSON.stringify(response.data));
  //   }
  //   return response.data;
  // }

  // register = (username, email, password) => {
  //   return axios.post(API_URL + "signup", {
  //     username,
  //     email,
  //     password
  //   });
  // }

  submitSurvey = async (surveyTag, arr) => {
    const header = authHeader();
    // const userId = JSON.parse(localStorage.getItem('user')).id;
    // console.log(userId);

    const response = await axios.post(
      API_URL + surveyTag,
      {
        arr,
      },
      {
        headers: header
      }
    );

    console.log(response.status);
    console.log(response.data);
    return response.data;
  };
}

export default new SurveyService();
