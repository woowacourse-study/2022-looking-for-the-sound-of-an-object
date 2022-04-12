import { $ } from './util.js';

export default class BeverageMaker {
  constructor(order) {
    this.order = order;

    this.$dispenser = $('.dispenser');
    this.$beverage = $('.beverage', this.$dispenser);

    this.order.addSubscriber(this.updateOnOrderChange);
  }

  updateOnOrderChange = ({progress, orderedMenu}) => {
    if (progress === 'pending') this.clearBeverage();
    if (progress === 'making') this.makeBeverage(orderedMenu);
  }

  clearBeverage = () => {
    this.$beverage.innerHTML = '';
  }
  
  makeBeverage = (menu) => {
    const initialPrepare = this.prepareIngredient('컵');
    const prepareIngredientChains = menu.ingredients.reduce((prev, ingredient) =>
      prev.then(() => this.prepareIngredient(ingredient))
    , initialPrepare);

    prepareIngredientChains.then(() => {
      this.order.updateOrderStateToComplete();
    });
  }
  
  prepareIngredient(ingredient) {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.$beverage.insertAdjacentHTML('beforeend', `<li>${ingredient}</li>`);
        resolve();
      }, 1000);
    });
  }

}
