import { useState } from "react";

import { DISPENSER_TIME_INTERVAL } from "../constants";

import { useHandleDispenser } from "../hooks/useHandleDispenser";

import DrinkButtonSection from "./DrinkButtonSection";
import InsertMoneySection from "./InsertMoneySection";
import ReturnMoneySection from "./ReturnMoneySection";

function App() {
  const [inputMoney, setInputMoney] = useState(0);
  const { dispenserAction, handleDispenser, setDispenserAction } =
    useHandleDispenser(DISPENSER_TIME_INTERVAL);

  return (
    <div className="App">
      <h1>자판기</h1>
      <InsertMoneySection
        inputMoney={inputMoney}
        setInputMoney={setInputMoney}
      />
      <ReturnMoneySection
        inputMoney={inputMoney}
        setInputMoney={setInputMoney}
      />
      <DrinkButtonSection
        handleDispenser={handleDispenser}
        setDispenserAction={setDispenserAction}
        inputMoney={inputMoney}
        setInputMoney={setInputMoney}
      />
      <section>
        <h2>디스펜서</h2>
        {dispenserAction.map((action) => (
          <p key={action}>{action}</p>
        ))}
      </section>
    </div>
  );
}

export default App;
