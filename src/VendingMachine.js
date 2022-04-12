import { $, $$ } from './util.js';
import menus from './menus.js';


export default class VendingMachine {
  constructor() {
    this.$menuArea = $('.menu-area');
    this.$purchaseAmericanoButton = $('#purchase-americano-button', this.$menuArea);
    this.$dispenser = $('.dispenser');
    this.$beverage = $('.beverage', this.$dispenser);
    this.$guideText = $('.dispenser-guide-text', this.$dispenser);
    this.$takeOutButton = $('#take-out-button', this.$dispenser);

    this.initializeMenuArea();
    this.initialize();

    this.$menuArea.addEventListener('click', this.onClickMenuArea);
    this.$takeOutButton.addEventListener('click', this.initialize);
  }

  initialize = () => {
    this.$beverage.innerHTML = '';
    $$('button', this.$menuArea).forEach((menuButton) => {
      menuButton.removeAttribute("disabled");
    })
    this.$takeOutButton.setAttribute("disabled", "");
    this.updateGuideText('원하는 음료를 선택하세요.');
  }

  initializeMenuArea = () => {
    this.$menuArea.innerHTML = Object.keys(menus).map((menu) => `
      <button name="${menu}" type="button">${menus[menu].name}</button>
    `).join('');
  }

  onClickMenuArea = (event) => {
    if (event.target.tagName !== 'BUTTON') return;
    this.makeBeverage(menus[event.target.name]);
  }

  makeBeverage = (menu) => {
    $$('button', this.$menuArea).forEach((menuButton) => {
      menuButton.setAttribute("disabled", "");
    })
    this.updateGuideText(`${menu.name} 준비 중...`);

    const prepareIngredientChains = menu.ingredients.reduce((prev, ingredient) =>
      prev.then(() => this.prepareIngredient(ingredient))
    , this.prepareIngredient('컵'));
    
    prepareIngredientChains.then(() => {
      this.updateGuideText(`${menu.name} 나왔습니다. 😉`);
      this.$takeOutButton.removeAttribute("disabled");
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
