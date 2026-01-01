import { colors, ListRow } from 'tosslib';
import { useSelectedProduct } from '../hooks/SelectedProductContext.tsx';
import { getLocaleString, toNumber } from '../utils/formatters.ts';
import { differenceAmount, expectProfit, recommendedMonthlyDeposit } from '../utils/saving.ts';
import { useInputs } from '../hooks/InputsContext.tsx';

function CalcResult() {
  const { targetAmount, monthlyDeposit, savingPeriod } = useInputs();
  const { selectedProduct } = useSelectedProduct();

  if (!selectedProduct) {
    return <ListRow contents={<ListRow.Texts type="1RowTypeA" top="상품을 선택해주세요." />} />;
  }

  const expectedEarnings = expectProfit(toNumber(monthlyDeposit), savingPeriod, selectedProduct?.annualRate ?? 0);
  const difference = differenceAmount(toNumber(targetAmount), expectedEarnings);
  const recommendedDeposit = recommendedMonthlyDeposit(
    toNumber(targetAmount),
    savingPeriod,
    selectedProduct?.annualRate ?? 0
  );

  const expectedStr = getLocaleString(expectedEarnings);
  const differenceStr = (difference > 0 ? '+' : '') + getLocaleString(difference);
  const recommendedStr = getLocaleString(recommendedDeposit);

  return (
    <>
      <ListRow
        contents={
          <ListRow.Texts
            type="2RowTypeA"
            top="예상 수익 금액"
            topProps={{ color: colors.grey600 }}
            bottom={`${expectedStr}원`}
            bottomProps={{ fontWeight: 'bold', color: colors.blue600 }}
          />
        }
      />
      <ListRow
        contents={
          <ListRow.Texts
            type="2RowTypeA"
            top="목표 금액과의 차이"
            topProps={{ color: colors.grey600 }}
            bottom={`${differenceStr}원`}
            bottomProps={{ fontWeight: 'bold', color: colors.blue600 }}
          />
        }
      />
      <ListRow
        contents={
          <ListRow.Texts
            type="2RowTypeA"
            top="추천 월 납입 금액"
            topProps={{ color: colors.grey600 }}
            bottom={`${recommendedStr}원`}
            bottomProps={{ fontWeight: 'bold', color: colors.blue600 }}
          />
        }
      />
    </>
  );
}

export default CalcResult;
