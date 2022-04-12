import { $, $$ } from './util.js';
import menus from './menus.js';
import { ORDER_PROGRESS } from './constants.js';

export default class OrderTaker {
  constructor(order) {
    this.order = order;

    this.$menuArea = $('.menu-area');
    this.$guideText = $('#guide-message-area');
    this.$beveragePickUpButton = $('#beverage-pick-up-button');
    this.initializeMenuButtons();

    this.order.addSubscriber(this.updateOnOrderChange);
    this.$menuArea.addEventListener('click', this.onClickMenuArea);
    this.$beveragePickUpButton.addEventListener('click', this.onClickBeveragePickUpButton);
  }
  
  initializeMenuButtons() {
    this.$menuArea.innerHTML = Object.keys(menus).map((menu) => `
      <button name="${menu}" type="button">${menus[menu].name}</button>
    `).join('');
    this.$$menuButtons = $$('button', this.$menuArea);
  }

  updateOnOrderChange = ({progress, orderedMenu}) => {
    if (progress === ORDER_PROGRESS.PENDING) this.updateOnOrderPending();
    if (progress === ORDER_PROGRESS.MAKING) this.updateOnOrderMaking(orderedMenu);
    if (progress === ORDER_PROGRESS.COMPLETE) this.updateOnOrderComplete(orderedMenu);
  }

  updateOnOrderPending = () => {
    this.setAllMenuButtonActive();
    this.$beveragePickUpButton.setAttribute("disabled", "");
    this.updateGuideText('원하는 음료를 선택하세요.');
  }

  updateOnOrderMaking = (menu) => {
    this.setAllMenuButtonDisable();
    this.updateGuideText(`${menu.name} 준비 중...`);
  }

  updateOnOrderComplete = (menu) => {
    this.$beveragePickUpButton.removeAttribute("disabled");
    this.updateGuideText(`${menu.name} 나왔습니다. 😉`);
  }
    
  onClickMenuArea = (event) => {
    if (event.target.tagName !== 'BUTTON') return;
    this.order.updateOrderStateToMaking(menus[event.target.name]);
  }
  
  onClickBeveragePickUpButton = () => {
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
