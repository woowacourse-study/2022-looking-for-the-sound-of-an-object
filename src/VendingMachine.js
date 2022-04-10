import { $ } from './util.js';

export default class VendingMachine {
  constructor() {
    this.$menuArea = $('.menu-area');
    this.$purchaseAmericanoButton = $('#purchase-americano-button', this.$menuArea);
    this.$dispenser = $('.dispenser');
    this.$beverage = $('.beverage', this.$dispenser);
    this.$guideText = $('.dispenser-guide-text', this.$dispenser);
    this.$takeOutButton = $('#initialize-button', this.$dispenser);

    this.$purchaseAmericanoButton.addEventListener('click', this.makeAmericano);
    this.$takeOutButton.addEventListener('click', this.initialize);

    this.initialize();
  }

  initialize = () => {
    this.$beverage.innerHTML = '';
    this.updateGuideText('아메리카노 버튼을 선택하세요.');
  }

  makeAmericano = () => {
    this.updateGuideText('음료 준비중...');
    this.prepareIngredient('컵')
      .then(() => this.prepareIngredient('에스프레소'))
      .then(() => this.prepareIngredient('뜨거운 물'))
      .then(() => this.updateGuideText('음료가 다 나왔습니다. 가져가세요!'));
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
