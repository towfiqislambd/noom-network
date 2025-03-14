import { useMutation } from '@tanstack/react-query';
import { ContactUsFunc } from './cms.api';
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
