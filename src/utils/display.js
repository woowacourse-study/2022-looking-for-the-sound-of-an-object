import { coinStore } from '../store/coinStore';
import Drink from '../store/Drink';

export const makeButtonsDisable = () => {
  document.querySelectorAll('button').forEach(btn => {
    btn.disabled = true;
  });
};

export const activePurchaseMenuButton = () => {
  const drink = new Drink();
  const menuNames = drink.getPurchaseableDrinkName();
  const $purchaseButtons = document.querySelectorAll('.purchase-button');
  $purchaseButtons.forEach(item => {
    item.classList.remove('is-active');
    if (menuNames.includes(item.dataset.menuName)) {
      item.classList.add('is-active');
    }
  });
};

export const showTotalChargeCoin = () => {
  const totalCoin = coinStore.getCoinStore();
  const $totalChargeCoinElement = document.querySelector('#total-charge-coin');
  $totalChargeCoinElement.textContent = totalCoin;
};
