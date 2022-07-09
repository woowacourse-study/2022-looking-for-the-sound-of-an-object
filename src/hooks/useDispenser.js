import { useState } from "react";

export const useDispenser = (timeInterval) => {
  const [dispenser, setDispenser] = useState({
    actions: [],
    active: false,
  });

  const addDispenserAction = async (action) => {
    return new Promise((resolve) => {
      setDispenser((prev) => ({ ...prev, active: true }));
      setTimeout(() => {
        setDispenser((prev) => ({
          active: false,
          actions: [...prev.actions, action],
        }));
        resolve();
      }, timeInterval);
    });
  };

  const resetDispenserAction = () => {
    setDispenser({ actions: [], active: false });
  };

  return {
    dispenser,
    resetDispenserAction,
    addDispenserAction,
  };
};
