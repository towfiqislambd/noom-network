import { axiosPublic } from './useAxiosPublic';

export const HomepageDataFunction = async () => {
  const { data } = await axiosPublic('/api/home-page');
  return data?.data;
};
export const OurFeathers = async () => {
  const { data } = await axiosPublic('/api/our-features');
  return data?.data;
};
export const TestimonialsData = async () => {
  const { data } = await axiosPublic('/api/client-says');
  return data?.data;
};

// footer info::
export const FooterInfoFunc = async () => {
  const { data } = await axiosPublic('/api/site-settings');
  return data?.data;
};

// faq::
export const FaqsFunc = async () => {
  const { data } = await axiosPublic('/api/faq/all');
  return data?.data;
};

