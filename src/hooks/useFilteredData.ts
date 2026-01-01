import { ProductData } from './useProductData.tsx';
import { useInputs } from './InputsContext.tsx';
import { toNumber } from '../utils/formatters.ts';

interface IFilteredData {
  data: ProductData[];
}

function useFilteredData({ data }: IFilteredData) {
  const { targetAmount, monthlyDeposit, savingPeriod } = useInputs();

  if (toNumber(targetAmount) === 0 || toNumber(monthlyDeposit) === 0) {
    return { data };
  }

  const filteredData = data?.filter(product => {
    const meetsMinAmount = product.minMonthlyAmount <= toNumber(monthlyDeposit);
    const meetsMaxAmount = product.maxMonthlyAmount >= toNumber(monthlyDeposit);
    const meetsTerm = product.availableTerms === Number(savingPeriod);
    return meetsMinAmount && meetsMaxAmount && meetsTerm;
  });

  return { data: filteredData };
}

export default useFilteredData;
