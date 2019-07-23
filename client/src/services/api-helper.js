import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000'
})


// RESPONSE

export const ping = async () => {
  const resp = await api.get('/ping');
  return resp.data;
};



//SIGNUP

export const userSignup = async (userInfo) => {
  const resp = await api.post(`/users/signup/`, userInfo);
  console.log(resp);
  return (resp);
}

// AUTH

const storeToken = (token) => {
  localStorage.setItem('authToken', token);
  api.defaults.headers.common.authorization = `Bearer ${token}`;
}

const getToken = () => {
  const token = localStorage.getItem('authToken');
  api.defaults.headers.common.authorization = `Bearer ${token}`;
}


// REVIEW

// – Create Review
export const createReview = async (userId, whiskeyId, data) => {
  getToken();
  const resp = await api.post(`/users/${userId}/whiskey/${whiskeyId}/review`, data);
  return (resp.data);
}

// SB - Index User Reviews
export const findReview = async (userId) => {
  getToken();
  const resp = await api.get(`/users/${userId}/review`)
  return resp.data;
}

// MK – Index Whiskey Reviews
export const findWhiskeyReviews = async (whiskeyId) => {
  getToken();
  const resp = await api.get(`/whiskey/${whiskeyId}/review`);
  return resp.data;
}

// SB - Update Review
export const editReview = async (userId, reviewId, data) => {
  getToken();
  const resp = await api.put(`/users/${userId}/review/${reviewId}`, data)
  return resp.data;
}

// - Delete Review
export const deleteReview = async (userId, reviewId) => {
  getToken();
  const resp = await api.delete(`/users/${userId}/review/${reviewId}`)
  return resp.data;
}

// USER

// MK - Update User
export const updateUser = async (userId, data) => {
  getToken();
  const resp = await api.put(`/users/${userId}`);
  return resp.data;
}

// WHISKEY

// Show Whiskey
export const fetchWhiskey = async () => {
  getToken();
  const resp = await api.get(`/whiskey`);
  return resp.data;
}

// Create Whiskey
export const postWhiskey = async (data) => {
  getToken();
  const resp = await api.post(`/whiskey`, data);
  return resp.data;
}

