import { useRef, useState } from "react";

import { DRINK } from "constants";
import { INSERT_MONEY_RANGE } from "constants";

import DrinkButton from "components/DrinkSection/DrinkButton";
import OutlinedButton from "components/common/OutlinedButton";

function DrinkButtonSection({
  inputMoney,
  addDispenserAction,
  resetDispenserAction,
  addInputMoney,
  subtractInputMoney,
}) {
  const [latestDrinks, setLatestDrinks] = useState([]);
  const timeId = useRef(null);
  const isDispenserProcessing = !!timeId.current;

  const addDrinkToList = (drink) => () => {
    if (isDispenserProcessing) return;

    const drinkPrice = DRINK[drink].PRICE;
    if (drinkPrice > inputMoney) {
      alert("더 이상 구입할 수 없습니다.");
      return;
    }
    subtractInputMoney(drinkPrice);
    setLatestDrinks((prev) => [...prev, drink]);
  };

  const buyDrinkList = async () => {
    if (isDispenserProcessing || !latestDrinks.length) return;
    if (
      !window.confirm(
        `음료가 나오면 환불할 수 없습니다. 음료를 받으시겠습니까?`
      )
    )
      return;

    resetDispenserAction();
    for (const drink of latestDrinks) {
      await makeDrink(DRINK[drink].ACTION);
      timeId.current = null;
    }
    setLatestDrinks([]);
  };

  const makeDrink = async (dispenserActionList) => {
    for (const action of dispenserActionList) {
      await addDispenserAction(action, timeId);
    }
  };

  const refundMoney = () => {
    if (isDispenserProcessing) {
      alert("음료가 나온 후에는 환불할 수 없습니다.");
      return;
    }
    if (!latestDrinks.length) return;
    if (!window.confirm(`정말 구입한 음료(들)를 환불하시겠습니까?`)) return;

    const refundMoney = latestDrinks.reduce(
      (acc, drink) => acc + DRINK[drink].PRICE,
      0
    );
    if (inputMoney + refundMoney > INSERT_MONEY_RANGE.MAX) {
      alert(
        `최대 ${INSERT_MONEY_RANGE.MAX}원까지 투입할 수 있습니다. 먼저 투입한 금액을 반환한 후 다시 시도해주세요.`
      );
      return;
    }
    addInputMoney(refundMoney);
    resetDispenserAction();
    setLatestDrinks([]);
  };

  return (
    <section>
      <h2>자판기 버튼</h2>
      <DrinkButton
        onClick={addDrinkToList(DRINK.MILK.NAME)}
        inputMoney={inputMoney}
        isDispenserProcessing={isDispenserProcessing}
      >
        MILK
      </DrinkButton>
      <DrinkButton
        onClick={addDrinkToList(DRINK.ESPRESSO.NAME)}
        inputMoney={inputMoney}
        isDispenserProcessing={isDispenserProcessing}
      >
        ESPRESSO
      </DrinkButton>
      <DrinkButton
        onClick={addDrinkToList(DRINK.AMERICANO.NAME)}
        inputMoney={inputMoney}
        isDispenserProcessing={isDispenserProcessing}
      >
        AMERICANO
      </DrinkButton>
      <DrinkButton
        onClick={addDrinkToList(DRINK.CAFELATTE.NAME)}
        inputMoney={inputMoney}
        isDispenserProcessing={isDispenserProcessing}
      >
        CAFELATTE
      </DrinkButton>
      <OutlinedButton
        type="button"
        onClick={refundMoney}
        disabled={!latestDrinks.length || isDispenserProcessing}
      >
        환불하기
      </OutlinedButton>
      <section>
        <h3>구입한 목록</h3>
        <p>{latestDrinks.join(", ")}</p>
        <OutlinedButton
          type="button"
          onClick={buyDrinkList}
          disabled={!latestDrinks.length || isDispenserProcessing}
        >
          음료 받기
        </OutlinedButton>
      </section>
    </section>
  );
}

export default DrinkButtonSection;
