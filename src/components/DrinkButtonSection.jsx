import { useRef } from "react";

import { DRINK } from "../constants";

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

  const buyDrink = (drink) => async () => {
    if (timeId.current) return;
    setInputMoney((prev) => prev - DRINK[drink].PRICE);
    await makeDrink(DRINK[drink].ACTION);
    timeId.current = null;
  };

  return (
    <section>
      <h2>자판기 버튼</h2>
      <DrinkButton
        onClick={buyDrink(DRINK.MILK.NAME)}
        disabled={inputMoney < DRINK.MILK.PRICE}
      >
        우유
      </DrinkButton>
      <DrinkButton
        onClick={buyDrink(DRINK.ESPRESSO.NAME)}
        disabled={inputMoney < DRINK.ESPRESSO.PRICE}
      >
        에스프레소
      </DrinkButton>
      <DrinkButton
        onClick={buyDrink(DRINK.AMERICANO.NAME)}
        disabled={inputMoney < DRINK.AMERICANO.PRICE}
      >
        아메리카노
      </DrinkButton>
      <DrinkButton
        onClick={buyDrink(DRINK.CAFELATTE.NAME)}
        disabled={inputMoney < DRINK.CAFELATTE.PRICE}
      >
        카페라떼
      </DrinkButton>
    </section>
  );
}

export default DrinkButtonSection;
