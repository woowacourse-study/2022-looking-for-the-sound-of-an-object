import { useState } from "react";

export const useCardTerminal = (initialMessage, endMessage, timeInterval) => {
  const [cardTerminalMessage, setCardTerminalMessage] =
    useState(initialMessage);
  const [cardTerminalStatus, setCardTerminalStatus] = useState({
    active: false,
  });

  const updateCardTerminal = () => {
    setCardTerminalMessage(initialMessage);
    setCardTerminalStatus({ active: true });

    setTimeout(() => {
      setCardTerminalMessage(endMessage);
      setCardTerminalStatus({ active: false });
    }, timeInterval);
  };

  return { cardTerminalMessage, cardTerminalStatus, updateCardTerminal };
};
