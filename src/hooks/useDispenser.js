import { useState } from "react";

export const useDispenser = (timeInterval) => {
  const [dispenserAction, setDispenserAction] = useState([]);

  const addDispenserAction = async (action, timeId) => {
    return new Promise((resolve) => {
      timeId.current = setTimeout(() => {
        setDispenserAction((prev) => [...prev, action]);
        resolve();
      }, timeInterval);
    });
  };

  const resetDispenserAction = () => {
    setDispenserAction([]);
  };

  return { dispenserAction, resetDispenserAction, addDispenserAction };
};
