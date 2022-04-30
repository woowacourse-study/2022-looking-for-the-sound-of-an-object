import { KEY } from '../../constants/index.js';
import { drinks } from '../../constants/drink.js';
import { $, $$ } from '../../utils/dom.js';
import { store } from '../../utils/store.js';
import { observer } from '../../Observer.js';

export default class Order {
  constructor() {
    this.render();
    this.initDOM();
    this.bindDOM();
  }

  initDOM() {
    this.$chargeMoneyReturnButton = $('.charge-money__return-button');
    this.$totalChargeInput = $('.charge-money__input');
    this.$dispenser = $('.dispenser');
    this.$clearButton = $('.clear');
    this.$menu = $('.menu');
    this.$menuButtons;
  }

  bindDOM() {
    this.$menu.addEventListener('click', this.menuButtonClickHandler);
    this.$clearButton.addEventListener('click', this.clearDispenser);
  }

  menuButtonClickHandler = e => {
    if (this.$dispenser.children.length > 0) return;

    store.set(KEY.CHARGE_MONEY, store.get(KEY.CHARGE_MONEY) - e.target.title);
    observer.notify();

    $(`.menu__button[name="${e.target.name}"]`).classList.add('active');

    const template = `
      <div>컵이 나옵니다.</div>
      ${drinks[e.target.name].make()}
      <div>완성되었습니다.</div>
    `;

    this.showMaking(template);
    this.$totalChargeInput.focus();
  };

  show() {
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
    this.$chargeMoneyReturnButton.toggleAttribute('disabled');
    this.$dispenser.insertAdjacentHTML('beforeend', template);

    Array.from(this.$dispenser.children).forEach(($child, idx) => {
      setTimeout(() => {
        $child.classList.toggle('done');
      }, 1000 * idx);
    });

    setTimeout(() => {
      this.$chargeMoneyReturnButton.toggleAttribute('disabled');
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

  render() {
    $('.order').insertAdjacentHTML(
      'beforeend',
      `
        <nav class="menu"></nav>
        <div class="dispenser"></div>
        <button class="clear" type="button" hidden>가져가기</button>
      `,
    );
  }
}
