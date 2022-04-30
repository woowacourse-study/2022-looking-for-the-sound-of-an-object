import { materialStore } from '../store/materialStore';
import { ERROR_MSG } from '../utils/constants';
import { showSnackBar } from '../utils/showSnackBar';
import { validateMaterialInput } from '../utils/validations';
class RechargeMaterialComponent {
  constructor() {
    this.initDOM();
    this.bindEventListener();
  }

  initDOM() {
    this.$coffeeBeanQuantityElement = document.querySelector('#coffee-beans-quantity');
    this.$cupQuantityElement = document.querySelector('#cups-quantity');
    this.$milkQuantityElement = document.querySelector('#milk-quantity');
    this.$rechargeDrinkButtonContainer = document.querySelector('.recharge-drink-container');
    this.$totalChargeCoinElement = document.querySelector('#total-charge-coin');
    this.$chargeCoinButton = document.querySelector('#charge-coin-submit');
  }

  bindEventListener() {
    this.$rechargeDrinkButtonContainer.addEventListener('click', this.onRechargeButtonClick);
  }
  
  onRechargeButtonClick = e => {
    e.preventDefault();
    if (e.target.id === 'recharge-coffee-beans-button') {
      this.onRechargeCoffeeBeanButtonClick();
    }
    if (e.target.id === 'recharge-milk-button') {
      this.onRechargeMilkButtonClick();
    }
    if (e.target.id === 'recharge-cups-button') {
      this.onRechargeCupButtonClick();
    }
    this.showNowMaterialQuantity();
  };

  showNowMaterialQuantity() {
    const materials = materialStore.getMaterialStore();

    if (materials !== 0) {
      const { coffeeBean, cup, milk } = materials;

      this.$coffeeBeanQuantityElement.textContent = coffeeBean;
      this.$cupQuantityElement.textContent = cup;
      this.$milkQuantityElement.textContent = milk;
    }
  }

  onRechargeCoffeeBeanButtonClick = () => {
    const $rechargeCoffeeBeanInput = document.querySelector('#recharge-coffee-beans-input');
    const { valueAsNumber: coffeeBeanInputValue } = $rechargeCoffeeBeanInput;
    $rechargeCoffeeBeanInput.value = '';

    if (!validateMaterialInput(coffeeBeanInputValue)) {
      showSnackBar(ERROR_MSG.INVALID_QUANTITY_INPUT);
      return;
    }

    materialStore.rechargeCoffeeBean(coffeeBeanInputValue);
  };

  onRechargeMilkButtonClick = () => {
    const $rechargeMilkInput = document.querySelector('#recharge-milk-input');
    const { valueAsNumber: milkInputValue } = $rechargeMilkInput;
    $rechargeMilkInput.value = '';

    if (!validateMaterialInput(milkInputValue)) {
      showSnackBar(ERROR_MSG.INVALID_QUANTITY_INPUT);
      return;
    }
    materialStore.rechargeMilk(milkInputValue);
  };

  onRechargeCupButtonClick = () => {
    const $rechargeCupInput = document.querySelector('#recharge-cups-input');
    const { valueAsNumber: cupInputValue } = $rechargeCupInput;
    $rechargeCupInput.value = '';

    if (!validateMaterialInput(cupInputValue)) {
      showSnackBar(ERROR_MSG.INVALID_QUANTITY_INPUT);
      return;
    }

    materialStore.rechargeCup(cupInputValue);
  };
}
export default RechargeMaterialComponent;
