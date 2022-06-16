import { useState } from "react";

import DrinkSection from "components/DrinkSection";
import InsertMoneySection from "components/MoneySection/InsertMoneySection";
import ReturnMoneySection from "components/MoneySection/ReturnMoneySection";

function App() {
  const [inputMoney, setInputMoney] = useState(0);

  return (
    <main className="App">
      <h1>자판기</h1>
      <InsertMoneySection
        inputMoney={inputMoney}
        setInputMoney={setInputMoney}
      />
      <ReturnMoneySection
        inputMoney={inputMoney}
        setInputMoney={setInputMoney}
      />
      <DrinkSection inputMoney={inputMoney} setInputMoney={setInputMoney} />
    </main>
  );
}

export default App;
