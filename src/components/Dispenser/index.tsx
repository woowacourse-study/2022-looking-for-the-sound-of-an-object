import React from 'react';
import * as S from './style';

interface Props {
  ingredients?: string[];
  finished?: string;
}

const Dispenser = ({ ingredients, finished }: Props) => {
  return (
    <S.Container>
      {finished && <S.Box>{finished} 나왔습니다 손님! 😆 </S.Box>}
      {ingredients?.map((name, index) => (
        <S.Box key={index}>{name} 👩🏻‍🍳 </S.Box>
      ))}
    </S.Container>
  );
};

export default React.memo(Dispenser);
