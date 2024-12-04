import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const eventService = {
  getUpcomingEvents: async () => {
    const response = await api.get('/events/upcoming');
    return response.data;
  },
  
  registerForEvent: async (eventId: string) => {
    const response = await api.post(`/events/${eventId}/register`);
    return response.data;
  },
};

export const userService = {
  login: async (email: string, password: string) => {
    const response = await api.post('/users/login', { email, password });
    return response.data;
  },

  register: async (userData: any) => {
    const response = await api.post('/users/register', userData);
    return response.data;
  },

  getDashboardStats: async () => {
    const response = await api.get('/users/dashboard-stats');
    return response.data;
  },
};

export default api;