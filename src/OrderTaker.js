import { $, $$ } from './util/index.js';
import menus from './constant/menus.js';
import { ORDER_PROGRESS } from './constant/index.js';

export default class OrderTaker {
  constructor({customerCharge, order}) {
    this.initDOM();
    this.customerCharge = customerCharge;
    this.order = order;
    
    this.customerCharge.addSubscriber(this.updateOnCustomerChargeChange);
    this.order.addSubscriber(this.updateOnOrderChange);

    this.$menuButtonContainer.addEventListener('click', this.onClickMenuArea);
    this.$beveragePickUpButton.addEventListener('click', this.onClickBeveragePickUpButton);
  }

  initDOM() {
    this.$menuButtonContainer = $('#menu-button-container');
    this.$$menuButtons;
    this.$beveragePickUpButton = $('#beverage-pick-up-button');
    this.initMenuButtons();
  }

  initMenuButtons() {
    this.$menuButtonContainer.insertAdjacentHTML('afterbegin', Object.keys(menus).map((menu) => `
      <button name="${menu}" type="button" disabled>${menus[menu].name}<br >${menus[menu].price.toLocaleString()}원</button>
    `).join(''));
    this.$$menuButtons = $$('button', this.$menuButtonContainer);
    this.setAllMenuButtonDisable();
  }

  updateOnCustomerChargeChange = () => {
    if (this.order.progress === ORDER_PROGRESS.PENDING) {
      this.setPurchaseAvailableButtonActive();
    }
  }

  updateOnOrderChange = ({progress}) => {
    switch (progress) {
    case ORDER_PROGRESS.PENDING:
      this.updateOnOrderPending()
      break;
    case ORDER_PROGRESS.MAKING:
      this.updateOnOrderMaking();
      break;
    case ORDER_PROGRESS.COMPLETE:
      this.updateOnOrderComplete();
      break;
    default:
    }
  }

  updateOnOrderPending = () => {
    this.setPurchaseAvailableButtonActive();
    this.$beveragePickUpButton.setAttribute("disabled", "");
  }

  updateOnOrderMaking = () => {
    this.setAllMenuButtonDisable();
  }

  updateOnOrderComplete = () => {
    this.$beveragePickUpButton.removeAttribute("disabled");
  }
    
  onClickMenuArea = (event) => {
    if (event.target.tagName !== 'BUTTON') return;
    if (this.order.progress !== ORDER_PROGRESS.PENDING) return;

    this.customerCharge.subtractCustomerCharge(menus[event.target.name].price);
    this.order.updateOrderStateToMaking(event.target.name);
    this.customerCharge.returnLeftCustomerCharge();
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

  setPurchaseAvailableButtonActive() {
    Array.from(this.$$menuButtons).filter((menuButton) => {
      const { price } = menus[menuButton.name];
      return price <= this.customerCharge.value;
    }).forEach((menuButton) => {
      menuButton.removeAttribute("disabled");
    })
  }

}
