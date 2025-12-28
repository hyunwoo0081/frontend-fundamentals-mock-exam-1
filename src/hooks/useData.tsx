import { useSuspenseQuery } from '@tanstack/react-query';

interface ProductData {
  annualRate: number;
  availableTerms: number;
  id: string;
  maxMonthlyAmount: number;
  minMonthlyAmount: number;
  name: string;
}

export function useData() {
  return useSuspenseQuery({
    queryKey: ['data'],
    queryFn: async (): Promise<ProductData[]> => {
      const res = await fetch('/api/savings-products');
      return res.json();
    },
  });
}
