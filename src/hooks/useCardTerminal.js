import { useState } from "react";

export const useCardTerminal = (initialMessage, endMessage, timeInterval) => {
  const [cardTerminal, setCardTerminal] = useState({
    message: initialMessage,
    active: false,
  });

  const updateCardTerminal = () => {
    setCardTerminal({ message: initialMessage, active: true });

    setTimeout(() => {
      setCardTerminal({ message: endMessage, active: false });
    }, timeInterval);
  };

  return { cardTerminal, updateCardTerminal };
};
