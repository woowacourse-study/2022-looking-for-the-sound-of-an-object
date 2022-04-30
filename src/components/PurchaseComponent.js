import { coinStore } from '../store/coinStore';
import Drink from '../store/Drink';
import { materialStore } from '../store/materialStore';
import { ERROR_MSG, MENU_NAME } from '../utils/constants';
import { activePurchaseMenuButton, showTotalChargeCoin } from '../utils/display';
import { showServeDrink } from '../utils/showServeDrink';
import { showSnackBar } from '../utils/showSnackBar';
import {
  validateCafeLatteMaterialQuantity,
  validateCoffeeMaterialQuantity,
  validateMilkMaterialQuantity,
} from '../utils/validations';

class PurchaseComponent {
  constructor() {
    this.initDOM();
    this.drink = new Drink();
    this.bindEventListener();
  }

  initDOM() {
    this.$purchaseDrinkButtonContainer = document.querySelector('.purchase-drink-container');
    this.$purchasableDrinkQuantity = document.querySelectorAll('.drink-quantity');
    this.$purchaseButtons = document.querySelectorAll('.purchase-button');
    this.$coffeeDispenserContainer = document.querySelector('.coffee-dispenser');
    this.$takeDrinkButton = document.querySelector('#take-drink-button');
  }

  bindEventListener() {
    this.$purchaseDrinkButtonContainer.addEventListener('click', this.onPurchaseDrinkButtonClick);
    this.$takeDrinkButton.addEventListener('click', this.onTakeDrinkButtonClick);
  }

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
    activePurchaseMenuButton();
    showTotalChargeCoin();
  };

  showPurchasableDrinkQuantity() {
    const materials = materialStore.getMaterialStore();

    if (materials !== 0) {
      const purchaseDrinkQuantity = this.drink.getPurchasableDrinkQuantity();
      this.$purchasableDrinkQuantity.forEach((item, index) => {
        item.textContent = purchaseDrinkQuantity[index];
      });
    }
  }

  makeButtonsDisable = () => {
    document.querySelectorAll('button').forEach(btn => {
      btn.disabled = true;
    });
  };

  onTakeDrinkButtonClick = e => {
    e.preventDefault();
    const $coffeeDispenserContainer = document.querySelector('.coffee-dispenser');
    $coffeeDispenserContainer.replaceChildren('');
  };
}

export default PurchaseComponent;
