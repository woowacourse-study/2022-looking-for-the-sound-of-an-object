import menus from "./constants/menus";

type Menu = keyof typeof menus;

interface CoinCountList {
  coin_500: number;
  coin_100: number;
  coin_50: number;
  coin_10: number;
}

interface CustomerCharge {
  value: number;
  returnedCoin: CoinCountList;
}

interface Order {
  progress: string;
  orderedMenu: Menu | null;
}

interface Drink {
  name: string;
  price: number;
  ingredients: string[];
}

export { Menu, CustomerCharge, Order, Drink };
