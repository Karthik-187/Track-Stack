import axios from 'axios';

const API_URL = 'http://localhost:5000/api';  // Changed from 8080 to 5000

export const login = async (username, password) => {
  const response = await axios.post(`${API_URL}/auth/login`, {
    username,
    password,
  });
  if (response.data.token) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

export const register = async (username, email, password) => {
  return axios.post(`${API_URL}/auth/register`, {
    username,
    email,
    password,
  });
};