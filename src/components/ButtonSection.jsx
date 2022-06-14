import { useRef } from "react";

export const DRINK_PRICE = {
  milk: 1000,
  espresso: 1000,
  americano: 1500,
  cafeLatte: 2000,
};

function ButtonSection({ inputMoney, setDispenserAction, handleDispenser }) {
  const timeId = useRef(null);

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
    <section>
      <h2>자판기 버튼</h2>
      <button
        type="button"
        onClick={makeMilk}
        disabled={inputMoney < DRINK_PRICE.milk}
      >
        우유
      </button>
      <button
        type="button"
        onClick={makeEspresso}
        disabled={inputMoney < DRINK_PRICE.espresso}
      >
        에스프레소
      </button>
      <button
        type="button"
        onClick={makeAmericano}
        disabled={inputMoney < DRINK_PRICE.americano}
      >
        아메리카노
      </button>
      <button
        type="button"
        onClick={makeCafeLatte}
        disabled={inputMoney < DRINK_PRICE.cafeLatte}
      >
        카페라떼
      </button>
    </section>
  );
}

export default ButtonSection;
