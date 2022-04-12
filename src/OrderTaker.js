import { $, $$ } from './util.js';
import menus from './menus.js';

export default class OrderTaker {
  constructor(order) {
    this.order = order;

    this.$menuArea = $('.menu-area');
    this.initializeMenuButtons();

    this.order.addSubscriber(this.updateOnOrderChange);
    this.$menuArea.addEventListener('click', this.onClickMenuArea);
  }

  updateOnOrderChange = ({progress}) => {
    if (progress === 'pending') this.setAllMenuButtonActive();
    if (progress === 'making') this.setAllMenuButtonDisable();
  }

  initializeMenuButtons() {
    this.$menuArea.innerHTML = Object.keys(menus).map((menu) => `
      <button name="${menu}" type="button">${menus[menu].name}</button>
    `).join('');
    this.$$menuButtons = $$('button', this.$menuArea);
  }
    
  onClickMenuArea = (event) => {
    if (event.target.tagName !== 'BUTTON') return;
    this.order.updateOrderStateToMaking(menus[event.target.name]);
  }

  setAllMenuButtonDisable() {
    this.$$menuButtons.forEach((menuButton) => {
      menuButton.setAttribute("disabled", "");
    })
  }

  setAllMenuButtonActive() {
    this.$$menuButtons.forEach((menuButton) => {
      menuButton.removeAttribute("disabled");
    })
  }

}
