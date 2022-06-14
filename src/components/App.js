import { useState } from "react";

const useHandleDispenser = (timeInterval) => {
  const [dispenserAction, setDispenserAction] = useState([]);
  const handleDispenser = async (ingredient) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        setDispenserAction((prev) => [...prev, ingredient]);
        resolve();
      }, timeInterval);
    });
  };

  return { dispenserAction, setDispenserAction, handleDispenser };
};

function App() {
  const { dispenserAction, handleDispenser, setDispenserAction } =
    useHandleDispenser(500);
  const handleClickAmericanoButton = async () => {
    setDispenserAction([]);
    await handleDispenser("컵");
    await handleDispenser("에스프레소");
    await handleDispenser("뜨거운 물");
  };

  return (
    <div className="App">
      <button type="button" onClick={handleClickAmericanoButton}>
        아메리카노
      </button>
      {dispenserAction.map((action) => (
        <p key={action}>{action}</p>
      ))}
    </div>
  );
}

export default App;
