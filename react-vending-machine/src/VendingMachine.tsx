import { useState } from "react";

import Button from "./components/Button";
import Dispenser from "./components/Dispenser";
import Menu from "./components/Menu";
import MoneyDisplay from "./components/MoneyDisplay";
import MoneyInput from "./components/MoneyInput";

import { menus, recipes } from "./constants";

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

  const handleChargeMoneyChange = (e: React.FormEvent<HTMLInputElement>) => {
    setChargeMoney(e.currentTarget.value);
  };

  const handleMoneySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTotalMoney((prev) => (prev += +chargeMoney));
    setChargeMoney("");
  };

  const handleMenuClick = (name: string, price: number) => {
    const recipe = recipes[name];
    recipe.map((order) => alert(order));

    setTotalMoney((prev) => (prev -= price));
  };

  const handleChargeClick = () => {
    setTotalMoney((prev) => (prev += +chargeMoney));
    setChargeMoney("");
  };

  const handleReturnClick = () => {
    alert(`잔돈이 반환되었습니다 ${totalMoney}원`);
    setTotalMoney(0);
  };

  return (
    <StyledVendingMachine>
      <h1>도리의 자판기</h1>
      <StyledMenus>
        {Object.entries(menus).map(([key, value]) => (
          <Menu
            lightOn={value.price <= totalMoney}
            name={key}
            icon={value.icon}
            price={value.price}
            key={key}
            onClick={() => handleMenuClick(key, value.price)}
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
        <Dispenser type="음료" />
        <Dispenser type="동전" />
      </StyledDispensers>
    </StyledVendingMachine>
  );
}
