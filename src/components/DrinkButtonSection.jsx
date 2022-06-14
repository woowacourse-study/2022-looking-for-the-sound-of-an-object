import { useRef, useState } from "react";

import { DRINK } from "../constants";

import DrinkButton from "./DrinkButton";

function DrinkButtonSection({
  inputMoney,
  setDispenserAction,
  handleDispenser,
  setInputMoney,
}) {
  const [latestDrink, setLatestDrink] = useState("");
  const timeId = useRef(null);

  const makeDrink = async (dispenserActionList) => {
    setDispenserAction([]);
    for (const action of dispenserActionList) {
      await handleDispenser(action, timeId);
    }
  };

  const buyDrink = (drink) => async () => {
    if (timeId.current) return;
    if (
      window.confirm(
        `${drink}를 구매하시는 게 맞나요? 음료가 나온 후에 환불할 수 있습니다.`
      )
    ) {
      setLatestDrink(DRINK[drink].NAME);
      setInputMoney((prev) => prev - DRINK[drink].PRICE);
      await makeDrink(DRINK[drink].ACTION);
      timeId.current = null;
    }
  };

  const refundMoney = () => {
    if (timeId.current) {
      alert("음료가 나온 후에 환불할 수 있습니다.");
      return;
    }
    if (
      latestDrink &&
      window.confirm(`정말 ${latestDrink}를 환불하시겠습니까?`)
    ) {
      setDispenserAction([]);
      setLatestDrink("");
      setInputMoney((prev) => prev + DRINK[latestDrink].PRICE);
    }
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
      <button type="button" onClick={refundMoney} disabled={!latestDrink}>
        환불하기
      </button>
    </section>
  );
}

export default DrinkButtonSection;
