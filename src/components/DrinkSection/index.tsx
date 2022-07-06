import React, { useState } from "react";

import { useOrder } from "./../../context/OrderContext";

import DrinkMenuSection from "./DrinkMenuSection";
import DrinkPickupSection from "./DrinkPickupSection";

import { Drink, Menu } from "../../type";
import menus from "../../constants/menus";

const PREPARE_INGREDIENT_TIME_INTERVAL = 1000;

const DrinkSection = () => {
  const { updateOrderStateToComplete } = useOrder();
  const [ingredientList, setIngredientList] = useState([]);

  const makeDrink = (menuName: Menu) => {
    const drink = menus[menuName] as unknown as Drink;
    const initialPrepare = prepareIngredient("컵");
    const prepareIngredientChains = drink.ingredients.reduce(
      (prev, ingredient) => prev.then(() => prepareIngredient(ingredient)),
      initialPrepare
    );

    prepareIngredientChains.then(() => {
      updateOrderStateToComplete();
    });
  };

  const prepareIngredient = (ingredient: string) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setIngredientList((prevIngredientList) => [
          ...prevIngredientList,
          ingredient,
        ]);
        resolve();
      }, PREPARE_INGREDIENT_TIME_INTERVAL);
    });
  };

  const clearIngredientList = () => {
    setIngredientList([]);
  };

  return (
    <section className="beverage-section">
      <h2 className="sr-only">음료 주문 및 제공 영역</h2>
      <DrinkMenuSection makeDrink={makeDrink} />
      <DrinkPickupSection
        ingredientList={ingredientList}
        clearIngredientList={clearIngredientList}
      />
    </section>
  );
};

export default DrinkSection;
