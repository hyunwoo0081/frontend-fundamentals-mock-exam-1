import { ListRow } from 'tosslib';
import { useProductData } from '../hooks/useProductData.tsx';
import ProductItem from './ProductItem.tsx';
import useRecommendData from '../hooks/useRecommendData.ts';

function RecommendList() {
  const { data } = useRecommendData(useProductData());

  if (!data || !data.length) {
    return <ListRow contents={<ListRow.Texts type="1RowTypeA" top="상품이 없습니다" />} />;
  }

  return data.map(product => <ProductItem key={product.id} product={product} />);
}

export default RecommendList;
