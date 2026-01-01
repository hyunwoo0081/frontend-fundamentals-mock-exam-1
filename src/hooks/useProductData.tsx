import { useSuspenseQuery } from '@tanstack/react-query';

export interface ProductData {
  annualRate: number;
  availableTerms: number;
  id: string;
  maxMonthlyAmount: number;
  minMonthlyAmount: number;
  name: string;
}

export function useProductData() {
  return useSuspenseQuery({
    queryKey: ['data'],
    queryFn: async (): Promise<ProductData[]> => {
      const res = await fetch('/api/savings-products');
      return res.json();
    },
  });
}
