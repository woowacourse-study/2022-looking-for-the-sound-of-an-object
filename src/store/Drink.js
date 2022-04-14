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
    return Object.values(this.menu).map(item => Math.min(...item.material.map(m => materials[m])));
  }

  getPurchaseableDrinkName() {
    const totalCoin = coinStore.getCoinStore();
    const menuNames = [];
    Object.values(this.menu).forEach(item => {
      if (totalCoin >= item.price) {
        menuNames.push(item.name);
      }
    });
    return menuNames;
  }
}

export default Drink;
