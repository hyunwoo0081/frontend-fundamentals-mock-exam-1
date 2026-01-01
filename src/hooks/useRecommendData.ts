import { ProductData } from './useProductData.tsx';
import useSortedData from './useSortedData.ts';
import useFilteredData from './useFilteredData.ts';

interface IRecommendData {
  data: ProductData[];
}

const TOP_RECOMMEND_COUNT = 3;

function useRecommendData({ data }: IRecommendData) {
  const sortedData = useSortedData(useFilteredData({ data }));
  const recommendData = sortedData.data.slice(0, TOP_RECOMMEND_COUNT);

  return { data: recommendData };
}

export default useRecommendData;
