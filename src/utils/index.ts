import { TBeverageInfo } from 'type';

export const BEVERAGE: TBeverageInfo[] = [
  {
    id: 0,
    name: '에스프레소',
    price: 600,
    ingredients: [
      { name: '컵', time: 1000 },
      { name: '에스프레소', time: 2000 },
    ],
  },
  {
    id: 1,
    name: '아메리카노',
    price: 1000,
    ingredients: [
      { name: '컵', time: 1000 },
      { name: '에스프레소', time: 2000 },
      { name: '뜨거운 물', time: 1000 },
    ],
  },
  {
    id: 3,
    name: '카페라떼',
    price: 2000,
    ingredients: [
      { name: '컵', time: 1000 },
      { name: '에스프레소', time: 2000 },
      { name: '우유', time: 1000 },
    ],
  },
  {
    id: 4,
    name: '우유',
    price: 1000,
    ingredients: [
      { name: '컵', time: 1000 },
      { name: '우유', time: 1000 },
    ],
  },
];

export const validateMoney = (money: number) => {
  if (money <= 0) throw new Error('돈을 제대로 넣어주세요!');
  if (money % 10)
    throw new Error('10원으로 나누어떨어지는 금액만 입력 가능합니다!');
};

export const clearAllTimers = (timers: number[]) => {
  timers.forEach((timer) => clearTimeout(timer));
};

export const isNumber = (value: string) => {
  return !Number.isNaN(+value);
};
