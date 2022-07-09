import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  cardState,
  changeState,
  dispenserState,
  guideState,
} from 'recoil/states';

import { DISPENSER_STATE } from 'constants/dispenser';

import * as S from './index.styled';
import { Props } from './index.type';

function MenuButton({ drink: { name, price, ingredients } }: Props) {
  const setGuideMessage = useSetRecoilState(guideState);
  const [change, setChange] = useRecoilState(changeState);
  const [card, setCard] = useRecoilState(cardState);
  const [dispenser, setDispenser] = useRecoilState(dispenserState);

  const showMaking = () => {
    ingredients.forEach((ingredient, index) => {
      setTimeout(() => {
        setGuideMessage(`${ingredient}가(이) 나옵니다.`);
      }, 1000 * (index + 1));
    });

    setTimeout(() => {
      setGuideMessage(`${name} 제조가 완료되었습니다.`);
      setDispenser(DISPENSER_STATE.EMPTY);
      setCard(false);
    }, 1000 * (ingredients.length + 1));
  };

  const orderMenu = () => {
    if (dispenser === DISPENSER_STATE.MAKING) {
      alert('음료 제조가 끝난 후 주문해주세요.');
      return;
    }

    if (!card) {
      setChange(prevState => prevState - price);
    }

    setGuideMessage('음료 제조를 시작합니다.');
    setDispenser(DISPENSER_STATE.MAKING);

    showMaking();
  };

  return (
    <S.MenuButton>
      <S.Label>
        {name}
        <p>{price}원</p>
      </S.Label>
      <S.Button
        type="button"
        onClick={orderMenu}
        disabled={!card && price > change}
      />
    </S.MenuButton>
  );
}

export default MenuButton;
