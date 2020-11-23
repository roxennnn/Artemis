import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth/;

class AuthService {
  login = async (username: string, password: string) => {
    const response = await axios.post(API_URL + 'signin', {
      username,
      password,
    });
    if (response.data.accessToken) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  }

  logout = () => {
    localStorage.removeItem('user');
  }

  registerWoman = (username: string, email: string, password: string) => {
    return axios.post(API_URL + 'signup/woman', {
      username,
      email,
      password,
    });
  }

  registerOrganisation = (
    organisationName: string,
    email: string,
    password: string
  ) => {
    return axios.post(API_URL + 'signup/organisation', {
      organisationName,
      email,
      password,
    });
  }

  getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user') as string);
  }
}

export default new AuthService();