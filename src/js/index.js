import Drink from './Drink.js';
import { $, $$ } from './utils/dom.js';

class App {
  constructor() {
    this.drinks = {
      americano: new Drink('아메리카노', ['에스프레소', '뜨거운 물']),
    };

    this.$dispenser = $('.dispenser');
    this.$clearButton = $('.clear');
    this.$menuButtons = $$('.menu__button');

    $('.menu').addEventListener('click', this.menuButtonClickEvent);
    this.$clearButton.addEventListener('click', this.clearDispenser);
  }

  menuButtonClickEvent = e => {
    if (this.$dispenser.children.length > 0) return;

    e.target.classList.add('active');

    let template = '<div>컵이 나옵니다.</div>';

    switch (e.target.name) {
      case 'americano':
        template += this.drinks.americano.make();
    }

    template += '<div>완성되었습니다.</div>';

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

new App();
