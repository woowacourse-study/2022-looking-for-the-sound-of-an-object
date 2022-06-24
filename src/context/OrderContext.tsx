import React, { createContext } from "react";
import useOrder from "../hooks/useOrder";
import { Order } from "../type";

interface OrderContextInterface {
  order: Order;
  updateOrderStateToPending: () => void;
  updateOrderStateToMaking: (orderedMenu: string) => void;
  updateOrderStateToComplete: () => void;
}

export const OrderContext = createContext<OrderContextInterface | null>(null);

export const OrderProvider = ({ children }) => {
  const {
    order,
    updateOrderStateToPending,
    updateOrderStateToMaking,
    updateOrderStateToComplete,
  } = useOrder();

  return (
    <OrderContext.Provider
      value={{
        order,
        updateOrderStateToPending,
        updateOrderStateToMaking,
        updateOrderStateToComplete,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
