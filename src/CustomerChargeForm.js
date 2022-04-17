import { ORDER_PROGRESS } from './constants.js';
import { $ } from './util.js';

export default class CustomerChargeForm {
  constructor({customerCharge, order}) {
    this.customerCharge = customerCharge;
    this.order = order;

    this.$customerChargeArea = $('#customer-charge-area');
    this.$customerChargeForm = $('#customer-charge-form', this.$customerChargeArea);
    this.$customerChargeInput = $('#customer-charge-input', this.$customerChargeForm);
    this.$customerChargeSubmitButton = $('button', this.$customerChargeForm);
    this.$customerCharge = $('#customer-charge', this.$customerChargeArea);

    this.customerCharge.addSubscriber(this.updateOnCustomerChargeChange);
    this.order.addSubscriber(this.updateOnOrderChange);
    this.$customerChargeForm.addEventListener('submit', this.onSubmitCustomerChargeForm);
  }

  updateOnCustomerChargeChange = ({value: customerCharge}) => {
    this.updateCustomerCharge(customerCharge);
  }

  updateOnOrderChange = ({progress}) => {
    switch (progress) {
    case ORDER_PROGRESS.PENDING:
      this.setFormActive();
      break;
    case ORDER_PROGRESS.MAKING:
      this.setFormDisable();
      break;
    default:
    }
  }

  onSubmitCustomerChargeForm = (event) => {
    event.preventDefault();

    const $customerChargeInput = $('#customer-charge-input', event.target);
    const chargeValue = Number($customerChargeInput.value);
    $customerChargeInput.value = '';

    this.customerCharge.addCustomerCharge(chargeValue);
  }

  updateCustomerCharge(customerCharge) {
    this.$customerCharge.textContent = customerCharge;
  }

  setFormDisable() {
    this.$customerChargeInput.setAttribute("disabled", "");
    this.$customerChargeSubmitButton.setAttribute("disabled", "");
  }

  setFormActive() {
    this.$customerChargeInput.removeAttribute("disabled");
    this.$customerChargeSubmitButton.removeAttribute("disabled");
  }
}
