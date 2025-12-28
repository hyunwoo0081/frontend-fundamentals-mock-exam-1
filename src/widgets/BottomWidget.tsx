import { Tab } from 'tosslib';
import Result from './Result.tsx';
import Products from './Products.tsx';
import { useState } from 'react';
import { SelectedProductProvider } from '../hooks/SelectedProductContext.tsx';

function BottomWidget() {
  const [tab, setTab] = useState('products');

  return (
    <SelectedProductProvider>
      <Tab onChange={setTab}>
        <Tab.Item value="products" selected={tab === 'products'}>
          적금 상품
        </Tab.Item>
        <Tab.Item value="results" selected={tab === 'results'}>
          계산 결과
        </Tab.Item>
      </Tab>

      {tab === 'products' ? <Products /> : <Result />}
    </SelectedProductProvider>
  );
}

export default BottomWidget;
