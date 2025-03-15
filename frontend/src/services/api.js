import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const login = async (username, password) => {
  const response = await axios.post(`${API_URL}/users`, {
    username,
    password,
  });
  if (response.data.token) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

export const register = async (userData) => {
  return axios.post(`${API_URL}/users`, userData);
};