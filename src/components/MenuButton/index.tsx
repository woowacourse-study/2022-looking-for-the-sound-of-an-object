import { useRecoilState } from 'recoil';
import { changeState, dispenserState, guideState } from 'recoil/states';

import { DISPENSER_STATE } from 'constants/dispenser';

import * as S from './index.styled';
import { Props } from './index.type';

function MenuButton({ drink: { name, price, ingredients } }: Props) {
  const [guideMessage, setGuideMessage] = useRecoilState(guideState);
  const [change, setChange] = useRecoilState(changeState);
  const [dispenser, setDispenser] = useRecoilState(dispenserState);

  const orderMenu = () => {
    try {
      if (dispenser === DISPENSER_STATE.MAKING) {
        throw new Error('음료 제조가 끝난 후 주문해주세요.');
      }
      if (price > change) {
        throw new Error('돈이 부족합니다.');
      }
    } catch ({ message }) {
      alert(message);
      return;
    }

    setChange(prevState => prevState - price);

    setGuideMessage('음료 제조를 시작합니다.');
    setDispenser(DISPENSER_STATE.MAKING);

    ingredients.forEach((ingredient, index) => {
      setTimeout(() => {
        setGuideMessage(`${ingredient}가(이) 나옵니다.`);
      }, 1000 * (index + 1));
    });

    setTimeout(() => {
      setGuideMessage(`${name} 제조가 완료되었습니다.`);
      setDispenser(DISPENSER_STATE.EMPTY);
    }, 1000 * (ingredients.length + 1));
  };

  return (
    <S.MenuButton>
      <S.Label>
        {name}
        <br />({price}원)
      </S.Label>
      <S.Button type="button" onClick={orderMenu} disabled={price > change} />
    </S.MenuButton>
  );
}

export default MenuButton;
