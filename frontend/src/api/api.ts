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

export const getAdminConfig = ()=> api.get('/admin-config');
export const postAdminConfig = (config: { step2: string[]; step3: string[] }) =>
  api.post('/admin-config', config);

export const updateUserDetails = (data: Partial<{
  aboutMe: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipcode: string;
  };
  birthdate: string;
}>) => {
  const token = localStorage.getItem('token');
  return api.put('/auth/user', data,{headers: {
  Authorization: `Bearer ${token}`,
},
  });
  };

// Get current logged-in user details
export const getUserDetails = () => {
  const token = localStorage.getItem('token');
  return api.get('/auth/user', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export default api;