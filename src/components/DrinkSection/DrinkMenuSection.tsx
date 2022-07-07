import React from "react";

import { useOrder } from "../../context/OrderContext";
import { usePayment } from "../../context/PaymentContext";

import { ORDER_PROGRESS } from "../../constants";
import menus from "../../constants/menus";
import { Menu } from "../../type";
import { formatPrice } from "../../util";

interface Props {
  makeDrink: (menuName: Menu) => void;
}

const DrinkMenuSection = ({ makeDrink }: Props) => {
  const { order, updateOrderStateToMaking } = useOrder();
  const { customerCharge, subtractCustomerCharge } = usePayment();

  const handleClickDrinkMenuButton = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    const { name } = e.target as HTMLButtonElement;
    const menuName = name as Menu;

    updateOrderStateToMaking(menuName);
    makeDrink(menuName);
    subtractCustomerCharge(menus[menuName].price);
  };

  return (
    <section>
      <h3 className="sr-only">음료 주문 버튼 영역</h3>
      <div className="menu-area">
        {Object.keys(menus).map((menu: Menu) => (
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
            {formatPrice(menus[menu].price)}원
          </button>
        ))}
      </div>
    </section>
  );
};

export default DrinkMenuSection;
