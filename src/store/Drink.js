import { DRINK_PRICE, MATERIAL_NAME } from '../utils/constants';
import { coinStore } from './coinStore';
import { materialStore } from './materialStore';

class Drink {
  constructor() {
    this.menu = {
      espresso: {
        name: 'espresso',
        material: [MATERIAL_NAME.COFFEE_BEAN, MATERIAL_NAME.CUP],
        price: DRINK_PRICE.ESPRESSO,
      },
      americano: {
        name: 'americano',
        material: [MATERIAL_NAME.COFFEE_BEAN, MATERIAL_NAME.CUP],
        price: DRINK_PRICE.AMERICANO,
      },
      cafeLatte: {
        name: 'cafeLatte',
        material: [MATERIAL_NAME.COFFEE_BEAN, MATERIAL_NAME.CUP, MATERIAL_NAME.MILK],
        price: DRINK_PRICE.CAFE_LATTE,
      },
      milk: {
        name: 'milk',
        material: [MATERIAL_NAME.CUP, MATERIAL_NAME.MILK],
        price: DRINK_PRICE.MILK,
      },
    };
  }

  getPurchasableDrinkQuantity() {
    const materials = materialStore.getMaterialStore();
    const getMin = material => Math.min(...material.map(m => materials[m]));
    return Object.values(this.menu).map(item => getMin(item.material));
  }

  getPurchaseableDrinkName() {
    const totalCoin = coinStore.getCoinStore();
    return Object.values(this.menu).reduce((menuNames, item) => {
      if (totalCoin >= item.price) {
        menuNames.push(item.name);
      }
      return menuNames;
    }, []);
  }

  getMenuPrice(menuName) {
    const menu = Object.values(this.menu).find(item => item.name === menuName);
    return menu.price;
  }

  getMenuPrice(menuName) {
    let menuPrice = 0;
    Object.values(this.menu).forEach(item => {
      if (item.name === menuName) {
        menuPrice = item.price;
      }
    });
    return menuPrice;
  }
}

export default Drink;
