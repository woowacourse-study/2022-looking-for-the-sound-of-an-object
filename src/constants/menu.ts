const menu = [
  {
    name: '에스프레소',
    price: 1000,
    ingredients: ['에스프레소'],
  },
  {
    name: '아메리카노',
    price: 1500,
    ingredients: ['에스프레소', '뜨거운 물'],
  },
  {
    name: '카페라떼',
    price: 2000,
    ingredients: ['우유', '에스프레소'],
  },
  {
    name: '우유',
    price: 1000,
    ingredients: ['우유'],
  },
] as const;

export default menu;
