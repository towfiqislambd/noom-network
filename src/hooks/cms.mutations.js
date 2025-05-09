import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  ContactUsFunc,
  CreatePropertyFunc,
  SubscriptionPlanFunc,
} from './cms.api';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

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
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['subscription-plan'],
    mutationFn: (payload) => SubscriptionPlanFunc(payload),
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: (data) => {
       queryClient.invalidateQueries(["notification"]);
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

// create properties:
export const useCreateProperty = (setLoading) => {
  const navigate = useNavigate();
   const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['create-property'],
    mutationFn: (payload) => CreatePropertyFunc(payload),
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: () => {
       queryClient.invalidateQueries(["notification"]);
      setLoading(false);
      navigate('/dashboard/myProperty');
      toast.success('Property created successfully');
    },
    onError: (err) => {
      setLoading(false);
      toast.error(err?.response?.data?.message);
    },
  });
};
