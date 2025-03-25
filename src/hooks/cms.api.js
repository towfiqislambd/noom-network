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

// subscription::
export const SubscriptionPlanFunc = async (payload) => {
  const { data } = await axiosSecure.post('/api/stripe-payment', payload);
  return data?.data;
};

// create property:
export const CreatePropertyFunc = async (payload) => {
  const { data } = await axiosSecure.post('/api/porperty/create', payload, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return data?.data;
};

// get all properties:
export const GetAllPropertiesFunc = async () => {
  const { data } = await axiosSecure('/api/porperty/all');
  return data?.data;
};

// get single property:
export const GetSinglePropertyFunc = async (id) => {
  const { data } = await axiosSecure(`/api/porperty/single/${id}`);
  return data?.data?.porperty[0];
};
