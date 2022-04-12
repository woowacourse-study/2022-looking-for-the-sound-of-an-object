import { materialStore } from '../store/materialStore';
import { ERROR_MSG } from '../utils/constants';
import { showServeCoffee } from '../utils/showServeCoffee';
import { showSnackBar } from '../utils/showSnackBar';
import {
  validateCafeLatteMaterialQuantity,
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
    // this.$purchaseCoffeeQuantityElement = document.querySelector('#purchase-coffee-quantity');
    // this.$purchaseCoffeeButton = document.querySelector('#purchase-coffee');
    this.$coffeeBeanQuantityElement = document.querySelector('#coffee-beans-quantity');
    this.$cupQuantityElement = document.querySelector('#cups-quantity');
    this.$milkQuantityElement = document.querySelector('#milk-quantity');
    this.$rechargeDrinkButtonContainer = document.querySelector('.recharge-drink-container');
  }

  showPurchasableCoffeeQuantity() {
    const materials = materialStore.getMaterialStore();
    let quantity = 0;

    if (materials !== 0) {
      const { coffeeBean, cup, milk } = materials;
      quantity = Math.min(coffeeBean, cup, milk);
    }
    // this.$purchaseCoffeeQuantityElement.textContent = quantity;
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

    this.showPurchasableCoffeeQuantity();
  }

  showRechargeMaterialComponent() {
    this.$rechargeMaterial.classList.remove('hide');
    this.$purchaseCoffee.classList.add('hide');

    this.$rechargeTab.classList.add('is-active');
    this.$purchaseTab.classList.remove('is-active');

    this.showNowMaterialQuantity();
  }

  bindEventListener() {
    this.$nav.addEventListener('click', this.onTabButtonClick);
    this.$purchaseDrinkButtonContainer.addEventListener('click', this.onPurchaseDrinkButtonClick);
    this.$rechargeDrinkButtonContainer.addEventListener('click', this.onRechargeButtonClick);
  }

  onTabButtonClick = e => {
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
        showSnackBar(ERROR_MSG.SOLD_OUT_COFFEE);
        return;
      }
      materialStore.buyDrink('espresso');
    }
    if (e.target.id === 'purchase-americano-button') {
      if (!validateCoffeeMaterialQuantity()) {
        showSnackBar(ERROR_MSG.SOLD_OUT_AMERICANO);
        return;
      }
      materialStore.buyDrink('americano');
    }
    if (e.target.id === 'purchase-cafe-latte-button') {
      if (!validateCafeLatteMaterialQuantity()) {
        showSnackBar(ERROR_MSG.SOLD_OUT_CAFE_LATTE);
        return;
      }
      materialStore.buyDrink('cafeLatte');
    }
    if (e.target.id === 'purchase-milk-button') {
      if (!validateMilkMaterialQuantity()) {
        showSnackBar(ERROR_MSG.SOLD_OUT_MILK);
        return;
      }
      materialStore.buyDrink('milk');
    }
    this.serveCoffee();
    this.showPurchasableCoffeeQuantity();
  };

  serveCoffee = () => {
    showServeCoffee();
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
}

export default CoffeeMachineComponent;
