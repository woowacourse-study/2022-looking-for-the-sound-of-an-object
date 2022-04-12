import { $, $$ } from './util.js';
import menus from './menus.js';

export default class OrderTaker {
  constructor(order) {
    this.order = order;

    this.$menuArea = $('.menu-area');
    this.$guideText = $('#guide-message-area');
    this.$takeOutButton = $('#take-out-button');
    this.initializeMenuButtons();

    this.order.addSubscriber(this.updateOnOrderChange);
    this.$menuArea.addEventListener('click', this.onClickMenuArea);
    this.$takeOutButton.addEventListener('click', this.onClickTakeOutButton);
  }
  
  initializeMenuButtons() {
    this.$menuArea.innerHTML = Object.keys(menus).map((menu) => `
      <button name="${menu}" type="button">${menus[menu].name}</button>
    `).join('');
    this.$$menuButtons = $$('button', this.$menuArea);
  }

  updateOnOrderChange = ({progress, orderedMenu}) => {
    if (progress === 'pending') this.updateOnOrderPending();
    if (progress === 'making') this.updateOnOrderMaking(orderedMenu);
    if (progress === 'complete') this.updateOnOrderComplete(orderedMenu);
  }

  updateOnOrderPending = () => {
    this.setAllMenuButtonActive();
    this.$takeOutButton.setAttribute("disabled", "");
    this.updateGuideText('원하는 음료를 선택하세요.');
  }

  updateOnOrderMaking = (menu) => {
    this.setAllMenuButtonDisable();
    this.updateGuideText(`${menu.name} 준비 중...`);
  }

  updateOnOrderComplete = (menu) => {
    this.$takeOutButton.removeAttribute("disabled");
    this.updateGuideText(`${menu.name} 나왔습니다. 😉`);
  }
    
  onClickMenuArea = (event) => {
    if (event.target.tagName !== 'BUTTON') return;
    this.order.updateOrderStateToMaking(menus[event.target.name]);
  }
  
  onClickTakeOutButton = () => {
    this.order.updateOrderStateToPending();
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
  
  updateGuideText(guideMessage) {
    this.$guideText.innerText = guideMessage;
  }
  
}
