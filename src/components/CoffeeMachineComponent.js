import { coinStore } from '../store/coinStore';
import { materialStore } from '../store/materialStore';
import { ERROR_MSG, MENU_NAME } from '../utils/constants';
import { showServeCoffee } from '../utils/showServeCoffee';
import { showSnackBar } from '../utils/showSnackBar';
import {
  validateCafeLatteMaterialQuantity,
  validateChargeCoinInput,
  validateCoffeeMaterialQuantity,
  validateMaterialInput,
  validateMilkMaterialQuantity,
} from '../utils/validations';

class CoffeeMachineComponent {
  constructor() {
    this.initDOM();
    this.showPurchaseCoffeeComponent();
    this.bindEventListener();
  }

  initDOM() {
    this.$purchaseCoffee = document.querySelector('.purchase-drink');
    this.$rechargeMaterial = document.querySelector('.recharge-material');
    this.$nav = document.querySelector('nav');
    this.$rechargeTab = document.querySelector('#recharge-material-tab');
    this.$purchaseTab = document.querySelector('#purchase-coffee-tab');

    this.$purchaseDrinkButtonContainer = document.querySelector('.purchase-drink-container');
    this.$purchasableEspressoQuantityElement = document.querySelector(
      '#purchaseable-espresso-quantity',
    );
    this.$purchasableAmericanoQuantityElement = document.querySelector(
      '#purchaseable-americano-quantity',
    );
    this.$purchaseableCafeLatteQuantityElement = document.querySelector(
      '#purchaseable-cafe-latte-quantity',
    );
    this.$purchaseableMilkQuantityElement = document.querySelector('#purchaseable-milk-quantity');
    this.$coffeeBeanQuantityElement = document.querySelector('#coffee-beans-quantity');

    this.$cupQuantityElement = document.querySelector('#cups-quantity');
    this.$milkQuantityElement = document.querySelector('#milk-quantity');
    this.$rechargeDrinkButtonContainer = document.querySelector('.recharge-drink-container');

    this.$totalChargeCoinElement = document.querySelector('#total-charge-coin');
    this.$chargeCoinButton = document.querySelector('#charge-coin-submit');
  }

  showPurchasableDrinkQuantity() {
    const materials = materialStore.getMaterialStore();

    if (materials !== 0) {
      const { coffeeBean, cup, milk } = materials;
      const espressoQuantity = Math.min(coffeeBean, cup);
      const americanoQuantity = Math.min(coffeeBean, cup);
      const cafeLatteQuantity = Math.min(coffeeBean, cup, milk);
      const milkQuantity = Math.min(milk, cup);

      this.$purchasableEspressoQuantityElement.textContent = espressoQuantity;
      this.$purchasableAmericanoQuantityElement.textContent = americanoQuantity;
      this.$purchaseableCafeLatteQuantityElement.textContent = cafeLatteQuantity;
      this.$purchaseableMilkQuantityElement.textContent = milkQuantity;
    }
  }

  showNowMaterialQuantity() {
    const materials = materialStore.getMaterialStore();

    if (materials !== 0) {
      const { coffeeBean, cup, milk } = materials;

      this.$coffeeBeanQuantityElement.textContent = coffeeBean;
      this.$cupQuantityElement.textContent = cup;
      this.$milkQuantityElement.textContent = milk;
    }
  }

  showPurchaseCoffeeComponent() {
    this.$purchaseCoffee.classList.remove('hide');
    this.$rechargeMaterial.classList.add('hide');

    this.$purchaseTab.classList.add('is-active');
    this.$rechargeTab.classList.remove('is-active');

    this.showPurchasableDrinkQuantity();
    this.showTotalChargeCoin();
  }

  showRechargeMaterialComponent() {
    this.$rechargeMaterial.classList.remove('hide');
    this.$purchaseCoffee.classList.add('hide');

    this.$rechargeTab.classList.add('is-active');
    this.$purchaseTab.classList.remove('is-active');

    this.showNowMaterialQuantity();
  }

  bindEventListener() {
    this.$nav.addEventListener('click', this.onNavButtonClick);
    this.$purchaseDrinkButtonContainer.addEventListener('click', this.onPurchaseDrinkButtonClick);
    this.$rechargeDrinkButtonContainer.addEventListener('click', this.onRechargeButtonClick);
    this.$chargeCoinButton.addEventListener('click', this.onChargeCoinButtonClick);
  }

  onNavButtonClick = e => {
    e.preventDefault();

    if (e.target.id === 'recharge-material-tab') {
      this.showRechargeMaterialComponent();
    }

    if (e.target.id === 'purchase-coffee-tab') {
      this.showPurchaseCoffeeComponent();
    }
  };

  onPurchaseDrinkButtonClick = e => {
    e.preventDefault();

    if (e.target.id === 'purchase-espresso-button') {
      if (!validateCoffeeMaterialQuantity()) {
        showSnackBar(ERROR_MSG.SOLD_OUT_ESPRESSO);
        return;
      }
      materialStore.buyDrink(MENU_NAME.ESPRESSO);
      showServeCoffee('☕️');
      showSnackBar('에스프레소가 나왔습니다');
    }
    if (e.target.id === 'purchase-americano-button') {
      if (!validateCoffeeMaterialQuantity()) {
        showSnackBar(ERROR_MSG.SOLD_OUT_AMERICANO);
        return;
      }
      materialStore.buyDrink(MENU_NAME.AMERICANO);
      showServeCoffee('🥃');
      showSnackBar('아메리카노가 나왔습니다');
    }
    if (e.target.id === 'purchase-cafe-latte-button') {
      if (!validateCafeLatteMaterialQuantity()) {
        showSnackBar(ERROR_MSG.SOLD_OUT_CAFE_LATTE);
        return;
      }
      materialStore.buyDrink(MENU_NAME.CAFE_LATTE);
      showServeCoffee('🧋');
      showSnackBar('카페라떼가 나왔습니다');
    }
    if (e.target.id === 'purchase-milk-button') {
      if (!validateMilkMaterialQuantity()) {
        showSnackBar(ERROR_MSG.SOLD_OUT_MILK);
        return;
      }
      materialStore.buyDrink(MENU_NAME.MILK);
      showServeCoffee('🥛');
      showSnackBar('우유가 나왔습니다');
    }
    this.showPurchasableDrinkQuantity();
  };

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
    this.showTotalChargeCoin();
  };

  showTotalChargeCoin = () => {
    const totalCoin = coinStore.getCoinStore();
    this.$totalChargeCoinElement.textContent = totalCoin;
  };
}

export default CoffeeMachineComponent;
