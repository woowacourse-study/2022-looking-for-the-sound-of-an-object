import React from 'react';
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
