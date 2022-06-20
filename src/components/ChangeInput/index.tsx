import React from 'react';

import { useRecoilState } from 'recoil';
import { changeState, guideState } from 'recoil/states';
import { validateChangeInput } from 'utils/validator';

import * as S from './index.styled';

function ChangeInput() {
  const [guideMessage, setGuideMessage] = useRecoilState(guideState);
  const [change, setChange] = useRecoilState(changeState);

  const chargeChange = (e: React.FormEvent) => {
    e.preventDefault();

    if (!(e.target instanceof HTMLFormElement)) return;

    const money = (e.target.elements[0] as HTMLInputElement).valueAsNumber;

    try {
      validateChangeInput(money);
    } catch ({ message }) {
      alert(message);
      return;
    }

    setChange(prevState => prevState + money);

    setGuideMessage('투입되었습니다.');
  };

  return (
    <S.ChangeInputForm onSubmit={chargeChange}>
      <input type="number" />
      <button>투입</button>
    </S.ChangeInputForm>
  );
}

export default ChangeInput;
