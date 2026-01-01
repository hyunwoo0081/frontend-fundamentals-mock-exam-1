export function expectProfit(monthlyDeposit: number, periodMonths: number, annualInterestRate: number): number {
  //만기 금액 = 월 납입액 * 기간 * (1 + (연 이자율 / 100) * 0.5
  const monthlyInterestRate = 1 + annualInterestRate / 100;
  const maturityAmount = monthlyDeposit * periodMonths * monthlyInterestRate;

  return Math.floor(maturityAmount + 0.5);
}

export function differenceAmount(initialAmount: number, finalAmount: number): number {
  return finalAmount - initialAmount;
}

export function recommendedMonthlyDeposit(
  targetAmount: number,
  periodMonths: number,
  annualInterestRate: number
): number {
  // 목표 금액 / (기간 * (1 + (연 이자율 / 100) * 0.5))
  // 1000원 단위로 반올림

  const monthlyInterestRate = 1 + annualInterestRate / 100;
  const recommendedDeposit = targetAmount / (periodMonths * monthlyInterestRate);

  return Math.ceil(recommendedDeposit / 1000) * 1000;
}
