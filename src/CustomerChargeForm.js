import { ORDER_PROGRESS } from './constants.js';
import { $ } from './util.js';

export default class CustomerChargeForm {
  constructor({customerCharge, order}) {
    this.initDOM();
    
    this.customerCharge = customerCharge;
    this.order = order;
    this.customerCharge.addSubscriber(this.updateOnCustomerChargeChange);
    this.order.addSubscriber(this.updateOnOrderChange);

    this.$customerChargeForm.addEventListener('submit', this.onSubmitCustomerChargeForm);
  }

  initDOM() {
    this.$customerChargeArea = $('#customer-charge-area');
    this.$customerChargeForm = $('#customer-charge-form', this.$customerChargeArea);
    this.$customerChargeInput = $('#customer-charge-input', this.$customerChargeForm);
    this.$customerChargeSubmitButton = $('button', this.$customerChargeForm);
    this.$totalCustomerChargeText = $('#total-customer-charge-text', this.$customerChargeArea);
  }

  updateOnCustomerChargeChange = ({value: customerCharge}) => {
    this.$totalCustomerChargeText.textContent = customerCharge;
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

  setFormDisable() {
    this.$customerChargeInput.setAttribute("disabled", "");
    this.$customerChargeSubmitButton.setAttribute("disabled", "");
  }

  setFormActive() {
    this.$customerChargeInput.removeAttribute("disabled");
    this.$customerChargeSubmitButton.removeAttribute("disabled");
  }
}
