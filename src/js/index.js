import { drinks } from './constants/drink.js';
import { $, $$ } from './utils/dom.js';
import { store } from './utils/store.js';

class DrinkMachine {
  constructor() {
    this.$totalChargeInput = $('.charge-money__input');
    this.$totalChargeMoney = $('.charge-money__total');
    this.$dispenser = $('.dispenser');
    this.$clearButton = $('.clear');
    this.$menu = $('.menu');
    this.$menuButtons;

    this.showMenuButton();
    this.showTotalMoney();
    this.$totalChargeInput.focus();

    $('.charge-money__form').addEventListener('submit', this.chargeMoneyEvent);
    this.$menu.addEventListener('click', this.menuButtonClickEvent);
    this.$clearButton.addEventListener('click', this.clearDispenser);
  }

  chargeMoneyEvent = e => {
    e.preventDefault();

    const inputMoney = e.target.elements[0].valueAsNumber;
    store.set('money', store.get('money') + inputMoney);

    this.showTotalMoney();
    this.showMenuButton();
    this.$totalChargeInput.value = '';
  };

  showTotalMoney() {
    const totalMoney = store.get('money');
    this.$totalChargeMoney.textContent = totalMoney ? totalMoney : 0;
  }

  showMenuButton() {
    const totalMoney = store.get('money');
    const template = Object.keys(drinks)
      .map(drink => {
        const { name, price } = drinks[drink];
        return `
          <button
            class="menu__button"
            name="${drink}"
            type="button"
            title=${price}원
            ${price > totalMoney ? 'disabled' : ''}
          >${name}</button>
        `;
      })
      .join('');

    this.$menu.replaceChildren();
    this.$menu.insertAdjacentHTML('beforeend', template);

    this.$menuButtons = $$('.menu__button');
  }

  menuButtonClickEvent = e => {
    if (this.$dispenser.children.length > 0) return;

    e.target.classList.add('active');

    const template = `
      <div>컵이 나옵니다.</div>
      ${drinks[e.target.name].make()}
      <div>완성되었습니다.</div>
    `;

    this.showMaking(template);
  };

  showMaking(template) {
    this.$dispenser.insertAdjacentHTML('beforeend', template);

    Array.from(this.$dispenser.children).forEach(($child, idx) => {
      setTimeout(() => {
        $child.classList.toggle('done');
      }, 1000 * idx);
    });

    setTimeout(() => {
      this.$clearButton.toggleAttribute('hidden');
    }, 1000 * this.$dispenser.children.length);
  }

  clearDispenser = () => {
    this.$menuButtons.forEach($button => {
      $button.classList.remove('active');
    });

    this.$dispenser.replaceChildren();
    this.$clearButton.toggleAttribute('hidden');
  };
}

new DrinkMachine();
