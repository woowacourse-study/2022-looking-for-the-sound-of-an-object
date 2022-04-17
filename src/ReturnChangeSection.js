import { $ } from './util/index.js';

export default class ReturnChangeSection {
  constructor({customerCharge}) {
    this.customerCharge = customerCharge;

    this.$returnedChangeText = $('#returned-change-text');
    this.$returnedChangePickUpButton = $('#returned-change-pick-up-button');

    this.customerCharge.addSubscriber(this.updateOnCustomerChargeChange);
    this.$returnedChangePickUpButton.addEventListener('click', this.onClickReturnedChangePickUpButton);
  }

  updateOnCustomerChargeChange = ({returnedChangeValue}) => {
    this.$returnedChangeText.textContent = returnedChangeValue;

    if (returnedChangeValue !== 0) {
      this.$returnedChangePickUpButton.removeAttribute("disabled");
      return;
    }
    this.$returnedChangePickUpButton.setAttribute("disabled", "");
  }

  onClickReturnedChangePickUpButton = () => {
    this.customerCharge.resetReturnedChange();
  }

}
