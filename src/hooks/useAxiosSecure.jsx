import axios from 'axios';
import { getItem, removeItem } from '@/utils/localStorage';

export const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_SITE_URL,
});

// ✅ Attach token to requests if available
axiosSecure.interceptors.request.use(
  (config) => {
    const token = getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// ✅ Handle expired/invalid tokens globally
axiosSecure.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 403)
    ) {
      console.warn('Token expired or invalid. Logging out...');

      removeItem('token'); // ✅ Clear token from local storage
      window.location.reload(); // ✅ Reload to force logout (or navigate to login)
    }
    return Promise.reject(error);
  }
);

const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
