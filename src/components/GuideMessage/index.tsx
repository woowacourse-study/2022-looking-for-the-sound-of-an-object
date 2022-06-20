import { useRecoilState } from 'recoil';
import { guideState } from 'recoil/states';

import * as S from './index.styled';

function GuideMessage() {
  const [guideMessage, setGuideMessage] = useRecoilState(guideState);

  return (
    <S.GuideMessage>
      <span>{guideMessage}</span>
    </S.GuideMessage>
  );
}

export default GuideMessage;
