import { TBeverageInfo } from 'type';

export const NUMBER_VALUE = {
  ORDER_DELAY_TIME: 1000,
  MINIMUM_MONEY: 0,
  DIVISIBLE_NUMBER: 10,
} as const;

export const MESSAGE = {
  MINIMUM_MONEY: '돈을 제대로 넣어주세요!',
  DIVISIBLE_NUMBER: '10원으로 나누어떨어지는 금액만 입력 가능합니다!',
} as const;

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
  {
    id: 5,
    name: '콜라',
    price: 1500,
    ingredients: [
      { name: '컵', time: 1000 },
      { name: '콜라', time: 1000 },
    ],
  },
  {
    id: 6,
    name: '사이다',
    price: 1500,
    ingredients: [
      { name: '컵', time: 1000 },
      { name: '사이다', time: 1000 },
    ],
  },
];

export const VENDING_MACHINE_STATUS = {
  SERVING: 'SERVING',
  SERVED: 'SERVED',
  REST: 'REST',
} as const;
