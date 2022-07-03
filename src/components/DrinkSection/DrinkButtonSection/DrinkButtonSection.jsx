import { useState } from "react";

import { DRINKS, INSERT_MONEY_RANGE } from "constants";

import OutlinedButton from "components/common/OutlinedButton/OutlinedButton";
import SectionHeader from "components/common/SectionHeader/SectionHeader";

import DrinkButton from "components/DrinkSection/DrinkButton/DrinkButton";
import * as S from "components/DrinkSection/DrinkButtonSection/DrinkButtonSection.style";
import DrinkListItem from "components/DrinkSection/DrinkListItem/DrinkListItem";

function DrinkButtonSection({
  inputMoney,
  paymentMethod,
  cardTerminalStatus: { active: isCardTerminalProcessing },
  dispenserStatus: { active: isDispenserProcessing },
  addDispenserAction,
  resetDispenserAction,
  addInputMoney,
  subtractInputMoney,
}) {
  const [latestDrinks, setLatestDrinks] = useState([]);

  const isDisabledDrinkButton = (drinkKey) =>
    paymentMethod === "cash"
      ? inputMoney < (DRINKS[drinkKey]?.PRICE || INSERT_MONEY_RANGE.MAX) ||
        isDispenserProcessing
      : isDispenserProcessing || isCardTerminalProcessing;

  const addDrinkToList = ({ target: { name: drinkKey } }) => {
    if (isDispenserProcessing) return;
    if (paymentMethod === "card") {
      setLatestDrinks((prev) => [...prev, drinkKey]);
      return;
    }

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
    }
    setLatestDrinks([]);
  };

  const makeDrink = async (dispenserActionList) => {
    for (const action of dispenserActionList) {
      await addDispenserAction(action);
    }
  };

  const refundMoney = () => {
    if (isDispenserProcessing) {
      alert("음료가 나온 후에는 환불할 수 없습니다.");
      return;
    }
    if (!latestDrinks.length) return;
    if (!window.confirm(`정말 구입한 음료(들)를 환불하시겠습니까?`)) return;
    if (paymentMethod === "card") {
      resetDispenserAction();
      setLatestDrinks([]);
      return;
    }

    const refundedMoney = latestDrinks.reduce(
      (acc, drink) => acc + DRINKS[drink].PRICE,
      0
    );
    if (inputMoney + refundedMoney > INSERT_MONEY_RANGE.MAX) {
      alert(
        `최대 ${INSERT_MONEY_RANGE.MAX}원까지 투입할 수 있습니다. 먼저 투입한 금액을 반환한 후 다시 시도해주세요.`
      );
      return;
    }
    addInputMoney(refundedMoney);
    resetDispenserAction();
    setLatestDrinks([]);
  };

  return (
    <>
      <S.ButtonSectionContainer>
        <SectionHeader>자판기 버튼</SectionHeader>
        <S.DrinkButtonList>
          {Object.keys(DRINKS).map((drinkKey) => (
            <DrinkButton
              key={drinkKey}
              name={drinkKey}
              price={DRINKS[drinkKey].PRICE}
              onClick={addDrinkToList}
              disabled={isDisabledDrinkButton(drinkKey)}
            >
              {DRINKS[drinkKey].NAME}
            </DrinkButton>
          ))}
        </S.DrinkButtonList>
        <OutlinedButton
          type="button"
          onClick={refundMoney}
          disabled={!latestDrinks.length || isDispenserProcessing}
        >
          환불하기
        </OutlinedButton>
      </S.ButtonSectionContainer>
      <S.ListSectionContainer>
        <SectionHeader>구입한 목록</SectionHeader>
        <S.DrinkList>
          {latestDrinks.length ? (
            latestDrinks.map((drink, index) => (
              <DrinkListItem key={index}>{DRINKS[drink].NAME}</DrinkListItem>
            ))
          ) : (
            <S.NoDrinkText>구입한 목록이 없습니다.</S.NoDrinkText>
          )}
        </S.DrinkList>
        <OutlinedButton
          type="button"
          onClick={buyDrinkList}
          disabled={!latestDrinks.length || isDispenserProcessing}
        >
          음료 받기
        </OutlinedButton>
      </S.ListSectionContainer>
    </>
  );
}

export default DrinkButtonSection;
