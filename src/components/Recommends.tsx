import { ListHeader, Spacing } from 'tosslib';
import RecommendList from './RecommendList.tsx';

function Recommends() {
  return (
    <>
      <ListHeader title={<ListHeader.TitleParagraph fontWeight="bold">추천 상품 목록</ListHeader.TitleParagraph>} />
      <Spacing size={12} />

      <RecommendList />
    </>
  );
}

export default Recommends;
