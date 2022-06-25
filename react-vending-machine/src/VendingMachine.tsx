import { useState } from "react";
<<<<<<< HEAD
import styled from "styled-components";

import Button from "./components/Button";
import CoinDispenser from "./components/CoinDispenser";
import DrinkDispenser from "./components/DrinkDispenser";
=======

import Button from "./components/Button";
>>>>>>> 266826e76b0c958ff549ec0038844aa9c0cbec85
import Menu from "./components/Menu";
import MoneyDisplay from "./components/MoneyDisplay";
import MoneyInput from "./components/MoneyInput";

<<<<<<< HEAD
import { DrinkType, menus, STATUS } from "./constants";

export default function VendingMachine() {
  const [chargeMoney, setChargeMoney] = useState("");
  const [returnMoney, setReturnMoney] = useState(0);
  const [totalMoney, setTotalMoney] = useState(0);
  const [vendingMachineState, setVendingMachineState] = useState(STATUS.READY);
  const [drink, setDrink] = useState<DrinkType>();
=======
import {
  StyledVendingMachine,
  StyledMenus,
  StyledMoneyBox,
  StyledMoney,
} from "./VendingMachine.styled";

type MenuType = {
  icon: string;
  price: number;
};

type MenusType = { [index: string]: MenuType };
type RecipeType = { [index: string]: Array<string> };

const menus: MenusType = {
  에스프레소: { icon: "☕️", price: 3000 },
  아메리카노: { icon: "☕️", price: 4100 },
  카페라떼: { icon: "☕️", price: 4500 },
  우유: { icon: "🥛", price: 3500 },
};

const recipes: RecipeType = {
  에스프레소: ["🥤 컵 나옴", "☕️ 에스프레소 나옴"],
  아메리카노: ["🥤 컵 나옴", "☕️ 에스프레소 나옴", "💧 물 나옴"],
  카페라떼: ["🥤 컵 나옴", "☕️ 에스프레소 나옴", "🥛 우유 나옴"],
  우유: ["🥤 컵 나옴", "🥛 우유 나옴"],
};

export default function VendingMachine() {
  const [chargeMoney, setChargeMoney] = useState("");
  const [totalMoney, setTotalMoney] = useState(0);
>>>>>>> 266826e76b0c958ff549ec0038844aa9c0cbec85

  const handleChargeMoneyChange = (e: React.FormEvent<HTMLInputElement>) => {
    setChargeMoney(e.currentTarget.value);
  };

  const handleMoneySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTotalMoney((prev) => (prev += +chargeMoney));
    setChargeMoney("");
  };

<<<<<<< HEAD
  const handleMenuClick = (name: DrinkType, price: number) => {
    setVendingMachineState(STATUS.WORKING);
    setDrink(name);
    setTotalMoney((prev) => (prev -= price));
  };

  const handleReturnClick = () => {
    if (totalMoney === 0) {
      return alert("반환할 잔돈이 없습니다");
    }
    setReturnMoney(totalMoney);
=======
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
>>>>>>> 266826e76b0c958ff549ec0038844aa9c0cbec85
    setTotalMoney(0);
  };

  return (
    <StyledVendingMachine>
      <h1>도리의 자판기</h1>
      <StyledMenus>
        {Object.entries(menus).map(([key, value]) => (
          <Menu
<<<<<<< HEAD
            lightOn={
              value.price <= totalMoney && vendingMachineState === STATUS.READY
            }
=======
            lightOn={value.price <= totalMoney}
>>>>>>> 266826e76b0c958ff549ec0038844aa9c0cbec85
            name={key}
            icon={value.icon}
            price={value.price}
            key={key}
<<<<<<< HEAD
            onClick={() => handleMenuClick(key as DrinkType, value.price)}
=======
            onClick={() => handleMenuClick(key, value.price)}
>>>>>>> 266826e76b0c958ff549ec0038844aa9c0cbec85
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
<<<<<<< HEAD
            disabled={vendingMachineState === STATUS.WORKING}
          />
          <Button
            onClick={handleReturnClick}
            disabled={vendingMachineState === STATUS.WORKING}
          >
            반환
          </Button>
        </StyledMoney>
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
  height: 600px;

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
  margin: 50px 30px 30px 0;
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
`;
=======
            onClick={handleChargeClick}
          />
          <Button onClick={handleReturnClick}>반환</Button>
        </StyledMoney>
      </StyledMoneyBox>
    </StyledVendingMachine>
  );
}
>>>>>>> 266826e76b0c958ff549ec0038844aa9c0cbec85
