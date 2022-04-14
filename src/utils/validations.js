import { materialStore } from '../store/materialStore';

export const validateCoffeeMaterialQuantity = () => {
  const materials = materialStore.getMaterialStore();
  if (materials === 0) {
    return false;
  }
  const { coffeeBean, cup } = materials;

  if (coffeeBean === 0 || cup === 0) {
    return false;
  }
  return true;
};

export const validateCafeLatteMaterialQuantity = () => {
  const materials = materialStore.getMaterialStore();
  if (materials === 0) {
    return false;
  }

  const { coffeeBean, milk, cup } = materials;

  if (coffeeBean === 0 || cup === 0 || milk === 0) {
    return false;
  }
  return true;
};

export const validateMilkMaterialQuantity = () => {
  const materials = materialStore.getMaterialStore();
  if (materials === 0) {
    return false;
  }

  const { milk, cup } = materials;

  if (cup === 0 || milk === 0) {
    return false;
  }
  return true;
};

export const validateMaterialInput = userInput => {
  return userInput > 0 && Number.isInteger(userInput);
};
