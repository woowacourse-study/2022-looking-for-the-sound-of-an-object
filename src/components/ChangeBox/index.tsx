import React from 'react';
import { TCoin, CoinUnit } from 'type';
import * as S from './style';
interface Props {
  coins?: TCoin;
}

const ChangeBox = ({ coins }: Props) => {
  return (
    <S.Container>
      {coins &&
        CoinUnit.map((unit) => (
          <p key={unit}>
            🪙 {unit}원 {coins[unit]}개
          </p>
        ))}
    </S.Container>
  );
};

export default React.memo(ChangeBox);
