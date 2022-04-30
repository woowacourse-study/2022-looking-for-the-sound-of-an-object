import { showTotalChargeCoin } from '../utils/display';
import PurchaseComponent from './PurchaseComponent';
import RechargeMaterialComponent from './RechargeMaterialComponent';
import RefundComponent from './RefundComponent';

class CoffeeMachineComponent {
  constructor() {
    this.initDOM();
    this.rechargeComponent = new RechargeMaterialComponent();
    this.purchaseComponent = new PurchaseComponent();
    this.refundComponent = new RefundComponent();
    this.showPurchaseCoffeeComponent();
    this.bindEventListener();
  }

  initDOM() {
    this.$purchaseCoffee = document.querySelector('.purchase-drink');
    this.$rechargeMaterial = document.querySelector('.recharge-material');
    this.$nav = document.querySelector('nav');
    this.$rechargeTab = document.querySelector('#recharge-material-tab');
    this.$purchaseTab = document.querySelector('#purchase-coffee-tab');
  }

  showPurchaseCoffeeComponent() {
    this.$purchaseCoffee.classList.remove('hide');
    this.$rechargeMaterial.classList.add('hide');

    this.$purchaseTab.classList.add('is-active');
    this.$rechargeTab.classList.remove('is-active');

    this.purchaseComponent.showPurchasableDrinkQuantity();
    showTotalChargeCoin();
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
}

export default CoffeeMachineComponent;
