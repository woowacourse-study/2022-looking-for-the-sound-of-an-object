import { useRef, useState } from "react";

import { DISPENSER_TIME_INTERVAL, INSERT_MONEY_RANGE } from "../constants";

import { useHandleDispenser } from "../hooks/useHandleDispenser";

import DrinkButtonSection from "./DrinkButtonSection";

function App() {
  const [inputMoney, setInputMoney] = useState(0);
  const { dispenserAction, handleDispenser, setDispenserAction } =
    useHandleDispenser(DISPENSER_TIME_INTERVAL);
  const insertedMoney = useRef(null);

  const InsertMoney = () => {
    const insert = insertedMoney.current.valueAsNumber;
    if (inputMoney + insert >= INSERT_MONEY_RANGE.MAX) {
      alert(
        `더이상 금액을 넣을 수 없습니다(최대 ${INSERT_MONEY_RANGE.MAX.toLocaleString()}원).`
      );
      return;
    }
    setInputMoney((prev) => prev + insert);
  };

  return (
    <div className="App">
      <h1>자판기</h1>
      <section>
        <h2>금액 투입구</h2>
        <label htmlFor="insert">금액을 투입해 주세요.</label>
        <br />
        <input
          id="insert"
          type="number"
          max={INSERT_MONEY_RANGE.MAX}
          min={INSERT_MONEY_RANGE.MIN}
          step={100}
          placeholder="1,000"
          ref={insertedMoney}
        />
        원
        <button type="button" onClick={InsertMoney}>
          투입하기
        </button>
        <p>
          투입한 금액: <span>{inputMoney.toLocaleString()}</span>원
        </p>
      </section>
      <DrinkButtonSection
        handleDispenser={handleDispenser}
        setDispenserAction={setDispenserAction}
        inputMoney={inputMoney}
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
