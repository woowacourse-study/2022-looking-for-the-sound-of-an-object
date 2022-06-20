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
  {
    name: '코카콜라',
    price: 2000,
    ingredients: ['코카콜라'],
  },
  {
    name: '펩시',
    price: 1500,
    ingredients: ['펩시'],
  },
  {
    name: '칠성사이다',
    price: 2000,
    ingredients: ['칠성사이다'],
  },
  {
    name: '스프라이트',
    price: 1500,
    ingredients: ['스프라이트'],
  },
] as const;

export default menu;
