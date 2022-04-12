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
  if (userInput < 0) {
    return false;
  }
  if (!Number.isInteger(userInput)) {
    return false;
  }
  return true;
};
