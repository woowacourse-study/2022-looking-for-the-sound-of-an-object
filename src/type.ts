import menus from "./constants/menus";

interface CustomerCharge {
  value: number;
  returnedChangeValue: number;
}

interface Order {
  progress: string;
  orderedMenu: keyof typeof menus | null;
}

interface Drink {
  name: string;
  price: number;
  ingredients: string[];
}

export { CustomerCharge, Order, Drink };
