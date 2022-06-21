import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { changeState, dispenserState, guideState } from 'recoil/states';
import { formatNumber } from 'utils/formatter';

import { DISPENSER_STATE } from 'constants/dispenser';

import * as S from './index.styled';

function ChangeOutput() {
  const setGuideMessage = useSetRecoilState(guideState);
  const [change, setChange] = useRecoilState(changeState);
  const dispenser = useRecoilValue(dispenserState);

  const returnChange = () => {
    if (dispenser === DISPENSER_STATE.MAKING) {
      alert('음료 제조가 끝난 후 반환해주세요.');
      return;
    }

    if (!window.confirm('반환하시겠습니까?')) return;

    setChange(0);

    setGuideMessage('반환되었습니다.');
  };

  return (
    <S.ChangeContainer>
      <S.Change>{formatNumber(change)}</S.Change>
      <S.ReturnButton type="button" onClick={returnChange}>
        반환
      </S.ReturnButton>
    </S.ChangeContainer>
  );
}

export default ChangeOutput;
