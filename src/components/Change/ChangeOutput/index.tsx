import { useState } from 'react';

import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { changeState, dispenserState, guideState } from 'recoil/states';
import { Coin, ReturnCoin } from 'types';
import { formatNumber } from 'utils/formatter';

import { DISPENSER_STATE } from 'constants/dispenser';

import * as S from './index.styled';

const returnCoinsInitialState = {
  500: 0,
  100: 0,
  50: 0,
  10: 0,
};

function ChangeOutput() {
  const setGuideMessage = useSetRecoilState(guideState);
  const [change, setChange] = useRecoilState(changeState);
  const dispenser = useRecoilValue(dispenserState);
  const [returnCoins, setReturnCoins] = useState<ReturnCoin>(
    returnCoinsInitialState
  );

  const makeReturnCoins = () => {
    const newReturnCoins = Object.assign(returnCoinsInitialState);

    (Object.keys(returnCoins) as unknown as Coin[])
      .reverse()
      .forEach(coinType => {
        setChange(prevState => {
          newReturnCoins[coinType] = parseInt(
            (prevState / coinType).toString(),
            10
          );
          return prevState % coinType;
        });
      });

    setReturnCoins(newReturnCoins);
  };

  const returnChange = () => {
    if (dispenser === DISPENSER_STATE.MAKING) {
      alert('음료 제조가 끝난 후 반환해주세요.');
      return;
    }

    if (!window.confirm('반환하시겠습니까?')) return;

    makeReturnCoins();
    setChange(0);

    setGuideMessage('반환되었습니다.');
  };

  return (
    <S.ChangeContainer>
      <S.Change>{formatNumber(change)}</S.Change>
      <S.ReturnButton type="button" onClick={returnChange}>
        반환
      </S.ReturnButton>
      <S.ReturnCoinTable>
        <tbody>
          {(Object.keys(returnCoins).reverse() as unknown as Coin[]).map(
            coinType => (
              <tr key={coinType}>
                <td>{coinType}원</td>
                <td>{returnCoins[coinType]}개</td>
              </tr>
            )
          )}
        </tbody>
      </S.ReturnCoinTable>
    </S.ChangeContainer>
  );
}

export default ChangeOutput;
