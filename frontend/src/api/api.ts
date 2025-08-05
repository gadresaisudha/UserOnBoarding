import axios from 'axios';

const API_BASE_URL = 'http://localhost:2525/api'; // adjust as needed

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Get all users
export const fetchUsers = () => api.get('/data');

//post login details
export const login = (email: string, password: string) =>
  api.post('/auth', { email, password });

export default api;