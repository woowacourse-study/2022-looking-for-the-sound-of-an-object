import { useRecoilValue } from 'recoil';
import { guideState } from 'recoil/states';

import * as S from './index.styled';

function GuideMessage() {
  const guideMessage = useRecoilValue(guideState);

  return (
    <S.GuideMessageWrapper>
      <S.GuideMessage>{guideMessage}</S.GuideMessage>
    </S.GuideMessageWrapper>
  );
}

export default GuideMessage;
