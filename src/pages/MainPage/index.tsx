import Change from 'components/Change';
import Menu from 'components/Menu';
import { useRecoilState } from 'recoil';
import { dispenserState, guideState } from 'recoil/states';

import { DISPENSER_STATE } from 'constants/dispenser';

import * as S from './index.styled';

function MainPage() {
  const [guiding, setGuiding] = useRecoilState(guideState);
  const [dispenser, setDispenser] = useRecoilState(dispenserState);

  return (
    <S.VendingMachine>
      <Menu />
      <S.Guiding>{guiding}</S.Guiding>
      <Change />
      <S.DispenserContainer>
        <S.Light making={dispenser === DISPENSER_STATE.MAKING} />
        <S.Dispenser />
      </S.DispenserContainer>
    </S.VendingMachine>
  );
}

export default MainPage;
