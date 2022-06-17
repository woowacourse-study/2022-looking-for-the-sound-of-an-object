import React from 'react';

import { useRecoilState } from 'recoil';
import { changeState, guideState } from 'recoil/states';

import * as S from './index.styled';

function ChangeInput() {
  const [guiding, setGuiding] = useRecoilState(guideState);
  const [change, setChange] = useRecoilState(changeState);

  const chargeChange = (e: React.FormEvent) => {
    e.preventDefault();

    if (!(e.target instanceof HTMLFormElement)) return;

    const money = (e.target.elements[0] as HTMLInputElement).valueAsNumber;

    if (!money || money % 500 !== 0) {
      alert('500원 단위로 입력해주세요.');
      return;
    }

    setChange(prevState => prevState + money);

    setGuiding('투입되었습니다.');
  };

  return (
    <S.ChangeInputForm onSubmit={chargeChange}>
      <input type="number" />
      <button>투입</button>
    </S.ChangeInputForm>
  );
}

export default ChangeInput;
