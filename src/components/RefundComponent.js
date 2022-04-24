import { coinStore } from '../store/coinStore';
import { ERROR_MSG } from '../utils/constants';
import { activePurchaseMenuButton, showTotalChargeCoin } from '../utils/display';
import { showSnackBar } from '../utils/showSnackBar';
import { validateChargeCoinInput } from '../utils/validations';

class RefundComponent {
  constructor() {
    this.initDOM();
    this.bindEventListener();
  }

  initDOM() {
    this.$totalChargeCoinElement = document.querySelector('#total-charge-coin');
    this.$chargeCoinButton = document.querySelector('#charge-coin-submit');

    this.$returnChargeButton = document.querySelector('#charge-return-button');
    this.$returnCoinElement = document.querySelector('#total-charge-return');

    this.$refundButton = document.querySelector('#refund-button');
  }

  bindEventListener() {
    this.$chargeCoinButton.addEventListener('click', this.onChargeCoinButtonClick);
    this.$returnChargeButton.addEventListener('click', this.onReturnChargeButtonClick);
    this.$refundButton.addEventListener('click', this.onReturnChargeButtonClick);
  }

  onChargeCoinButtonClick = e => {
    e.preventDefault();
    const $chargeCoinInput = document.querySelector('#charge-coin-input');
    const { valueAsNumber: chargeCoinInputValue } = $chargeCoinInput;
    $chargeCoinInput.value = '';

    if (!validateChargeCoinInput(chargeCoinInputValue)) {
      showSnackBar(ERROR_MSG.INVALID_CHARGE_COIN_INPUT);
      return;
    }
    coinStore.chargeCoins(chargeCoinInputValue);
    activePurchaseMenuButton();
    showTotalChargeCoin();
  };

  onReturnChargeButtonClick = e => {
    e.preventDefault();
    const totalCoin = coinStore.getCoinStore();
    this.$returnCoinElement.textContent = totalCoin;

    coinStore.setCoinStore(0);
    showTotalChargeCoin();
  };
}

export default RefundComponent;
