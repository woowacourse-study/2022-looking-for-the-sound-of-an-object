export const DISPENSER_TIME_INTERVAL = 500;

export const INSERT_MONEY_RANGE = {
  MIN: 100,
  MAX: 50000,
};

// key와 NAME은 같아야 함
export const DRINKS = {
  MILK: {
    NAME: "MILK",
    PRICE: 1000,
    ACTION: ["컵", "우유", "우유 나왔습니다~ :D"],
  },
  ESPRESSO: {
    NAME: "ESPRESSO",
    PRICE: 1000,
    ACTION: ["컵", "에스프레소", "에스프레소 나왔습니다~ :D"],
  },
  AMERICANO: {
    NAME: "AMERICANO",
    PRICE: 1500,
    ACTION: ["컵", "에스프레소", "뜨거운 물", "아메리카노 나왔습니다~ :D"],
  },
  CAFELATTE: {
    NAME: "CAFELATTE",
    PRICE: 2000,
    ACTION: ["컵", "우유", "에스프레소", "카페라떼 나왔습니다~:D"],
  },
};

export const COIN_UNIT = {
  500: 500,
  100: 100,
  50: 50,
  10: 10,
};
