import { useState } from "react";

import { COIN_UNIT, DISPENSER_TIME_INTERVAL } from "../constants";

import { useHandleDispenser } from "../hooks/useHandleDispenser";

import DrinkButtonSection from "./DrinkButtonSection";
import InsertMoneySection from "./InsertMoneySection";

const initialChangeState = {
  [COIN_UNIT[500]]: 0,
  [COIN_UNIT[100]]: 0,
  [COIN_UNIT[50]]: 0,
  [COIN_UNIT[10]]: 0,
};

function App() {
  const [inputMoney, setInputMoney] = useState(0);
  const [changes, setChanges] = useState(initialChangeState);
  const { dispenserAction, handleDispenser, setDispenserAction } =
    useHandleDispenser(DISPENSER_TIME_INTERVAL);

  const returnMoney = () => {
    if (inputMoney <= 0) {
      alert("반환할 돈이 없습니다.");
      return;
    }

    let leftMoney = inputMoney;
    let counts = initialChangeState;
    Object.keys(COIN_UNIT)
      .sort((a, b) => b - a)
      .forEach((unit) => {
        counts[COIN_UNIT[unit]] = Math.floor(leftMoney / COIN_UNIT[unit]);
        leftMoney %= COIN_UNIT[unit];
      });
    setChanges(counts);
    setInputMoney(leftMoney);
  };

  const totalChanges = Object.entries(changes).reduce(
    (acc, [unit, count]) => acc + unit * count,
    0
  );

  return (
    <div className="App">
      <h1>자판기</h1>
      <InsertMoneySection
        inputMoney={inputMoney}
        setInputMoney={setInputMoney}
      />
      <section>
        <h2>금액 반환구</h2>
        <button type="button" onClick={returnMoney}>
          반환하기
        </button>
        <p>
          반환한 금액: <span>{totalChanges.toLocaleString()}</span>원 <br />
          500원: <span>{changes[COIN_UNIT[500]]}</span>개 <br />
          100원: <span>{changes[COIN_UNIT[100]]}</span>개 <br />
          50원: <span>{changes[COIN_UNIT[50]]}</span>개 <br />
          10원: <span>{changes[COIN_UNIT[10]]}</span>개 <br />
        </p>
      </section>
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
