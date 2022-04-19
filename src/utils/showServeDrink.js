import { SERVE_COFFEE_DELAY_TIME } from './constants';
import { showSnackBar } from './showSnackBar';

const serveDrink = () => {
  const $coffeeDispenserContainer = document.querySelector('.coffee-dispenser');
  return recipeList => {
    let count = 1;
    const makingDrinkStepList = recipeList.map(step => {
      const stepContainer = document.createElement('div');
      stepContainer.className = 'step-container';
      stepContainer.textContent = step;
      return stepContainer;
    });

    const makingCoffeeId = setInterval(() => {
      if (count === recipeList.length) {
        clearInterval(makingCoffeeId);
        showSnackBar('음료가 나왔습니다');
        document.querySelectorAll('button').forEach(item => {
          item.disabled = false;
        });
      }
      $coffeeDispenserContainer.appendChild(makingDrinkStepList.shift());
      count += 1;
    }, SERVE_COFFEE_DELAY_TIME);
  };
};

export const showServeDrink = serveDrink();
