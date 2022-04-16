import { showSnackBar } from '../utils/showSnackBar';

export const coinStore = {
  setCoinStore(coin) {
    localStorage.setItem('coinStore', JSON.stringify(coin));
  },
  getCoinStore() {
    const coins = localStorage.getItem('coinStore');
    return coins ? JSON.parse(coins) : 0;
  },
  chargeCoins(coin) {
    const existCoins = this.getCoinStore();
    this.setCoinStore(existCoins + coin);
  },
  buyDrink(menuPrice) {
    const totalCoin = this.getCoinStore();
    if (totalCoin < menuPrice) {
      showSnackBar('금액이 부족합니다');
      return false;
    }
    this.setCoinStore(totalCoin - menuPrice);
    return true;
  },
};
