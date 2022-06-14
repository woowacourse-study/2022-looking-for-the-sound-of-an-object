import { useRef } from "react";

import { DRINK_PRICE } from "../constants";
import DrinkButton from "./DrinkButton";

function DrinkButtonSection({
  inputMoney,
  setDispenserAction,
  handleDispenser,
  setInputMoney,
}) {
  const timeId = useRef(null);

  const makeDrink = async (dispenserActionList) => {
    setDispenserAction([]);
    for (const action of dispenserActionList) {
      await handleDispenser(action, timeId);
    }
  };

  const buyMilk = async () => {
    if (timeId.current) return;
    setInputMoney((prev) => prev - DRINK_PRICE.milk);
    await makeDrink(["컵", "우유", "우유 나왔습니다~ :D"]);
    timeId.current = null;
  };

  const buyEspresso = async () => {
    if (timeId.current) return;
    setInputMoney((prev) => prev - DRINK_PRICE.espresso);
    await makeDrink(["컵", "에스프레소", "에스프레소 나왔습니다~ :D"]);
    timeId.current = null;
  };

  const buyAmericano = async () => {
    if (timeId.current) return;
    setInputMoney((prev) => prev - DRINK_PRICE.americano);
    await makeDrink([
      "컵",
      "에스프레소",
      "뜨거운 물",
      "아메리카노 나왔습니다~ :D",
    ]);
    timeId.current = null;
  };

  const buyCafeLatte = async () => {
    if (timeId.current) return;
    setInputMoney((prev) => prev - DRINK_PRICE.cafeLatte);
    await makeDrink(["컵", "우유", "에스프레소", "카페라떼 나왔습니다~:D"]);
    timeId.current = null;
  };

  return (
    <section>
      <h2>자판기 버튼</h2>
      <DrinkButton onClick={buyMilk} disabled={inputMoney < DRINK_PRICE.milk}>
        우유
      </DrinkButton>
      <DrinkButton
        onClick={buyEspresso}
        disabled={inputMoney < DRINK_PRICE.espresso}
      >
        에스프레소
      </DrinkButton>
      <DrinkButton
        onClick={buyAmericano}
        disabled={inputMoney < DRINK_PRICE.americano}
      >
        아메리카노
      </DrinkButton>
      <DrinkButton
        onClick={buyCafeLatte}
        disabled={inputMoney < DRINK_PRICE.cafeLatte}
      >
        카페라떼
      </DrinkButton>
    </section>
  );
}

export default DrinkButtonSection;
