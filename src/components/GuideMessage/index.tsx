import { useRecoilState } from 'recoil';
import { guideState } from 'recoil/states';

import * as S from './index.styled';

function GuideMessage() {
  const [guiding, setGuiding] = useRecoilState(guideState);

  return <S.GuideMessage>{guiding}</S.GuideMessage>;
}

export default GuideMessage;
