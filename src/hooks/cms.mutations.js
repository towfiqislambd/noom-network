import { useMutation } from '@tanstack/react-query';
import { ContactUsFunc, SubscriptionPlanFunc } from './cms.api';
import toast from 'react-hot-toast';

export const useContactUs = (setLoading) => {
  return useMutation({
    mutationKey: ['contact-us'],
    mutationFn: (payload) => ContactUsFunc(payload),
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: () => {
      setLoading(false);
      toast.success('Your message has been sent');
    },
    onError: (err) => {
      setLoading(false);
      toast.error(err?.response?.data?.message);
    },
  });
};

// plan subscription::
export const useSubscriptionPlan = (setLoading) => {
  return useMutation({
    mutationKey: ['subscription-plan'],
    mutationFn: (payload) => SubscriptionPlanFunc(payload),
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: (data) => {
      console.log(data);
      setLoading(false);
      window.location.href = data;
      // toast.success('Your subscription plan has been updated');
    },
    onError: (err) => {
      setLoading(false);
      toast.error(err?.response?.data?.message);
    },
  });
};
