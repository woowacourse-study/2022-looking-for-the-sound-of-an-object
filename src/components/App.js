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
  const { dispenserAction, handleDispenser, setDispenserAction } =
    useHandleDispenser(500);
  const timeId = useRef(null);

  const makeMilk = async () => {
    if (timeId.current) return;
    setDispenserAction([]);
    await handleDispenser("컵", timeId);
    await handleDispenser("우유", timeId);
    timeId.current = null;
  };

  const makeEspresso = async () => {
    if (timeId.current) return;
    setDispenserAction([]);
    await handleDispenser("컵", timeId);
    await handleDispenser("에스프레소", timeId);
    timeId.current = null;
  };

  const makeAmericano = async () => {
    if (timeId.current) return;
    setDispenserAction([]);
    await handleDispenser("컵", timeId);
    await handleDispenser("에스프레소", timeId);
    await handleDispenser("뜨거운 물", timeId);
    timeId.current = null;
  };

  const makeCafeLatte = async () => {
    if (timeId.current) return;
    setDispenserAction([]);
    await handleDispenser("컵", timeId);
    await handleDispenser("우유", timeId);
    await handleDispenser("에스프레소", timeId);
    timeId.current = null;
  };

  return (
    <div className="App">
      <h1>자판기</h1>
      <h2>자판기 버튼</h2>
      <button type="button" onClick={makeMilk}>
        우유
      </button>
      <button type="button" onClick={makeEspresso}>
        에스프레소
      </button>
      <button type="button" onClick={makeAmericano}>
        아메리카노
      </button>
      <button type="button" onClick={makeCafeLatte}>
        카페라떼
      </button>
      <h2>디스펜서</h2>
      {dispenserAction.map((action) => (
        <p key={action}>{action}</p>
      ))}
    </div>
  );
}

export default App;
