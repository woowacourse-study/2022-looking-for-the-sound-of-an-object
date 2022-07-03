import Header from "./layout/Header/Header";
import { useState } from "react";

import Main from "components/layout/Main/Main";

import DrinkSection from "components/DrinkSection/DrinkSection";
import InsertMoneySection from "components/MoneySection/InsertMoneySection/InsertMoneySection";
import ReturnMoneySection from "components/MoneySection/ReturnMoneySection/ReturnMoneySection";

function App() {
  // TODO: 나중엔 Context API로 관리
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
        <InsertMoneySection
          inputMoney={inputMoney}
          addInputMoney={addInputMoney}
        />
        <ReturnMoneySection
          inputMoney={inputMoney}
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
