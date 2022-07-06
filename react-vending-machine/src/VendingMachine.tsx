import { useState } from "react";
import styled from "styled-components";

import Button from "./components/Button";
import CoinDispenser from "./components/CoinDispenser";
import DrinkDispenser from "./components/DrinkDispenser";

import Menu from "./components/Menu";
import MoneyDisplay from "./components/MoneyDisplay";
import MoneyInput from "./components/MoneyInput";
import CardPayment from "./components/CardPayment";

import { DrinkType, menus, STATUS } from "./constants";
import { ValueOf } from "./types";

export default function VendingMachine() {
  const [chargeMoney, setChargeMoney] = useState("");
  const [returnMoney, setReturnMoney] = useState(0);
  const [totalMoney, setTotalMoney] = useState(0);
  const [vendingMachineState, setVendingMachineState] = useState<
    ValueOf<typeof STATUS>
  >(STATUS.READY);
  const [drink, setDrink] = useState<DrinkType>();

  const handleChargeMoneyChange = (e: React.FormEvent<HTMLInputElement>) => {
    setChargeMoney(e.currentTarget.value);
  };

  const handleMoneySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTotalMoney((prev) => (prev += +chargeMoney));
    setChargeMoney("");
  };

  const handleMenuClick = (name: DrinkType, price: number) => () => {
    setDrink(name);

    if (vendingMachineState === STATUS.CARD) {
      setVendingMachineState(STATUS.WORKING);
      return;
    }

    setVendingMachineState(STATUS.WORKING);
    setTotalMoney((prev) => (prev -= price));
  };

  const handleReturnClick = () => {
    if (totalMoney === 0) {
      return alert("반환할 잔돈이 없습니다");
    }
    setReturnMoney(totalMoney);

    setTotalMoney(0);
  };

  const handleCardPaymentClick = () => {
    setVendingMachineState(STATUS.CARD);
  };

  return (
    <StyledVendingMachine>
      <h1>도리의 자판기</h1>
      <StyledMenus>
        {Object.entries(menus).map(([key, value]) => (
          <Menu
            lightOn={
              (value.price <= totalMoney &&
                vendingMachineState === STATUS.READY) ||
              vendingMachineState === STATUS.CARD
            }
            name={key}
            icon={value.icon}
            price={value.price}
            key={key}
            onClick={handleMenuClick(key as DrinkType, value.price)}
          />
        ))}
      </StyledMenus>
      <StyledMoneyBox>
        <MoneyDisplay>{+totalMoney}</MoneyDisplay>
        <StyledMoney>
          <MoneyInput
            onSubmit={handleMoneySubmit}
            onChange={handleChargeMoneyChange}
            value={chargeMoney}
            disabled={vendingMachineState === STATUS.WORKING}
          />
          <Button
            onClick={handleReturnClick}
            disabled={vendingMachineState === STATUS.WORKING}
          >
            반환
          </Button>
        </StyledMoney>
        <CardPayment
          onClick={handleCardPaymentClick}
          vendingMachineState={vendingMachineState}
        />
      </StyledMoneyBox>
      <StyledDispensers>
        <DrinkDispenser
          drink={drink}
          setVendingMachineState={setVendingMachineState}
        />
        <CoinDispenser money={returnMoney} />
      </StyledDispensers>
    </StyledVendingMachine>
  );
}

const StyledVendingMachine = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 500px;
  margin: auto;

  border-radius: 4px;

  background-color: ${({ theme }) => theme.color.light_blue};
`;

const StyledMenus = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 8px;
  grid-column-gap: 8px;

  padding: 8px;
  margin-top: 10px;

  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.white};
`;

const StyledMoneyBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 30px 30px 0;
  gap: 10px;
  align-self: flex-end;
`;

const StyledMoney = styled.div`
  display: flex;
  gap: 3px;

  margin-top: 10px;

  button {
    width: 40px;
    height: 40px;

    box-shadow: 1px 1px 1px 1px;
    border-radius: 50%;
  }
`;

const StyledDispensers = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;
