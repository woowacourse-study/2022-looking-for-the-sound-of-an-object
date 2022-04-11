import { materialStore } from '../store/materialStore';
import { showSnackBar } from '../utils/showSnackBar';
import { validateMaterialInput, validateMaterialQuantity } from '../utils/validations';

class CoffeeMachineComponent {
  constructor() {
    this.initDOM();
    this.showPurchaseCoffeeComponent();
    this.bindEventListener();
  }

  initDOM() {
    this.$purchaseCoffee = document.querySelector('.purchase-coffee');
    this.$rechargeMaterial = document.querySelector('.recharge-material');
    this.$rechargeTab = document.querySelector('#recharge-material-tab');
    this.$purchaseTab = document.querySelector('#purchase-coffee-tab');
    this.$purchaseCoffeeQuantityElement = document.querySelector('#purchase-coffee-quantity');
    this.$purchaseCoffeeButton = document.querySelector('#purchase-coffee');
    this.$coffeeDispenserContainer = document.querySelector('.coffee-dispenser');
    this.$coffeeBeanQuantityElement = document.querySelector('#coffee-beans-quantity');
    this.$cupQuantityElement = document.querySelector('#cups-quantity');
    this.$rechargeCoffeeBeanButton = document.querySelector('#recharge-coffee-beans-button');
    this.$rechargeCupButton = document.querySelector('#recharge-cups-button');
  }

  showPurchasableCoffeeQuantity() {
    const materials = materialStore.getMaterialStore();
    let quantity = 0;

    if (materials !== 0) {
      const { coffeeBean, cup } = materials;
      quantity = Math.min(coffeeBean, cup);
    }
    this.$purchaseCoffeeQuantityElement.textContent = quantity;
  }

  showNowMaterialQuantity() {
    const materials = materialStore.getMaterialStore();

    if (materials !== 0) {
      const { coffeeBean, cup } = materials;

      this.$coffeeBeanQuantityElement.textContent = coffeeBean;
      this.$cupQuantityElement.textContent = cup;
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
    this.$purchaseTab.addEventListener('click', this.onPurchaseTabClick);
    this.$rechargeTab.addEventListener('click', this.onRechargeTabClick);
    this.$purchaseCoffeeButton.addEventListener('click', this.onPurchaseCoffeeButtonClick);
    this.$rechargeCoffeeBeanButton.addEventListener('click', this.onRechargeCoffeeBeanButtonClick);
    this.$rechargeCupButton.addEventListener('click', this.onRechargeCupButtonClick);
  }

  onPurchaseTabClick = e => {
    e.preventDefault();
    this.showPurchaseCoffeeComponent();
  };

  onRechargeTabClick = e => {
    e.preventDefault();
    this.showRechargeMaterialComponent();
  };

  onPurchaseCoffeeButtonClick = e => {
    e.preventDefault();

    if (!validateMaterialQuantity()) {
      showSnackBar('재료가 부족하여 커피를 제조할 수 없습니다');
      return;
    }
    materialStore.buyCoffee();
    this.serveCoffee();
    this.showPurchasableCoffeeQuantity();
  };

  serveCoffee = () => {
    this.$coffeeDispenserContainer.textContent = '☕️';
  };

  onRechargeCoffeeBeanButtonClick = e => {
    e.preventDefault();

    const $rechargeCoffeeBeanInput = document.querySelector('#recharge-coffee-beans-input');
    const { valueAsNumber: coffeeBeanInputValue } = $rechargeCoffeeBeanInput;
    $rechargeCoffeeBeanInput.value = '';

    if (!validateMaterialInput(coffeeBeanInputValue)) {
      showSnackBar('0이상, 소수점이 아닌 숫자를 입력해 주세요');
      return;
    }

    materialStore.rechargeCoffeeBean(coffeeBeanInputValue);
    this.showNowMaterialQuantity();
  };

  onRechargeCupButtonClick = e => {
    e.preventDefault();

    const $rechargeCupInput = document.querySelector('#recharge-cups-input');
    const { valueAsNumber: cupInputValue } = $rechargeCupInput;
    $rechargeCupInput.value = '';

    if (!validateMaterialInput(cupInputValue)) {
      showSnackBar('0이상, 소수점이 아닌 숫자를 입력해 주세요');
      return;
    }

    materialStore.rechargeCup(cupInputValue);
    this.showNowMaterialQuantity();
  };
}

export default CoffeeMachineComponent;
