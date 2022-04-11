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
    }, 3000);
  };
};

export const showServeCoffee = serveCoffee();
