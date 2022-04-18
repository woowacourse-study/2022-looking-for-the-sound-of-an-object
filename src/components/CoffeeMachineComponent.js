import { coinStore } from '../store/coinStore';
import Drink from '../store/Drink';
import { materialStore } from '../store/materialStore';
import { ERROR_MSG, MENU_NAME } from '../utils/constants';
import { showServeDrink } from '../utils/showServeDrink';
import { showSnackBar } from '../utils/showSnackBar';
import {
  validateCafeLatteMaterialQuantity,
  validateChargeCoinInput,
  validateCoffeeMaterialQuantity,
  validateMilkMaterialQuantity,
} from '../utils/validations';
import RechargeMaterialComponent from './RechargeMaterialComponent';

class CoffeeMachineComponent {
  constructor() {
    this.initDOM();
    this.rechargeComponent = new RechargeMaterialComponent();
    this.drink = new Drink();
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
    this.$purchasableDrinkQuantity = document.querySelectorAll('.drink-quantity');
    this.$purchaseButtons = document.querySelectorAll('.purchase-button');
    this.$coffeeDispenserContainer = document.querySelector('.coffee-dispenser');
    this.$takeDrinkButton = document.querySelector('#take-drink-button');

    this.$totalChargeCoinElement = document.querySelector('#total-charge-coin');
    this.$chargeCoinButton = document.querySelector('#charge-coin-submit');

    this.$returnChargeButton = document.querySelector('#charge-return-button');
    this.$returnCoinElement = document.querySelector('#total-charge-return');
  }

  showPurchasableDrinkQuantity() {
    const materials = materialStore.getMaterialStore();

    if (materials !== 0) {
      const purchaseDrinkQuantity = this.drink.getPurchasableDrinkQuantity();
      this.$purchasableDrinkQuantity.forEach((item, index) => {
        item.textContent = purchaseDrinkQuantity[index];
      });
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

    this.rechargeComponent.showNowMaterialQuantity();
  }

  bindEventListener() {
    this.$nav.addEventListener('click', this.onNavButtonClick);
    this.$purchaseDrinkButtonContainer.addEventListener('click', this.onPurchaseDrinkButtonClick);
    this.$chargeCoinButton.addEventListener('click', this.onChargeCoinButtonClick);
    this.$returnChargeButton.addEventListener('click', this.onReturnChargeButtonClick);
    this.$takeDrinkButton.addEventListener('click', this.onTakeDrinkButtonClick);
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
      if (coinStore.buyDrink(this.drink.getMenuPrice(MENU_NAME.ESPRESSO))) {
        this.makeButtonsDisable();
        materialStore.buyDrink(MENU_NAME.ESPRESSO);
        const recipeList = this.drink.getDrinkRecipe(MENU_NAME.ESPRESSO);
        showServeDrink(recipeList);
      }
    }
    if (e.target.id === 'purchase-americano-button') {
      if (!validateCoffeeMaterialQuantity()) {
        showSnackBar(ERROR_MSG.SOLD_OUT_AMERICANO);
        return;
      }
      if (coinStore.buyDrink(this.drink.getMenuPrice(MENU_NAME.AMERICANO))) {
        this.makeButtonsDisable();
        materialStore.buyDrink(MENU_NAME.AMERICANO);
        const recipeList = this.drink.getDrinkRecipe(MENU_NAME.AMERICANO);
        showServeDrink(recipeList);
      }
    }
    if (e.target.id === 'purchase-cafe-latte-button') {
      if (!validateCafeLatteMaterialQuantity()) {
        showSnackBar(ERROR_MSG.SOLD_OUT_CAFE_LATTE);
        return;
      }
      if (coinStore.buyDrink(this.drink.getMenuPrice(MENU_NAME.CAFE_LATTE))) {
        this.makeButtonsDisable();
        materialStore.buyDrink(MENU_NAME.CAFE_LATTE);
        const recipeList = this.drink.getDrinkRecipe(MENU_NAME.CAFE_LATTE);
        showServeDrink(recipeList);
      }
    }
    if (e.target.id === 'purchase-milk-button') {
      if (!validateMilkMaterialQuantity()) {
        showSnackBar(ERROR_MSG.SOLD_OUT_MILK);
        return;
      }
      if (coinStore.buyDrink(this.drink.getMenuPrice(MENU_NAME.MILK))) {
        this.makeButtonsDisable();
        materialStore.buyDrink(MENU_NAME.MILK);
        const recipeList = this.drink.getDrinkRecipe(MENU_NAME.MILK);
        showServeDrink(recipeList);
      }
    }
    this.showPurchasableDrinkQuantity();
    this.activePurchaseMenuButton();
    this.showTotalChargeCoin();
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
    this.activePurchaseMenuButton();
    this.showTotalChargeCoin();
  };

  onTakeDrinkButtonClick = e => {
    e.preventDefault();
    const $coffeeDispenserContainer = document.querySelector('.coffee-dispenser');
    $coffeeDispenserContainer.replaceChildren('');
  };

  showTotalChargeCoin = () => {
    const totalCoin = coinStore.getCoinStore();
    this.$totalChargeCoinElement.textContent = totalCoin;
  };

  activePurchaseMenuButton = () => {
    const menuNames = this.drink.getPurchaseableDrinkName();
    this.$purchaseButtons.forEach(item => {
      item.classList.remove('is-active');
      if (menuNames.includes(item.dataset.menuName)) {
        item.classList.add('is-active');
      }
    });
  };

  onReturnChargeButtonClick = e => {
    e.preventDefault();
    const totalCoin = coinStore.getCoinStore();
    this.$returnCoinElement.textContent = totalCoin;

    coinStore.setCoinStore(0);
    this.showTotalChargeCoin();
  };

  makeButtonsDisable = () => {
    document.querySelectorAll('button').forEach(btn => {
      btn.disabled = true;
    });
  };
}

export default CoffeeMachineComponent;
