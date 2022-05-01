import { KEY, MESSAGE } from '../../constants/index.js';
import { $ } from '../../utils/dom.js';
import { store } from '../../utils/store.js';
import { showSnackbar } from '../../utils/snackbar.js';
import { validateChargeMoney } from '../../utils/validator.js';
import { observer } from '../../Observer.js';

export default class ChargeSection {
  constructor() {
    this.render();
    this.initDOM();
    this.bindDOM();

    this.$totalChargeInput.focus();
  }

  initDOM() {
    this.$totalChargeInput = $('.charge-money__input');
    this.$totalChargeMoney = $('.charge-money__total');
  }

  bindDOM() {
    $('.charge-money__form').addEventListener(
      'submit',
      this.chargeMoneyHandler,
    );
    $('.charge-money__return-button').addEventListener(
      'click',
      this.returnChargeMoneyHandler,
    );
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
    observer.notify();
    this.$totalChargeInput.focus();
  };

  returnChargeMoneyHandler = () => {
    store.set(KEY.CHARGE_MONEY, 0);

    showSnackbar(MESSAGE.RETURN_CHARGE_MONEY);
    observer.notify();
    this.$totalChargeInput.focus();
  };

  show() {
    const totalMoney = store.get(KEY.CHARGE_MONEY);
    this.$totalChargeMoney.textContent = totalMoney
      ? totalMoney.toLocaleString('ko-KR')
      : 0;
  }

  render() {
    $('.charge-money').insertAdjacentHTML(
      'beforeend',
      `
        <form class="charge-money__form">
          <input
            class="charge-money__input"
            type="number"
            placeholder="투입할 금액 입력"
          />
        </form>
        <div class="charge-money__total-description">
          현재 투입된 금액: <span class="charge-money__total">0</span>원
        </div>
        <button class="charge-money__return-button" type="button">반환</button>
      `,
    );
  }
}
