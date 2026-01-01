import { ProductData } from './useData.tsx';

interface ISortedDataProps {
  data: ProductData[];
}

function useSortedData({ data }: ISortedDataProps) {
  data.sort((a, b) => b.annualRate - a.annualRate);
  return { data };
}

export default useSortedData;
