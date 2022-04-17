import { ORDER_PROGRESS } from './constant/index.js';
import menus from './constant/menus.js';
import { $ } from './util/index.js';

export default class BeverageIngredientsList {
  constructor({order}) {
    this.order = order;

    this.$beverageIngredientsList = $('#beverage-ingredients-list');

    this.order.addSubscriber(this.updateOnOrderChange);
  }

  updateOnOrderChange = ({progress, orderedMenu}) => {
    if (progress === ORDER_PROGRESS.PENDING) this.clearBeverage();
    if (progress === ORDER_PROGRESS.MAKING) this.makeBeverage(orderedMenu);
  }

  clearBeverage = () => {
    this.$beverageIngredientsList.innerHTML = '';
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
        this.$beverageIngredientsList.insertAdjacentHTML('beforeend', `<li>${ingredient}</li>`);
        resolve();
      }, 1000);
    });
  }

}
