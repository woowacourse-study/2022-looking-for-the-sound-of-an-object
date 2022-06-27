const drinks = [
  "에스프레소",
  "아메리카노",
  "카페라떼",
  "우유",
  "콜라",
  "사이다",
];

export type DrinkType =
  | "에스프레소"
  | "아메리카노"
  | "카페라떼"
  | "우유"
  | "콜라"
  | "사이다";

type MenuType = {
  icon: string;
  price: number;
};

const menus: Record<DrinkType, MenuType> = {
  에스프레소: { icon: "☕️", price: 3000 },
  아메리카노: { icon: "☕️", price: 4100 },
  카페라떼: { icon: "☕️", price: 4500 },
  우유: { icon: "🥛", price: 3500 },
  콜라: { icon: "🥤", price: 2000 },
  사이다: { icon: "🥤", price: 1800 },
};

const recipes: Record<DrinkType, Array<string>> = {
  에스프레소: ["🥤 컵 나옴", "☕️ 에스프레소 나옴", "☕️ 에스프레소 완성"],
  아메리카노: [
    "🥤 컵 나옴",
    "☕️ 에스프레소 나옴",
    "💧 물 나옴",
    "☕️ 아메리카노 완성",
  ],
  카페라떼: [
    "🥤 컵 나옴",
    "☕️ 에스프레소 나옴",
    "🥛 우유 나옴",
    "☕️ 카페라떼 완성",
  ],
  우유: ["🥤 컵 나옴", "🥛 우유 나옴", " 🥛우유 완성"],
  콜라: ["🥤 컵 나옴", "🥤 콜라 완성"],
  사이다: ["🥤 컵 나옴", "🥤 사이다 완성"],
};

const STATUS = {
  READY: "READY",
  WORKING: "WORKING",
} as const;

export { drinks, menus, recipes, STATUS };
