import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export function useSubmitContactInquiry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: ContactFormData) => {
      if (!actor) {
        throw new Error('Backend actor not available');
      }
      
      await actor.submitContactForm(data.name, data.email, data.message);
    },
    onSuccess: () => {
      // Invalidate any queries that might list inquiries (for future admin panel)
      queryClient.invalidateQueries({ queryKey: ['inquiries'] });
    },
    onError: (error: any) => {
      console.error('Failed to submit contact form:', error);
    }
  });
}
