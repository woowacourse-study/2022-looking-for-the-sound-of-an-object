import { useState } from "react";

import { useCardTerminal } from "hooks/useCardTerminal";

import Header from "components/layout/Header/Header";
import Main from "components/layout/Main/Main";

import DrinkSection from "components/DrinkSection/DrinkSection";
import MoneySection from "components/MoneySection/MoneySection";

function App() {
  const [inputMoney, setInputMoney] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const { cardTerminal, updateCardTerminal } = useCardTerminal(
    "카드 인식 중...",
    "카드가 인식되었습니다 :D",
    2000
  );

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
          paymentMethod={paymentMethod}
          cardTerminalMessage={cardTerminal.message}
          addInputMoney={addInputMoney}
          changeInputMoney={changeInputMoney}
          setPaymentMethod={setPaymentMethod}
          updateCardTerminal={updateCardTerminal}
        />
        <DrinkSection
          inputMoney={inputMoney}
          paymentMethod={paymentMethod}
          isCardTerminalActive={cardTerminal.active}
          addInputMoney={addInputMoney}
          subtractInputMoney={subtractInputMoney}
        />
      </Main>
    </div>
  );
}

export default App;
