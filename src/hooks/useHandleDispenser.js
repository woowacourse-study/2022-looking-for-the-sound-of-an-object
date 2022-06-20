import { useState } from "react";

export const useHandleDispenser = (timeInterval) => {
  const [dispenserAction, setDispenserAction] = useState([]);
  const handleDispenser = async (ingredient, timeId) => {
    return new Promise((resolve) => {
      timeId.current = setTimeout(() => {
        setDispenserAction((prev) => [...prev, ingredient]);
        resolve();
      }, timeInterval);
    });
  };

  return { dispenserAction, setDispenserAction, handleDispenser };
};
