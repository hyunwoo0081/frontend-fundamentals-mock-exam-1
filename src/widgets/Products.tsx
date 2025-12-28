import FilteredList from '../components/FilteredList.tsx';
import { Spacing } from 'tosslib';
import { Suspense } from 'react';

function Products() {
  return (
    <>
      <Suspense fallback={null}>
        <FilteredList />
      </Suspense>
      <Spacing size={8} />
    </>
  );
}

export default Products;
