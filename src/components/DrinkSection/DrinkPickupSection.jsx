import React from "react";
import { ORDER_PROGRESS } from "../../constants";

function DrinkPickupSection({
  order,
  ingredientList,
  clearIngredientList,
  updateOrderStateToPending,
}) {
  const handleClickDrinkPickupButton = () => {
    updateOrderStateToPending();
    clearIngredientList();
  };

  return (
    <section className="pick-up-area">
      <h3 className="sr-only">구입한 음료 가져가기 영역</h3>
      <ol className="ol-reverse">
        {ingredientList.map((ingredient) => (
          <li>{ingredient}</li>
        ))}
      </ol>
      <button
        className="flexible-button"
        type="button"
        onClick={handleClickDrinkPickupButton}
        disabled={order.progress !== ORDER_PROGRESS.COMPLETE}
      >
        음료 받아가기
      </button>
    </section>
  );
}

export default DrinkPickupSection;
