export interface Drink {
  name: string;
  price: number;
  ingredients: String[];
}

export type Coin = 500 | 100 | 50 | 10;

export type ReturnCoin = Record<Coin, number>;
