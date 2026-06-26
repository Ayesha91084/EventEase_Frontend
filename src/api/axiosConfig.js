import axios from 'axios';

const API = axios.create({
  baseURL: 'https://eventease-backend-693s.onrender.com',
});

// Har request mein automatically token attach ho
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  console.log("REQUEST JA RAHI HAI:", req.baseURL + req.url);
  return req;
});

export default API;