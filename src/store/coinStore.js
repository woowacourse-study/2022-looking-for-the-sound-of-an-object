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
};
