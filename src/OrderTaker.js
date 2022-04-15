import { $, $$ } from './util.js';
import menus from './menus.js';
import { ORDER_PROGRESS } from './constants.js';

export default class OrderTaker {
  constructor(order) {
    this.order = order;

    this.$menuButtonArea = $('#menu-button-area');
    this.$$menuButtons;
    this.$guideText = $('#guide-message-area');
    this.$beveragePickUpButton = $('#beverage-pick-up-button');
    this.initializeMenuButtons();

    this.order.addSubscriber(this.updateOnOrderChange);
    this.$menuButtonArea.addEventListener('click', this.onClickMenuArea);
    this.$beveragePickUpButton.addEventListener('click', this.onClickBeveragePickUpButton);
  }
  
  initializeMenuButtons() {
    this.$menuButtonArea.insertAdjacentHTML('afterbegin', Object.keys(menus).map((menu) => `
      <button name="${menu}" type="button">${menus[menu].name}</button>
    `).join(''));
    this.$$menuButtons = $$('button', this.$menuButtonArea);
  }

  updateOnOrderChange = ({progress, orderedMenu}) => {
    switch (progress) {
    case ORDER_PROGRESS.PENDING:
      this.updateOnOrderPending()
      break;
    case ORDER_PROGRESS.MAKING:
      this.updateOnOrderMaking(orderedMenu);
      break;
    case ORDER_PROGRESS.COMPLETE:
      this.updateOnOrderComplete(orderedMenu);
      break;
    default:
    }
  }

  updateOnOrderPending = () => {
    this.setAllMenuButtonActive();
    this.$beveragePickUpButton.setAttribute("disabled", "");
    this.updateGuideText('원하는 음료를 선택하세요.');
  }

  updateOnOrderMaking = (menu) => {
    this.setAllMenuButtonDisable();
    this.updateGuideText(`${menus[menu].name} 준비 중...`);
  }

  updateOnOrderComplete = (menu) => {
    this.$beveragePickUpButton.removeAttribute("disabled");
    this.updateGuideText(`${menus[menu].name} 나왔습니다. 😉`);
  }
    
  onClickMenuArea = (event) => {
    if (event.target.tagName !== 'BUTTON') return;
    if (this.order.progress !== ORDER_PROGRESS.PENDING) return;

    this.order.updateOrderStateToMaking(event.target.name);
  }
  
  onClickBeveragePickUpButton = () => {
    if (this.order.progress !== ORDER_PROGRESS.COMPLETE) return;

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
