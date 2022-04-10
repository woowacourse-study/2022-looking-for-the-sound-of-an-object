import { $ } from './util.js';

export default class VendingMachine {
  constructor() {
    this.$menuArea = $('.menu-area');
    this.$purchaseAmericanoButton = $('#purchase-americano-button', this.$menuArea);
    this.$dispenser = $('.dispenser');
    this.$beverage = $('.beverage', this.$dispenser);

    this.$purchaseAmericanoButton.addEventListener('click', this.makeAmericano);

    this.initialize();
  }

  initialize() {
    this.$beverage.innerHTML = '';
  }

  prepareIngredient(ingredient) {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.$beverage.insertAdjacentHTML('beforeend', `<li>${ingredient}</li>`);
        resolve();
      }, 1000);
    });
  }

  makeAmericano = () => {
    this.prepareIngredient('컵')
      .then(() => this.prepareIngredient('에스프레소'))
      .then(() => this.prepareIngredient('뜨거운 물'))
  }
}
