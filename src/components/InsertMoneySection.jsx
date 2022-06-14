import { useRef } from "react";

import { INSERT_MONEY_RANGE } from "../constants";

function InsertMoneySection({ inputMoney, setInputMoney }) {
  const insertMoneyRef = useRef(null);

  const InsertMoney = () => {
    const insert = insertMoneyRef.current.valueAsNumber;
    if (inputMoney + insert >= INSERT_MONEY_RANGE.MAX) {
      alert(
        `더이상 금액을 넣을 수 없습니다(최대 ${INSERT_MONEY_RANGE.MAX.toLocaleString()}원).`
      );
      return;
    }
    setInputMoney((prev) => prev + insert);
  };

  return (
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
        ref={insertMoneyRef}
      />
      원
      <button type="button" onClick={InsertMoney}>
        투입하기
      </button>
      <p>
        투입한 금액: <span>{inputMoney.toLocaleString()}</span>원
      </p>
    </section>
  );
}

export default InsertMoneySection;
