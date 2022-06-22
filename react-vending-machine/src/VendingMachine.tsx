import { useState } from "react";

import Button from "./components/Button";
import DrinkDispenser from "./components/DrinkDispenser";
import Menu from "./components/Menu";
import MoneyDisplay from "./components/MoneyDisplay";
import MoneyInput from "./components/MoneyInput";

import { DrinkType, menus } from "./constants";

import {
  StyledVendingMachine,
  StyledMenus,
  StyledMoneyBox,
  StyledMoney,
  StyledDispensers,
} from "./VendingMachine.styled";

export default function VendingMachine() {
  const [chargeMoney, setChargeMoney] = useState("");
  const [totalMoney, setTotalMoney] = useState(0);
  const [vendingMachineState, setVendingMachineState] = useState("READY");
  const [drink, setDrink] = useState<DrinkType>();

  const handleChargeMoneyChange = (e: React.FormEvent<HTMLInputElement>) => {
    setChargeMoney(e.currentTarget.value);
  };

  const handleMoneySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTotalMoney((prev) => (prev += +chargeMoney));
    setChargeMoney("");
  };

  const handleMenuClick = (name: DrinkType, price: number) => {
    setVendingMachineState("WORKING");
    setDrink(name);
    setTotalMoney((prev) => (prev -= price));
  };

  const handleChargeClick = () => {
    setTotalMoney((prev) => (prev += +chargeMoney));
    setChargeMoney("");
  };

  const handleReturnClick = () => {
    if (totalMoney === 0) {
      return alert("반환할 잔돈이 없습니다");
    }
    setVendingMachineState("WORKING");
    alert(`잔돈이 반환되었습니다 ${totalMoney}원`);
    setTotalMoney(0);
  };

  return (
    <StyledVendingMachine>
      <h1>도리의 자판기</h1>
      <StyledMenus>
        {Object.entries(menus).map(([key, value]) => (
          <Menu
            lightOn={
              value.price <= totalMoney && vendingMachineState === "READY"
            }
            name={key}
            icon={value.icon}
            price={value.price}
            key={key}
            onClick={() => handleMenuClick(key as DrinkType, value.price)}
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
            onClick={handleChargeClick}
          />
          <Button onClick={handleReturnClick}>반환</Button>
        </StyledMoney>
      </StyledMoneyBox>
      <StyledDispensers>
        <DrinkDispenser
          drink={drink}
          setVendingMachineState={setVendingMachineState}
        />
      </StyledDispensers>
    </StyledVendingMachine>
  );
}
