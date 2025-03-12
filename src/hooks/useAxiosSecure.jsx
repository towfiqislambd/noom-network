import axios from 'axios';
import { getItem } from '@/utils/localStorage';

export const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_SITE_URL,
});

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

const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
