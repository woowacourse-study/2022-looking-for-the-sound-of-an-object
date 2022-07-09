import React from 'react';

import { useRecoilState, useSetRecoilState } from 'recoil';
import { cardState, changeState, guideState } from 'recoil/states';
import { validateChangeInput } from 'utils/validator';

import { CHANGE_RULES } from 'constants/rules';

import * as S from './index.styled';

function ChangeInput() {
  const setGuideMessage = useSetRecoilState(guideState);
  const setChange = useSetRecoilState(changeState);
  const [card, setCard] = useRecoilState(cardState);

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

  const activeCard = () => {
    setCard(true);
  };

  return (
    <S.ChangeContainer>
      <S.ChangeInputForm onSubmit={tryInjectChange}>
        <input
          type="number"
          min={CHANGE_RULES.MIN}
          max={CHANGE_RULES.MAX}
          step={CHANGE_RULES.UNIT}
          autoFocus
        />
        <button>투입</button>
      </S.ChangeInputForm>
      <S.Card isActive={card} onClick={activeCard}>
        {card ? '인식되었습니다.' : '누르면 인식됩니다.'}
      </S.Card>
    </S.ChangeContainer>
  );
}

export default ChangeInput;
