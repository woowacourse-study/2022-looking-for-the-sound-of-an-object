import { DRINK_PRICE, MATERIAL_NAME, RECIPE } from '../utils/constants';
import { coinStore } from './coinStore';
import { materialStore } from './materialStore';

class Drink {
  constructor() {
    this.menu = {
      espresso: {
        name: 'espresso',
        material: [MATERIAL_NAME.COFFEE_BEAN, MATERIAL_NAME.CUP],
        price: DRINK_PRICE.ESPRESSO,
        recipe: [RECIPE.BE_READY_CUP, RECIPE.BREW_COFFEE, RECIPE.SERVE_DRINK],
      },
      americano: {
        name: 'americano',
        material: [MATERIAL_NAME.COFFEE_BEAN, MATERIAL_NAME.CUP],
        price: DRINK_PRICE.AMERICANO,
        recipe: [
          RECIPE.BE_READY_CUP,
          RECIPE.BREW_COFFEE,
          RECIPE.FILL_WITH_WATER,
          RECIPE.SERVE_DRINK,
        ],
      },
      cafeLatte: {
        name: 'cafeLatte',
        material: [MATERIAL_NAME.COFFEE_BEAN, MATERIAL_NAME.CUP, MATERIAL_NAME.MILK],
        price: DRINK_PRICE.CAFE_LATTE,
        recipe: [
          RECIPE.BE_READY_CUP,
          RECIPE.BREW_COFFEE,
          RECIPE.FILL_WITH_MILK,
          RECIPE.SERVE_DRINK,
        ],
      },
      milk: {
        name: 'milk',
        material: [MATERIAL_NAME.CUP, MATERIAL_NAME.MILK],
        price: DRINK_PRICE.MILK,
        recipe: [RECIPE.BE_READY_CUP, RECIPE.FILL_WITH_MILK, RECIPE.SERVE_DRINK],
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

  getDrinkRecipe(menuName) {
    return this.menu[menuName].recipe;
  }
}

export default Drink;
