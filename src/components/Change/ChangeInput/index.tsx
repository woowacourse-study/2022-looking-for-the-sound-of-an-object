import React from 'react';

import { useSetRecoilState } from 'recoil';
import { changeState, guideState } from 'recoil/states';
import { validateChangeInput } from 'utils/validator';

import * as S from './index.styled';

function ChangeInput() {
  const setGuideMessage = useSetRecoilState(guideState);
  const setChange = useSetRecoilState(changeState);

  const successToInject = (money: number, input: HTMLInputElement) => {
    setChange(prevState => prevState + money);

    setGuideMessage('투입되었습니다.');

    input.value = '';
  };

  const tryInjectChange = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !(e.target instanceof HTMLFormElement) ||
      !(e.target.elements[0] instanceof HTMLInputElement)
    )
      return;

    const input = e.target.elements[0];
    const money = input.valueAsNumber;

    try {
      validateChangeInput(money);
    } catch ({ message }) {
      alert(message);
      return;
    }

    successToInject(money, input);
  };

  return (
    <S.ChangeInputForm onSubmit={tryInjectChange}>
      <input type="number" min="500" max="999999500" autoFocus />
      <button>투입</button>
    </S.ChangeInputForm>
  );
}

export default ChangeInput;
