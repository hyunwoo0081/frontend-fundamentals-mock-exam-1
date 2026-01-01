import { Border, NavigationBar, Spacing } from 'tosslib';
import InputForm from '../components/InputForm.tsx';
import { InputsProvider } from '../hooks/InputsContext.tsx';
import BottomWidget from '../widgets/BottomWidget.tsx';

export function SavingsCalculatorPage() {
  return (
    <InputsProvider>
      <NavigationBar title="적금 계산기" />

      <Spacing size={16} />

      <InputForm />

      <Spacing size={24} />
      <Border height={16} />
      <Spacing size={8} />

      <BottomWidget />
    </InputsProvider>
  );
}
