import { Border, NavigationBar, Spacing, Tab } from 'tosslib';
import InputForm from '../components/InputForm.tsx';
import Result from '../widgets/Result.tsx';
import Products from '../widgets/Products.tsx';
import { InputsProvider } from '../hooks/InputsContext.tsx';

export function SavingsCalculatorPage() {
  return (
    <InputsProvider>
      <NavigationBar title="적금 계산기" />

      <Spacing size={16} />

      <InputForm />

      <Spacing size={24} />
      <Border height={16} />
      <Spacing size={8} />

      <Tab onChange={() => {}}>
        <Tab.Item value="products" selected={true}>
          적금 상품
        </Tab.Item>
        <Tab.Item value="results" selected={false}>
          계산 결과
        </Tab.Item>
      </Tab>

      <Products />
      <Result />
    </InputsProvider>
  );
}
