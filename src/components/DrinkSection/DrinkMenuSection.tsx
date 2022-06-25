import React, { useContext } from "react";

import { OrderContext } from "../../context/OrderContext";
import { CustomerChargeContext } from "../../context/CustomerChargeContext";

import { ORDER_PROGRESS } from "../../constants";
import menus from "../../constants/menus";

const DrinkMenuSection = ({ makeDrink }) => {
  const { order, updateOrderStateToMaking } = useContext(OrderContext);
  const { customerCharge, subtractCustomerCharge } = useContext(
    CustomerChargeContext
  );

  const handleClickDrinkMenuButton = (e: React.MouseEvent) => {
    const { name } = e.target as HTMLButtonElement;

    updateOrderStateToMaking(name);
    makeDrink(name);
    subtractCustomerCharge(name);
  };

  return (
    <section>
      <h3 className="sr-only">음료 주문 버튼 영역</h3>
      <div className="menu-area">
        {Object.keys(menus).map((menu) => (
          <button
            key={menu}
            name={menu}
            type="button"
            onClick={handleClickDrinkMenuButton}
            disabled={
              menus[menu].price > customerCharge.value ||
              order.progress !== ORDER_PROGRESS.PENDING
            }
          >
            {menus[menu].name}
            <br />
            {menus[menu].price.toLocaleString()}원
          </button>
        ))}
      </div>
    </section>
  );
};

export default DrinkMenuSection;
