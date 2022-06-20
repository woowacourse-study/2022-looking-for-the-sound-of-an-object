import { useRecoilState } from 'recoil';
import { dispenserState } from 'recoil/states';

import { DISPENSER_STATE } from 'constants/dispenser';

import * as S from './index.styled';

function Dispenser() {
  const [dispenser, setDispenser] = useRecoilState(dispenserState);

  return (
    <S.DispenserContainer>
      <S.Light isMaking={dispenser === DISPENSER_STATE.MAKING} />
      <S.Dispenser />
    </S.DispenserContainer>
  );
}

export default Dispenser;
