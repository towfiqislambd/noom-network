import { axiosPublic } from './useAxiosPublic';
import { axiosSecure } from './useAxiosSecure';

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

// social links::
export const SocialLinksFunc = async () => {
  const { data } = await axiosPublic('/api/social-links');
  return data?.data;
};

// contact us :
export const ContactUsFunc = async (payload) => {
  const { data } = await axiosSecure.post('/api/contact-us', payload);
  return data?.data;
};

// subscription:
export const SubscriptionFunc = async () => {
  const { data } = await axiosPublic('/api/subscriptions');
  return data?.data;
};

// about us::
export const AboutUsFunc = async () => {
  const { data } = await axiosPublic('/api/about-us');
  return data?.data;
};

// achievements::
export const AchievementsFunc = async () => {
  const { data } = await axiosPublic('/api/our-achievements');
  return data?.data;
};

// our partners::
