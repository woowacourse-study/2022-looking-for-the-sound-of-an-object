import { $ } from './util.js';

export default class BeverageMaker {
  constructor(order) {
    this.order = order;

    this.$dispenser = $('.dispenser');
    this.$beverage = $('.beverage', this.$dispenser);
    this.$guideText = $('.dispenser-guide-text', this.$dispenser);
    this.$takeOutButton = $('#take-out-button', this.$dispenser);

    this.order.addSubscriber(this.updateOnOrderChange);
    this.$takeOutButton.addEventListener('click', this.onClickTakeOutButton);
  }

  updateOnOrderChange = ({progress, orderedMenu}) => {
    if (progress === 'pending') this.initialize();
    if (progress === 'making') this.makeBeverage(orderedMenu);
    if (progress === 'complete') this.updateOnOrderComplete(orderedMenu);
  }

  updateOnOrderComplete = (menu) => {
    this.updateGuideText(`${menu.name} 나왔습니다. 😉`);
    this.$takeOutButton.removeAttribute("disabled");
  }

  onClickTakeOutButton = () => {
    this.order.updateOrderStateToPending();
  }

  initialize = () => {
    this.$beverage.innerHTML = '';
    this.$takeOutButton.setAttribute("disabled", "");
    this.updateGuideText('원하는 음료를 선택하세요.');
  }
  
  makeBeverage = (menu) => {
    this.updateGuideText(`${menu.name} 준비 중...`);
    const prepareIngredientChains = menu.ingredients.reduce((prev, ingredient) =>
      prev.then(() => this.prepareIngredient(ingredient))
    , this.prepareIngredient('컵'));

    prepareIngredientChains.then(() => {
      this.order.updateOrderStateToComplete();
    })
  }
  
  prepareIngredient(ingredient) {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.$beverage.insertAdjacentHTML('beforeend', `<li>${ingredient}</li>`);
        resolve();
      }, 1000);
    });
  }

  updateGuideText(guideMessage) {
    this.$guideText.innerText = guideMessage;
  }
}
