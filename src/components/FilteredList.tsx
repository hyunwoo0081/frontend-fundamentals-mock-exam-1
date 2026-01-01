import { ListRow } from 'tosslib';
import { useData } from '../hooks/useData.tsx';
import useFilteredData from '../hooks/useFilteredData.ts';
import useSortedData from '../hooks/useSortedData.ts';
import ProductItem from './ProductItem.tsx';

function FilteredList() {
  const { data } = useSortedData(useFilteredData(useData()));

  if (!data || !data.length) {
    return <ListRow contents={<ListRow.Texts type="1RowTypeA" top="상품이 없습니다" />} />;
  }

  return data.map(product => <ProductItem key={product.id} product={product} />);
}

export default FilteredList;
