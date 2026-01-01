import { Assets, colors, ListRow } from 'tosslib';
import { ProductData } from '../hooks/useProductData.tsx';
import { getLocaleString } from '../utils/formatters.ts';
import { useSelectedProduct } from '../hooks/SelectedProductContext.tsx';

interface IProductItemProps {
  product: ProductData;
}

function ProductItem({ product }: IProductItemProps) {
  const { selectedProduct, setSelectedProduct } = useSelectedProduct();

  return (
    <>
      <ListRow
        contents={
          <ListRow.Texts
            type="3RowTypeA"
            top={product.name}
            topProps={{ fontSize: 16, fontWeight: 'bold', color: colors.grey900 }}
            middle={`연 이자율: ${product.annualRate}%`}
            middleProps={{ fontSize: 14, color: colors.blue600, fontWeight: 'medium' }}
            bottom={`${getLocaleString(product.minMonthlyAmount)}원 ~ ${getLocaleString(product.maxMonthlyAmount)}원 | ${product.availableTerms}개월`}
            bottomProps={{ fontSize: 13, color: colors.grey600 }}
          />
        }
        right={selectedProduct?.id === product.id ? <Assets.Icon name="icon-check-circle-green" /> : null}
        onClick={() => setSelectedProduct(product)}
      />
    </>
  );
}

export default ProductItem;
