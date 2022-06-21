import { createContext } from "react";
import useOrder from "../hooks/useOrder";

export const OrderContext = createContext({
  order: null,
  updateOrderStateToPending: null,
  updateOrderStateToMaking: null,
  updateOrderStateToComplete: null,
});

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
