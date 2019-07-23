import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000'
})

const storeToken = (token) => {
  localStorage.setItem('authToken', token);
  api.defaults.headers.common.authorization = `Bearer ${token}`;
}
const getToken = () => {
  const token = localStorage.getItem('authToken');
  api.defaults.headers.common.authorization = `Bearer ${token}`;
}

export const createReview = async (userId, whiskeyId, data) => {
  getToken();
  const resp = await api.post(`${baseURL}/users/${userId}/whiskey/${whiskeyId}/review`, data);
  return (resp.data);
}

export const deleteReview = async (userId, reviewId) => {
  getToken();
  const resp = await api.delete(`${baseURL}/users/${userId}/review/${reviewId}`)
  return resp.data;
}

export const fetchWhiskey = async () => {
  const resp = await axios.get(`${baseURL}/whiskey`);
  console.log(res);
  return resp.data;
}

export const postWhiskey = async (data) => {
  getToken();
  const resp = await axios.post(`${baseURL}/whiskey`, data);
  return resp.data;
}
