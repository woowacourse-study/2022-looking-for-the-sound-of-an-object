import { materialStore } from '../store/materialStore';

export const validateMaterialQuantity = () => {
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

export const validateMaterialInput = userInput => {
  return userInput >= 0 && Number.isInteger(userInput);
};
