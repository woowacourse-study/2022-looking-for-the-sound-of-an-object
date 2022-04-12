import { SERVE_COFFEE_DELAY_TIME } from './constants';

const serveCoffee = () => {
  const $coffeeDispenserContainer = document.querySelector('.coffee-dispenser');
  let isExistCoffee = null;

  return () => {
    if (isExistCoffee) return;
    $coffeeDispenserContainer.textContent = '☕️';

    isExistCoffee = setTimeout(() => {
      $coffeeDispenserContainer.textContent = '';
      clearTimeout(isExistCoffee);
      isExistCoffee = null;
    }, SERVE_COFFEE_DELAY_TIME);
  };
};

export const showServeCoffee = serveCoffee();
