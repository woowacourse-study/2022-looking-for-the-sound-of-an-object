import { Drink } from 'types';

export interface Props {
  drink: Omit<Drink, 'ingredients'> & { ingredients: readonly String[] };
}
