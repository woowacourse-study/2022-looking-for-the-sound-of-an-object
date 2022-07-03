import { useState } from "react";

export const useDispenser = (timeInterval) => {
  const [dispenserAction, setDispenserAction] = useState([]);
  const [dispenserStatus, setDispenserStatus] = useState({
    active: false,
  });

  const addDispenserAction = async (action) => {
    return new Promise((resolve) => {
      setDispenserStatus({ active: true });
      setTimeout(() => {
        setDispenserAction((prev) => [...prev, action]);
        setDispenserStatus({ active: false });
        resolve();
      }, timeInterval);
    });
  };

  const resetDispenserAction = () => {
    setDispenserStatus({ active: false });
    setDispenserAction([]);
  };

  return {
    dispenserAction,
    dispenserStatus,
    resetDispenserAction,
    addDispenserAction,
  };
};
