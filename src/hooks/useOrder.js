import { useState } from "react";

import { ORDER_PROGRESS } from "../constants";

const useOrder = () => {
  const [order, setOrder] = useState({
    progress: ORDER_PROGRESS.PENDING,
    orderedMenu: null,
  });

  const updateOrderStateToPending = () => {
    setOrder({
      progress: ORDER_PROGRESS.PENDING,
      orderedMenu: null,
    });
  };

  const updateOrderStateToMaking = (orderedMenu) => {
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

  return {
    order,
    updateOrderStateToPending,
    updateOrderStateToMaking,
    updateOrderStateToComplete,
  };
};

export default useOrder;
