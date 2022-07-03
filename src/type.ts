import menus from "./constants/menus";

type Menu = keyof typeof menus;

interface CustomerCharge {
  value: number;
  returnedChangeValue: number;
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
