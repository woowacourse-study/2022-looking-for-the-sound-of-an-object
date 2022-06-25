interface CustomerCharge {
  value: number;
  returnedChangeValue: number;
}

interface Order {
  progress: string;
  orderedMenu: string | null;
}

interface Drink {
  name: string;
  price: number;
  ingredients: string[];
}

export { CustomerCharge, Order, Drink };
