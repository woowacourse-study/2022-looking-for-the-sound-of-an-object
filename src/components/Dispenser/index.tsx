import React, { useEffect, useState } from 'react';
import { TMenuInfo } from 'type';
import { NUMBER_VALUE } from 'constant';
import { clearAllTimers } from 'utils';
import * as S from './style';

const timers: NodeJS.Timeout[] = [];
interface Props {
  orderedMenu?: TMenuInfo;
  handleSetFinished: Function;
}

const Dispenser = ({ orderedMenu, handleSetFinished }: Props) => {
  const [finished, setFinished] = useState('');
  const [ingredients, setIngredients] = useState<string[]>([]);

  useEffect(() => {
    if (!orderedMenu) {
      setFinished('');
      setIngredients([]);
      clearAllTimers(timers);
      return;
    }

    let totalTime = 0;

    orderedMenu.ingredients.forEach(({ name, time }) => {
      totalTime += time;
      timers.push(
        setTimeout(() => {
          setIngredients((prevState) => [name, ...prevState]);
        }, totalTime),
      );
    });

    timers.push(
      setTimeout(() => {
        setFinished(orderedMenu.name);
        handleSetFinished();
      }, totalTime + NUMBER_VALUE.ORDER_DELAY_TIME),
    );
  }, [orderedMenu]);

  useEffect(() => {
    return () => clearAllTimers(timers);
  }, []);

  return (
    <S.Container>
      {finished && <S.Box>{finished} 나왔습니다 손님! 😆 </S.Box>}
      {ingredients.map((name, index) => (
        <S.Box key={index}>{name} 👩🏻‍🍳 </S.Box>
      ))}
    </S.Container>
  );
};

export default React.memo(Dispenser);
