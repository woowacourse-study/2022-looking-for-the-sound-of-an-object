import { $ } from './util/index.js';
import { ORDER_PROGRESS } from './constant/index.js';

export default class ReturnChangeSection {
  constructor({customerCharge, order}) {
    this.customerCharge = customerCharge;
    this.order = order;

    this.$returnedChangeText = $('#returned-change-text');
    this.$returnedChangePickUpButton = $('#returned-change-pick-up-button');

    this.customerCharge.addSubscriber(this.updateOnCustomerChargeChange);
    this.order.addSubscriber(this.updateOnOrderChange);
    this.$returnedChangePickUpButton.addEventListener('click', this.onClickReturnedChangePickUpButton);
  }

  updateOnCustomerChargeChange = ({returnedChangeValue}) => {
    this.$returnedChangeText.textContent = returnedChangeValue;
  }

  updateOnOrderChange = ({progress}) => {
    switch (progress) {
    case ORDER_PROGRESS.COMPLETE:
      this.updateOnOrderComplete();
      break;
    default:
    }
  }

  updateOnOrderComplete = () => {
    this.$returnedChangePickUpButton.removeAttribute("disabled");
  }
  
  onClickReturnedChangePickUpButton = () => {
    if (this.order.progress !== ORDER_PROGRESS.COMPLETE) return;

    this.customerCharge.resetReturnedChange();
    this.$returnedChangePickUpButton.setAttribute("disabled", "");
  }

}
