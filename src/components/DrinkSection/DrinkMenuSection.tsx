import React, { useContext } from "react";

import { OrderContext } from "../../context/OrderContext";
import { CustomerChargeContext } from "../../context/CustomerChargeContext";

import { ORDER_PROGRESS } from "../../constants";
import menus from "../../constants/menus";

interface Props {
  makeDrink: (menuName: keyof typeof menus) => void;
}

const DrinkMenuSection = ({ makeDrink }: Props) => {
  const { order, updateOrderStateToMaking } = useContext(OrderContext);
  const { customerCharge, subtractCustomerCharge } = useContext(
    CustomerChargeContext
  );

  const handleClickDrinkMenuButton = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    const { name } = e.target as HTMLButtonElement;
    const menuName = name as keyof typeof menus;

    updateOrderStateToMaking(menuName);
    makeDrink(menuName);
    subtractCustomerCharge(menus[menuName].price);
  };

  return (
    <section>
      <h3 className="sr-only">음료 주문 버튼 영역</h3>
      <div className="menu-area">
        {Object.keys(menus).map((menu: keyof typeof menus) => (
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
