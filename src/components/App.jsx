import MoneySection from "./MoneySection/MoneySection";
import Header from "./layout/Header/Header";
import { useState } from "react";

import Main from "components/layout/Main/Main";

import DrinkSection from "components/DrinkSection/DrinkSection";

function App() {
  const [inputMoney, setInputMoney] = useState(0);

  const addInputMoney = (money) => {
    setInputMoney((prev) => prev + money);
  };

  const subtractInputMoney = (money) => {
    setInputMoney((prev) => prev - money);
  };

  const changeInputMoney = (money) => {
    setInputMoney(money);
  };

  return (
    <div id="app">
      <Header>태태 자판기</Header>
      <Main>
        <MoneySection
          inputMoney={inputMoney}
          addInputMoney={addInputMoney}
          changeInputMoney={changeInputMoney}
        />
        <DrinkSection
          inputMoney={inputMoney}
          addInputMoney={addInputMoney}
          subtractInputMoney={subtractInputMoney}
        />
      </Main>
    </div>
  );
}

export default App;
