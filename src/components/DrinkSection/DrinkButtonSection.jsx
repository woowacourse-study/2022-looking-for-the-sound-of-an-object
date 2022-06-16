import { useRef, useState } from "react";

import { DRINK } from "constants";

import DrinkButton from "components/DrinkSection/DrinkButton";

function DrinkButtonSection({
  inputMoney,
  setDispenserAction,
  handleDispenser,
  setInputMoney,
}) {
  const [latestDrinks, setLatestDrinks] = useState([]);
  const timeId = useRef(null);

  const addDrinkToList = (drink) => () => {
    const drinkPrice = DRINK[drink].PRICE;
    if (drinkPrice > inputMoney) {
      alert("더 이상 구입할 수 없습니다.");
      return;
    }
    setInputMoney((prev) => prev - drinkPrice);
    setLatestDrinks((prev) => [...prev, drink]);
  };

  const buyDrinkList = async () => {
    if (timeId.current || !latestDrinks.length) return;
    if (
      window.confirm(`음료가 나오면 환불할 수 없습니다. 음료를 받으시겠습니까?`)
    ) {
      setDispenserAction([]);
      for (const drink of latestDrinks) {
        await makeDrink(DRINK[drink].ACTION);
        timeId.current = null;
      }
      setLatestDrinks([]);
    }
  };

  const makeDrink = async (dispenserActionList) => {
    for (const action of dispenserActionList) {
      await handleDispenser(action, timeId);
    }
  };

  const refundMoney = () => {
    if (timeId.current) {
      alert("음료가 나온 후에는 환불할 수 없습니다.");
      return;
    }
    if (!latestDrinks.length) return;
    if (window.confirm(`정말 구입한 음료(들)를 환불하시겠습니까?`)) {
      const refundMoney = latestDrinks.reduce(
        (acc, drink) => acc + DRINK[drink].PRICE,
        0
      );
      setInputMoney((prev) => prev + refundMoney);
      setDispenserAction([]);
      setLatestDrinks([]);
    }
  };

  return (
    <section>
      <h2>자판기 버튼</h2>
      <DrinkButton
        onClick={addDrinkToList(DRINK.MILK.NAME)}
        disabled={inputMoney < DRINK.MILK.PRICE}
      >
        우유
      </DrinkButton>
      <DrinkButton
        onClick={addDrinkToList(DRINK.ESPRESSO.NAME)}
        disabled={inputMoney < DRINK.ESPRESSO.PRICE}
      >
        에스프레소
      </DrinkButton>
      <DrinkButton
        onClick={addDrinkToList(DRINK.AMERICANO.NAME)}
        disabled={inputMoney < DRINK.AMERICANO.PRICE}
      >
        아메리카노
      </DrinkButton>
      <DrinkButton
        onClick={addDrinkToList(DRINK.CAFELATTE.NAME)}
        disabled={inputMoney < DRINK.CAFELATTE.PRICE}
      >
        카페라떼
      </DrinkButton>
      <button
        type="button"
        onClick={refundMoney}
        disabled={!latestDrinks.length}
      >
        환불하기
      </button>
      <section>
        <h3>구입한 목록</h3>
        <p>{latestDrinks.join(", ")}</p>
        <button type="button" onClick={buyDrinkList}>
          음료 받기
        </button>
      </section>
    </section>
  );
}

export default DrinkButtonSection;
