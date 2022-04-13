import { drinks } from './constants/drink.js';
import { $, $$ } from './utils/dom.js';

class DrinkMachine {
  constructor() {
    this.showMenuButton();

    this.$dispenser = $('.dispenser');
    this.$clearButton = $('.clear');
    this.$menuButtons = $$('.menu__button');

    $('.menu').addEventListener('click', this.menuButtonClickEvent);
    this.$clearButton.addEventListener('click', this.clearDispenser);
  }

  showMenuButton() {
    const template = Object.keys(drinks)
      .map(
        drink => `
        <button
          class="menu__button"
          name="${drink}"
          type="button"
        >${drinks[drink].name}</button>`,
      )
      .join('');
    const $menu = $('.menu');

    $menu.replaceChildren();
    $menu.insertAdjacentHTML('beforeend', template);
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
