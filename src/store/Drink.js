import { DRINK_PRICE, MATERIAL_NAME } from '../utils/constants';
import { materialStore } from './materialStore';

class Drink {
  constructor() {
    this.menu = {
      espresso: {
        material: [MATERIAL_NAME.COFFEE_BEAN, MATERIAL_NAME.CUP],
        price: DRINK_PRICE.ESPRESSO,
      },
      americano: {
        material: [MATERIAL_NAME.COFFEE_BEAN, MATERIAL_NAME.CUP],
        price: DRINK_PRICE.AMERICANO,
      },
      cafeLatte: {
        material: [MATERIAL_NAME.COFFEE_BEAN, MATERIAL_NAME.CUP, MATERIAL_NAME.MILK],
        price: DRINK_PRICE.CAFE_LATTE,
      },
      milk: {
        material: [MATERIAL_NAME.CUP, MATERIAL_NAME.MILK],
        price: DRINK_PRICE.MILK,
      },
    };
  }

  getPurchasableDrinkQuantity() {
    const materials = materialStore.getMaterialStore();
    let quantityList = [];
    Object.values(this.menu).forEach(item => {
      const drinkQuantity = Math.min(...item.material.map(m => materials[m]));
      quantityList.push(drinkQuantity);
    });
    return quantityList;
  }
}

export default Drink;
