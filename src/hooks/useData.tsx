import { useSuspenseQuery } from '@tanstack/react-query';

export function useData() {
  return useSuspenseQuery({
    queryKey: ['data'],
    queryFn: async () => {
      const res = await fetch('/api/savings-products');
      return res.json();
    },
  });
}
