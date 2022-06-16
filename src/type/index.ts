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
