import { drinks } from './constants/drink.js';
import { KEY, MESSAGE } from './constants/index.js';
import { $, $$ } from './utils/dom.js';
import { showSnackbar } from './utils/snackbar.js';
import { store } from './utils/store.js';
import { validateChargeMoney } from './utils/validator.js';

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

    $('.charge-money__form').addEventListener(
      'submit',
      this.chargeMoneyHandler,
    );
    $('.charge-money__return-button').addEventListener(
      'click',
      this.returnChargeMoneyHandler,
    );
    this.$menu.addEventListener('click', this.menuButtonClickHandler);
    this.$clearButton.addEventListener('click', this.clearDispenser);
  }

  chargeMoneyHandler = e => {
    e.preventDefault();

    const inputMoney = e.target.elements[0].valueAsNumber;

    try {
      validateChargeMoney(inputMoney);
    } catch ({ message }) {
      showSnackbar(message);
      this.$totalChargeInput.value = '';
      return;
    }

    store.set(KEY.CHARGE_MONEY, store.get(KEY.CHARGE_MONEY) + inputMoney);

    showSnackbar(MESSAGE.SUCCESS_CHARGE_MONEY);
    this.showTotalMoney();
    this.showMenuButton();
    this.$totalChargeInput.value = '';
  };

  returnChargeMoneyHandler = () => {
    store.set(KEY.CHARGE_MONEY, 0);

    showSnackbar(MESSAGE.RETURN_CHARGE_MONEY);
    this.showTotalMoney();
    this.showMenuButton();
    this.$totalChargeInput.focus();
  };

  menuButtonClickHandler = e => {
    if (this.$dispenser.children.length > 0) return;

    store.set(KEY.CHARGE_MONEY, store.get(KEY.CHARGE_MONEY) - e.target.title);
    this.showTotalMoney();
    this.showMenuButton();

    e.target.classList.add('active');

    const template = `
      <div>컵이 나옵니다.</div>
      ${drinks[e.target.name].make()}
      <div>완성되었습니다.</div>
    `;

    this.showMaking(template);
    this.$totalChargeInput.focus();
  };

  showTotalMoney() {
    const totalMoney = store.get(KEY.CHARGE_MONEY);
    this.$totalChargeMoney.textContent = totalMoney
      ? totalMoney.toLocaleString('ko-KR')
      : 0;
  }

  showMenuButton() {
    const totalMoney = store.get(KEY.CHARGE_MONEY);
    const template = Object.keys(drinks)
      .map(drink => {
        const { name, price } = drinks[drink];
        return `
          <button
            class="menu__button"
            name="${drink}"
            type="button"
            title=${price}
            ${price > totalMoney ? 'disabled' : ''}
          >${name}<br />${price}원</button>
        `;
      })
      .join('');

    this.$menu.replaceChildren();
    this.$menu.insertAdjacentHTML('beforeend', template);

    this.$menuButtons = $$('.menu__button');
  }

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
    this.$totalChargeInput.focus();
  };
}

new DrinkMachine();
