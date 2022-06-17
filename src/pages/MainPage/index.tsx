import Menu from 'components/Menu';
import { useRecoilState } from 'recoil';
import { changeState, dispenserState, guideState } from 'recoil/states';

import { DISPENSER_STATE } from 'constants/dispenser';

import * as S from './index.styled';

function MainPage() {
  const [guiding, setGuiding] = useRecoilState(guideState);
  const [change, setChange] = useRecoilState(changeState);
  const [dispenser, setDispenser] = useRecoilState(dispenserState);

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

  const returnChange = () => {
    if (!window.confirm('반환하시겠습니까?')) return;

    setChange(0);

    setGuiding('반환되었습니다.');
  };

  return (
    <S.VendingMachine>
      <Menu />
      <S.Guiding>{guiding}</S.Guiding>
      <S.MoneyInputForm onSubmit={chargeChange}>
        <input type="number" />
        <button>투입</button>
      </S.MoneyInputForm>
      <S.ChangeContainer>
        <div>{change.toLocaleString('ko-KR')}</div>
        <button type="button" onClick={returnChange}>
          반환
        </button>
      </S.ChangeContainer>
      <S.DispenserContainer>
        <S.Light making={dispenser === DISPENSER_STATE.MAKING} />
        <S.Dispenser />
      </S.DispenserContainer>
    </S.VendingMachine>
  );
}

export default MainPage;
