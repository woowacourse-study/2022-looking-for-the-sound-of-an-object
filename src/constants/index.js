export const DISPENSER_TIME_INTERVAL = 500;

export const INSERT_MONEY_RANGE = {
  MIN: 100,
  MAX: 50000,
};

export const DRINKS = {
  MILK: {
    NAME: "우유",
    PRICE: 1000,
    ACTION: ["컵", "우유", "우유 나왔습니다~ :D"],
  },
  ESPRESSO: {
    NAME: "에스프레소",
    PRICE: 1000,
    ACTION: ["컵", "에스프레소", "에스프레소 나왔습니다~ :D"],
  },
  AMERICANO: {
    NAME: "아메리카노",
    PRICE: 1500,
    ACTION: ["컵", "에스프레소", "뜨거운 물", "아메리카노 나왔습니다~ :D"],
  },
  CAFELATTE: {
    NAME: "카페라떼",
    PRICE: 2000,
    ACTION: ["컵", "우유", "에스프레소", "카페라떼 나왔습니다~:D"],
  },
  COKE: {
    NAME: "콜라",
    PRICE: 1200,
    ACTION: ["컵", "콜라", "콜라 나왔습니다~:D"],
  },
  SODA: {
    NAME: "사이다",
    PRICE: 1300,
    ACTION: ["컵", "사이다", "사이다 나왔습니다~:D"],
  },
};

export const COIN_UNIT = {
  500: 500,
  100: 100,
  50: 50,
  10: 10,
};
