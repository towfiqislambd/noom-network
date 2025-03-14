import { useQuery } from '@tanstack/react-query';
import {
  FaqsFunc,
  FooterInfoFunc,
  HomepageDataFunction,
  OurFeathers,
  SocialLinksFunc,
  TestimonialsData,
} from './cms.api';

export const useHomepageData = () => {
  return useQuery({
    queryKey: ['homepage-data'],
    queryFn: HomepageDataFunction,
  });
};
export const useOurFeathers = () => {
  return useQuery({
    queryKey: ['our-feathers'],
    queryFn: OurFeathers,
  });
};
export const useTestimonialData = () => {
  return useQuery({
    queryKey: ['testimonial'],
    queryFn: TestimonialsData,
  });
};

// footer info:
export const useFooterInfo = () => {
  return useQuery({
    queryKey: ['footer-info'],
    queryFn: FooterInfoFunc,
  });
};

// faq info:
export const useFaqInfo = () => {
  return useQuery({
    queryKey: ['faq-info'],
    queryFn: FaqsFunc,
  });
};

// social info:
export const useSocialInfo = () => {
  return useQuery({
    queryKey: ['social-info'],
    queryFn: SocialLinksFunc,
  });
};
