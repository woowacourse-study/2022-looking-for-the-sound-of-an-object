import React, { createContext, useState, useContext } from "react";
import { ORDER_PROGRESS } from "../constants";
import { Menu, Order } from "../type";

interface OrderContextInterface {
  order: Order;
  updateOrderStateToPending: () => void;
  updateOrderStateToMaking: (orderedMenu: string) => void;
  updateOrderStateToComplete: () => void;
}

const OrderContext = createContext<OrderContextInterface | null>(null);

export const OrderProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [order, setOrder] = useState<Order>({
    progress: ORDER_PROGRESS.PENDING,
    orderedMenu: null,
  });

  const updateOrderStateToPending = () => {
    setOrder({
      progress: ORDER_PROGRESS.PENDING,
      orderedMenu: null,
    });
  };

  const updateOrderStateToMaking = (orderedMenu: Menu) => {
    setOrder({
      progress: ORDER_PROGRESS.MAKING,
      orderedMenu,
    });
  };

  const updateOrderStateToComplete = () => {
    setOrder((prevState) => ({
      ...prevState,
      progress: ORDER_PROGRESS.COMPLETE,
    }));
  };

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

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error("useOrder must be used within a OrderProvider");
  }
  return context;
};
