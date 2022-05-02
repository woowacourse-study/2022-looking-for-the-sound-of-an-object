import { KEY, MESSAGE } from '../../constants/index.js';
import drinks from '../../constants/drink.js';
import { $, $$ } from '../../utils/dom.js';
import { store } from '../../utils/store.js';
import { showSnackbar } from '../../utils/snackbar.js';
import { observer } from '../../Observer.js';

export default class OrderSection {
  constructor() {
    this.render();
    this.initDOM();
    this.bindDOM();
    this.cart = [];
    this.showMenu();
  }

  initDOM() {
    this.$chargeMoneyReturnButton = $('.charge-money__return-button');
    this.$totalChargeInput = $('.charge-money__input');
    this.$dispenser = $('.dispenser');
    this.$purchase = $('.purchase');
    this.$clearButton = $('.clear');
    this.$cart = $('.cart');
    this.$tray = $('.tray');
    this.$menu = $('.menu');
    this.$menuButtons;
  }

  bindDOM() {
    this.$menu.addEventListener('click', this.menuButtonClickHandler);
    this.$purchase.addEventListener('click', this.purchaseButtonClickHandler);
    this.$clearButton.addEventListener('click', this.clearDispenser);
  }

  menuButtonClickHandler = e => {
    if (this.$dispenser.children.length > 0) return;

    const itemIdx = this.cart.findIndex(drink => drink.name === e.target.name);

    if (itemIdx === -1) {
      this.cart.push({
        name: e.target.name,
        price: e.target.title,
        quantity: 1,
      });
    } else {
      const prevState = this.cart[itemIdx];
      this.cart[itemIdx] = { ...prevState, quantity: prevState.quantity + 1 };
    }

    this.showCart();
    this.$purchase.removeAttribute('hidden');
  };

  purchaseButtonClickHandler = () => {
    let totalPrice = 0;

    this.cart.forEach(drink => {
      totalPrice += drink.quantity * drink.price;
    });

    const money = store.get(KEY.CHARGE_MONEY);

    if (money < totalPrice) {
      showSnackbar(MESSAGE.ERROR_LACK_MONEY);
      return;
    }

    store.set(KEY.CHARGE_MONEY, store.get(KEY.CHARGE_MONEY) - totalPrice);
    observer.notify();

    this.$purchase.setAttribute('hidden', '');

    this.cart.forEach(drink => {
      const template = `
        <div>컵이 나옵니다.</div>
        ${drinks[drink.name].make()}
        <div>
          ${drinks[drink.name].name} ${drink.quantity}잔이 완성되었습니다.
        </div>
      `;

      this.showMaking(template).then(() => {
        this.$tray.insertAdjacentHTML(
          'beforeend',
          `<div>${drinks[drink.name].name}<br />${drink.quantity}잔</div>`,
        );
      });
    });

    setTimeout(() => {
      this.$chargeMoneyReturnButton.removeAttribute('disabled');
      this.$clearButton.removeAttribute('hidden');
    }, 4000 * this.cart.length);

    this.cart = [];
    this.showCart();

    this.$totalChargeInput.focus();
  };

  showCart() {
    const template = this.cart
      .map(
        drink =>
          `<div>${drinks[drink.name].name}<br />X ${drink.quantity}</div>`,
      )
      .join('');

    this.$cart.replaceChildren();
    this.$cart.insertAdjacentHTML('beforeend', template);
  }

  showMenu() {
    const template = Object.keys(drinks)
      .map(drink => {
        const { name, price } = drinks[drink];
        return `
          <button
            class="menu__button"
            name="${drink}"
            type="button"
            title=${price}
          >${name}<br />${price}원</button>
        `;
      })
      .join('');

    this.$menu.replaceChildren();
    this.$menu.insertAdjacentHTML('beforeend', template);

    this.$menuButtons = $$('.menu__button');
  }

  showMaking(template) {
    this.$chargeMoneyReturnButton.setAttribute('disabled', '');
    this.$dispenser.insertAdjacentHTML('beforeend', template);

    Array.from(this.$dispenser.children).forEach(($child, idx) => {
      setTimeout(() => {
        $child.classList.add('done');
      }, 1000 * idx);
    });

    return new Promise(resolve =>
      setTimeout(() => {
        resolve();
      }, 1000 * this.$dispenser.children.length),
    );
  }

  clearDispenser = () => {
    this.$dispenser.replaceChildren();
    this.$tray.replaceChildren();
    this.$clearButton.toggleAttribute('hidden');
    this.$totalChargeInput.focus();
  };

  render() {
    $('.order').insertAdjacentHTML(
      'beforeend',
      `
        <nav class="menu"></nav>
        <div class="cart"></div>
        <button class="purchase" hidden>구매</button>
        <div class="exit">
          <div class="dispenser"></div>
          <div class="tray"></div>
        </div>
        <button class="clear" type="button" hidden>가져가기</button>
      `,
    );
  }
}
