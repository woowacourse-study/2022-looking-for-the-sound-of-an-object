import React from 'react';

import { useSetRecoilState } from 'recoil';
import { changeState, guideState } from 'recoil/states';
import { validateChangeInput } from 'utils/validator';

import * as S from './index.styled';

function ChangeInput() {
  const setGuideMessage = useSetRecoilState(guideState);
  const setChange = useSetRecoilState(changeState);

  const chargeChange = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !(e.target instanceof HTMLFormElement) ||
      !(e.target.elements[0] instanceof HTMLInputElement)
    )
      return;

    const money = e.target.elements[0].valueAsNumber;

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
