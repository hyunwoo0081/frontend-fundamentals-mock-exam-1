import { Border, Spacing } from 'tosslib';
import Recommends from '../components/Recommends.tsx';
import CalcResult from '../components/CalcResult.tsx';

function Result() {
  return (
    <>
      <CalcResult />

      <Spacing size={8} />
      <Border height={16} />
      <Spacing size={8} />

      <Recommends />

      <Spacing size={40} />
    </>
  );
}

export default Result;
