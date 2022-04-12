import { SERVE_COFFEE_DELAY_TIME } from './constants';

const serveCoffee = () => {
  const $coffeeDispenserContainer = document.querySelector('.coffee-dispenser');
  let isExistCoffee = null;
  return drinkName => {
    if (isExistCoffee) return;
    $coffeeDispenserContainer.textContent = drinkName;

    isExistCoffee = setTimeout(() => {
      $coffeeDispenserContainer.textContent = '';
      clearTimeout(isExistCoffee);
      isExistCoffee = null;
    }, SERVE_COFFEE_DELAY_TIME);
  };
};

export const showServeCoffee = serveCoffee();
