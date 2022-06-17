type ErrorWithMessage = {
  message: string;
};

export const isErrorWithMessage = (
  error: unknown,
): error is ErrorWithMessage => {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof (error as Record<string, unknown>).message === 'string'
  );
};

export interface TIngredient {
  name: string;
  time: number;
}

export interface TBeverageInfo {
  id: number;
  name: string;
  price: number;
  ingredients: TIngredient[];
}

export interface TMenuInfo {
  name: string;
  ingredients: TIngredient[];
}

export type TUnit = 500 | 100 | 50 | 10;

export const CoinUnit: TUnit[] = [500, 100, 50, 10];
export interface TCoin {
  500: number;
  100: number;
  50: number;
  10: number;
}

export type TVendingMachineStatus = 'SERVING' | 'SERVED' | 'REST';
