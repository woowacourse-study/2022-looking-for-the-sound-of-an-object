import { useRef, useState } from "react";

const useHandleDispenser = (timeInterval) => {
  const [dispenserAction, setDispenserAction] = useState([]);
  const handleDispenser = async (ingredient, timeId) => {
    return new Promise((resolve) => {
      timeId.current = setTimeout(() => {
        setDispenserAction((prev) => [...prev, ingredient]);
        resolve();
      }, timeInterval);
    });
  };

  return { dispenserAction, setDispenserAction, handleDispenser };
};

function App() {
  const [inputMoney, setInputMoney] = useState(0);
  const { dispenserAction, handleDispenser, setDispenserAction } =
    useHandleDispenser(500);
  const insertedMoney = useRef(null);
  const timeId = useRef(null);

  const InsertMoney = () => {
    const insert = insertedMoney.current.valueAsNumber;
    if (inputMoney + insert >= 50000) {
      alert("더이상 금액을 넣을 수 없습니다(최대 5만원).");
      return;
    }
    setInputMoney((prev) => prev + insert);
  };

  const makeMilk = async () => {
    if (timeId.current) return;
    setDispenserAction([]);
    await handleDispenser("컵", timeId);
    await handleDispenser("우유", timeId);
    await handleDispenser("우유 나왔습니다~ :D", timeId);
    timeId.current = null;
  };

  const makeEspresso = async () => {
    if (timeId.current) return;
    setDispenserAction([]);
    await handleDispenser("컵", timeId);
    await handleDispenser("에스프레소", timeId);
    await handleDispenser("에스프레소 나왔습니다~ :D", timeId);
    timeId.current = null;
  };

  const makeAmericano = async () => {
    if (timeId.current) return;
    setDispenserAction([]);
    await handleDispenser("컵", timeId);
    await handleDispenser("에스프레소", timeId);
    await handleDispenser("뜨거운 물", timeId);
    await handleDispenser("아메리카노 나왔습니다~ :D", timeId);
    timeId.current = null;
  };

  const makeCafeLatte = async () => {
    if (timeId.current) return;
    setDispenserAction([]);
    await handleDispenser("컵", timeId);
    await handleDispenser("우유", timeId);
    await handleDispenser("에스프레소", timeId);
    await handleDispenser("카페라떼 나왔습니다~ :D", timeId);
    timeId.current = null;
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
          max={50000}
          min={100}
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
      <section>
        <h2>자판기 버튼</h2>
        <button type="button" onClick={makeMilk} disabled={inputMoney < 1000}>
          우유
        </button>
        <button
          type="button"
          onClick={makeEspresso}
          disabled={inputMoney < 1000}
        >
          에스프레소
        </button>
        <button
          type="button"
          onClick={makeAmericano}
          disabled={inputMoney < 1500}
        >
          아메리카노
        </button>
        <button
          type="button"
          onClick={makeCafeLatte}
          disabled={inputMoney < 2000}
        >
          카페라떼
        </button>
      </section>
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
