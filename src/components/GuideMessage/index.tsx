import { useRecoilState } from 'recoil';
import { guideState } from 'recoil/states';

import * as S from './index.styled';

function GuideMessage() {
  const [guideMessage, setGuideMessage] = useRecoilState(guideState);

  return <S.GuideMessage>{guideMessage}</S.GuideMessage>;
}

export default GuideMessage;
