import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000',  // tumhara backend port
});

// Har request mein automatically token attach ho
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;