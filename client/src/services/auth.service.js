import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
  login = async (email, password) => {
    const response = await axios
      .post(API_URL + "signin", {
        email,
        password
      });
    if (response.data.accessToken) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  }

  logout = () => {
    localStorage.removeItem("user");
  }

  registerCitizen = (firstName, lastName, birthday, email, password) => {
    return axios.post(API_URL + "signup/citizen", {
      firstName,
      lastName, 
      birthday,
      email,
      password
    });
  }

  registerOrganization = (organization, email, password) => {
    return axios.post(API_URL + "signup/organization", {
      organization,
      email,
      password
    });
  }

  // register = (username, email, password) => {
  //   return axios.post(API_URL + "signup", {
  //     username,
  //     email,
  //     password
  //   });
  // }

  getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();
