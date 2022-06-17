import Change from 'components/Change';
import Dispenser from 'components/Dispenser';
import GuideMessage from 'components/GuideMessage';
import Menu from 'components/Menu';

import * as S from './index.styled';

function MainPage() {
  return (
    <S.VendingMachine>
      <Menu />
      <GuideMessage />
      <Change />
      <Dispenser />
    </S.VendingMachine>
  );
}

export default MainPage;
