import { useRecoilState } from 'recoil';
import { changeState, guideState } from 'recoil/states';
import { formatNumber } from 'utils';

import * as S from './index.styled';

function ChangeOutput() {
  const [guideMessage, setGuideMessage] = useRecoilState(guideState);
  const [change, setChange] = useRecoilState(changeState);

  const returnChange = () => {
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
