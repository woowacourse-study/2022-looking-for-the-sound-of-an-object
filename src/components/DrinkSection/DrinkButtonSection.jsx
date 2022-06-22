import { useRef, useState } from "react";

import { DRINKS, INSERT_MONEY_RANGE } from "constants";

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

  const addDrinkToList = ({ target: { name: drinkKey } }) => {
    if (isDispenserProcessing) return;

    const drinkPrice = DRINKS[drinkKey].PRICE;
    if (drinkPrice > inputMoney) {
      alert("더 이상 구입할 수 없습니다.");
      return;
    }
    subtractInputMoney(drinkPrice);
    setLatestDrinks((prev) => [...prev, drinkKey]);
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
      await makeDrink(DRINKS[drink].ACTION);
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
      (acc, drink) => acc + DRINKS[drink].PRICE,
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
    <>
      <section>
        <h2>자판기 버튼</h2>
        {Object.keys(DRINKS).map((drinkKey) => (
          <DrinkButton
            name={drinkKey}
            onClick={addDrinkToList}
            disabled={
              inputMoney <
                (DRINKS[drinkKey]?.PRICE || INSERT_MONEY_RANGE.MAX) ||
              isDispenserProcessing
            }
          >
            {DRINKS[drinkKey].NAME}
          </DrinkButton>
        ))}
        <OutlinedButton
          type="button"
          onClick={refundMoney}
          disabled={!latestDrinks.length || isDispenserProcessing}
        >
          환불하기
        </OutlinedButton>
      </section>
      <section>
        <h2>구입한 목록</h2>
        <p>{latestDrinks.join(", ")}</p>
        <OutlinedButton
          type="button"
          onClick={buyDrinkList}
          disabled={!latestDrinks.length || isDispenserProcessing}
        >
          음료 받기
        </OutlinedButton>
      </section>
    </>
  );
}

export default DrinkButtonSection;
