import { materialStore } from '../store/localStorage';
import { showSnackBar } from '../utils/showSnackBar';
import { validateMaterialQuantity } from '../utils/validations';

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
  }

  bindEventListener() {
    this.$purchaseTab.addEventListener('click', this.onPurchaseTabClick);
    this.$rechargeTab.addEventListener('click', this.onRechargeTabClick);
    this.$purchaseCoffeeButton.addEventListener('click', this.onPurchaseCoffeeButtonClick);
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
  };

  serveCoffee = () => {
    this.$coffeeDispenserContainer.textContent = '☕️';
  };
}

export default CoffeeMachineComponent;
