import { MENU_NAME } from '../utils/constants';

export const materialStore = {
  setMaterialStore(stuff) {
    localStorage.setItem('materialStore', JSON.stringify(stuff));
  },
  getMaterialStore() {
    const item = localStorage.getItem('materialStore');
    return item ? JSON.parse(item) : 0;
  },
  buyDrink(drinkName) {
    const existMaterial = this.getMaterialStore();
    let { coffeeBean, cup, milk } = existMaterial;
    if (drinkName === MENU_NAME.ESPRESSO || drinkName === MENU_NAME.AMERICANO) {
      coffeeBean -= 1;
    }
    if (drinkName === MENU_NAME.CAFE_LATTE) {
      coffeeBean -= 1;
      milk -= 1;
    }
    if (drinkName === MENU_NAME.MILK) {
      milk -= 1;
    }
    const newData = { coffeeBean, cup: cup - 1, milk };

    this.setMaterialStore(newData);
  },
  rechargeCoffeeBean(coffeeBeanInputValue) {
    const existMaterial = this.getMaterialStore();

    if (existMaterial === 0) {
      const newData = { coffeeBean: coffeeBeanInputValue, cup: 0, milk: 0 };
      this.setMaterialStore(newData);
      return;
    }
    const { coffeeBean, cup, milk } = existMaterial;

    const newData = { coffeeBean: coffeeBeanInputValue + coffeeBean, cup: cup, milk: milk };
    this.setMaterialStore(newData);
  },
  rechargeCup(cupInputValue) {
    const existMaterial = this.getMaterialStore();

    if (existMaterial === 0) {
      const newData = { coffeeBean: 0, cup: cupInputValue, milk: 0 };
      this.setMaterialStore(newData);
      return;
    }
    const { coffeeBean, cup, milk } = existMaterial;

    const newData = { coffeeBean: coffeeBean, cup: cup + cupInputValue, milk: milk };
    this.setMaterialStore(newData);
  },
  rechargeMilk(milkInputValue) {
    const existMaterial = this.getMaterialStore();

    if (existMaterial === 0) {
      const newData = { coffeeBean: 0, cup: 0, milk: milkInputValue };
      this.setMaterialStore(newData);
      return;
    }

    const { coffeeBean, cup, milk } = existMaterial;

    const newData = { coffeeBean: coffeeBean, cup: cup, milk: milk + milkInputValue };
    this.setMaterialStore(newData);
  },
};
