import { ORDER_PROGRESS } from './constants.js';
import menus from './menus.js';
import { $ } from './util.js';

export default class BeverageMaker {
  constructor(order) {
    this.order = order;

    this.$makeBeverageArea = $('#make-beverage-area');

    this.order.addSubscriber(this.updateOnOrderChange);
  }

  updateOnOrderChange = ({progress, orderedMenu}) => {
    if (progress === ORDER_PROGRESS.PENDING) this.clearBeverage();
    if (progress === ORDER_PROGRESS.MAKING) this.makeBeverage(orderedMenu);
  }

  clearBeverage = () => {
    this.$makeBeverageArea.innerHTML = '';
  }
  
  makeBeverage = (menuName) => {
    const beverage = menus[menuName];
    const initialPrepare = this.prepareIngredient('컵');
    const prepareIngredientChains = beverage.ingredients.reduce((prev, ingredient) =>
      prev.then(() => this.prepareIngredient(ingredient))
    , initialPrepare);

    prepareIngredientChains.then(() => {
      this.order.updateOrderStateToComplete();
    });
  }
  
  prepareIngredient(ingredient) {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.$makeBeverageArea.insertAdjacentHTML('beforeend', `<li>${ingredient}</li>`);
        resolve();
      }, 1000);
    });
  }

}
