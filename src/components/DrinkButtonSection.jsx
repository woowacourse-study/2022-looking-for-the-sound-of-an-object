import { useRef } from "react";

import { DRINK_PRICE } from "../constants";
import DrinkButton from "./DrinkButton";

function DrinkButtonSection({
  inputMoney,
  setDispenserAction,
  handleDispenser,
}) {
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
      <DrinkButton onClick={makeMilk} disabled={inputMoney < DRINK_PRICE.milk}>
        우유
      </DrinkButton>
      <DrinkButton
        onClick={makeEspresso}
        disabled={inputMoney < DRINK_PRICE.espresso}
      >
        에스프레소
      </DrinkButton>
      <DrinkButton
        onClick={makeAmericano}
        disabled={inputMoney < DRINK_PRICE.americano}
      >
        아메리카노
      </DrinkButton>
      <DrinkButton
        onClick={makeCafeLatte}
        disabled={inputMoney < DRINK_PRICE.cafeLatte}
      >
        카페라떼
      </DrinkButton>
    </section>
  );
}

export default DrinkButtonSection;
