import { $ } from './util/index.js';

export default class ReturnChangeSection {
  constructor({ customerCharge }) {
    this.customerCharge = customerCharge;

    this.$returnChangeButton = $('#return-change-button');
    this.$returnedChangeText = $('#returned-change-text');
    this.$returnedChangePickUpButton = $('#returned-change-pick-up-button');

    this.customerCharge.addSubscriber(this.updateOnCustomerChargeChange);
    this.$returnChangeButton.addEventListener('click', this.onClickReturnChangeButton);
    this.$returnedChangePickUpButton.addEventListener('click', this.onClickReturnedChangePickUpButton);
  }

  updateOnCustomerChargeChange = ({ returnedChangeValue }) => {
    this.$returnedChangeText.textContent = returnedChangeValue;

    if (returnedChangeValue !== 0) {
      this.$returnedChangePickUpButton.removeAttribute('disabled');
      return;
    }
    this.$returnedChangePickUpButton.setAttribute('disabled', '');
  };

  onClickReturnChangeButton = () => {
    this.customerCharge.returnLeftCustomerCharge();
  };

  onClickReturnedChangePickUpButton = () => {
    this.customerCharge.resetReturnedChange();
  };
}
