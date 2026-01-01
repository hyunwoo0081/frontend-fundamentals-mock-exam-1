import { createContext, useState, useContext, ReactNode } from 'react';
import { getLocaleString } from '../utils/formatters.ts';

interface InputsState {
  targetAmount: string;
  monthlyDeposit: string;
  savingPeriod: number;
}

interface InputsContextType extends InputsState {
  setTargetAmount: (value: string) => void;
  setMonthlyDeposit: (value: string) => void;
  setSavingPeriod: (value: number) => void;
}

const DEFAULT_INPUTS = {
  targetAmount: '',
  monthlyDeposit: '',
  savingPeriod: 12,
};

const InputsContext = createContext<InputsContextType | null>(null);

export function InputsProvider({ children }: { children: ReactNode }) {
  const [targetAmount, setTargetAmountData] = useState<string>(DEFAULT_INPUTS.targetAmount);
  const [monthlyDeposit, setMonthlyDepositData] = useState<string>(DEFAULT_INPUTS.monthlyDeposit);
  const [savingPeriod, setSavingPeriodData] = useState<number>(DEFAULT_INPUTS.savingPeriod);

  const setTargetAmount = (value: string) => {
    setTargetAmountData(getLocaleString(value));
  };

  const setMonthlyDeposit = (value: string) => {
    setMonthlyDepositData(getLocaleString(value));
  };

  const setSavingPeriod = (value: number) => {
    setSavingPeriodData(value);
  };

  return (
    <InputsContext.Provider
      value={{
        targetAmount,
        setTargetAmount,
        monthlyDeposit,
        setMonthlyDeposit,
        savingPeriod,
        setSavingPeriod,
      }}
    >
      {children}
    </InputsContext.Provider>
  );
}

export function useInputs() {
  const context = useContext(InputsContext);
  if (!context) {
    throw new Error('useInputs must be used within a InputsProvider');
  }
  return context;
}
