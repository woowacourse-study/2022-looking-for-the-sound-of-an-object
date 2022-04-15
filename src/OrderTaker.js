import { $, $$ } from './util.js';
import menus from './menus.js';
import { ORDER_PROGRESS } from './constants.js';

export default class OrderTaker {
  constructor(order) {
    this.order = order;
    this.customerCharge = 0;

    this.$customerChargeArea = $('#customer-charge-area');
    this.$customerChargeForm = $('#customer-charge-form');
    this.$customerCharge = $('#customer-charge');

    this.$menuButtonArea = $('#menu-button-area');
    this.$$menuButtons;
    this.$guideText = $('#guide-message-area');
    this.$beveragePickUpButton = $('#beverage-pick-up-button');
    this.initializeMenuButtons();
    this.updateCustomerCharge();

    this.order.addSubscriber(this.updateOnOrderChange);
    this.$customerChargeForm.addEventListener('submit', this.onSubmitCustomerChargeForm);
    this.$menuButtonArea.addEventListener('click', this.onClickMenuArea);
    this.$beveragePickUpButton.addEventListener('click', this.onClickBeveragePickUpButton);
  }
  
  initializeMenuButtons() {
    this.$menuButtonArea.insertAdjacentHTML('afterbegin', Object.keys(menus).map((menu) => `
      <button name="${menu}" type="button" disabled>${menus[menu].name}<br >${menus[menu].price.toLocaleString()}원</button>
    `).join(''));
    this.$$menuButtons = $$('button', this.$menuButtonArea);
    this.setAllMenuButtonDisable();
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
    this.setPurchaseAvailableButtonActive();
    
    this.$beveragePickUpButton.setAttribute("disabled", "");
    this.updateGuideText(
      this.customerCharge >= Math.min(...Object.keys(menus).map(menu => menus[menu].price)) 
        ? '원하는 음료를 선택하세요.'
        : '투입 금액이 부족하여 선택 가능한 음료가 없습니다.'
    );
  }

  updateOnOrderMaking = (menu) => {
    this.setAllMenuButtonDisable();
    this.updateGuideText(`${menus[menu].name} 준비 중...`);
  }

  updateOnOrderComplete = (menu) => {
    this.$beveragePickUpButton.removeAttribute("disabled");
    this.updateGuideText(`${menus[menu].name} 나왔습니다. 😉`);
  }

  onSubmitCustomerChargeForm = (event) => {
    event.preventDefault();
    const $customerChargeInput = $('#customer-charge-input', event.target);
    const chargeValue = Number($customerChargeInput.value);
    $customerChargeInput.value = '';
    this.customerCharge = chargeValue;
    this.updateCustomerCharge();
    this.updateGuideText(
      this.customerCharge >= Math.min(...Object.keys(menus).map(menu => menus[menu].price)) 
        ? '원하는 음료를 선택하세요.'
        : '투입 금액이 부족하여 선택 가능한 음료가 없습니다.'
    );
    this.setPurchaseAvailableButtonActive();
  }
    
  onClickMenuArea = (event) => {
    if (event.target.tagName !== 'BUTTON') return;
    if (this.order.progress !== ORDER_PROGRESS.PENDING) return;

    this.customerCharge -= menus[event.target.name].price;
    this.updateCustomerCharge();
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

  setPurchaseAvailableButtonActive() {
    Array.from(this.$$menuButtons).filter((menuButton) => {
      const { price } = menus[menuButton.name];
      return price <= this.customerCharge;
    }).forEach((menuButton) => {
      menuButton.removeAttribute("disabled");
    })
  }

  updateCustomerCharge() {
    this.$customerCharge.textContent = this.customerCharge.toLocaleString();
  }
  
  updateGuideText(guideMessage) {
    this.$guideText.innerText = guideMessage;
  }

}
