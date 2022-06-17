import React from 'react';
import { TCoin, CoinUnit } from 'type';
import { NUMBER_VALUE, MESSAGE } from 'constant';

export const validateMoney = (money: number) => {
  if (money <= NUMBER_VALUE.MINIMUM_MONEY)
    throw new Error(MESSAGE.MINIMUM_MONEY);
  if (money % NUMBER_VALUE.DIVISIBLE_NUMBER)
    throw new Error(MESSAGE.DIVISIBLE_NUMBER);
};

export const clearAllTimers = (timers: number[]) => {
  timers.forEach((timer) => clearTimeout(timer));
};

export const isNumber = (value: string) => {
  return !Number.isNaN(+value);
};

export const handleEnterEvent =
  (cb: Function) => (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return;
    cb();
  };

export const changeCoins = (money: number): TCoin => {
  const changes: TCoin = { 500: 0, 100: 0, 50: 0, 10: 0 };

  let index = 0;
  while (money > 0) {
    if (money < CoinUnit[index]) index += 1;
    money -= CoinUnit[index];
    changes[CoinUnit[index]] += 1;
  }

  return changes;
};
