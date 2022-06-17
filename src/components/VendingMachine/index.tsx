import React, { useEffect } from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import Dispenser from 'components/Dispenser';
import ChangeBox from 'components/ChangeBox';
import { isErrorWithMessage, TBeverageInfo, TCoin, CoinUnit } from 'type';
import { useState } from 'react';

const timers: number[] = [];

const clearAllTimers = () => {
  timers.forEach((timer) => clearTimeout(timer));
};

const BEVERAGE: TBeverageInfo[] = [
  {
    id: 0,
    name: '에스프레소',
    price: 600,
    ingredients: [
      { name: '컵', time: 1000 },
      { name: '에스프레소', time: 2000 },
    ],
  },
  {
    id: 1,
    name: '아메리카노',
    price: 1000,
    ingredients: [
      { name: '컵', time: 1000 },
      { name: '에스프레소', time: 2000 },
      { name: '뜨거운 물', time: 1000 },
    ],
  },
  {
    id: 3,
    name: '카페라떼',
    price: 2000,
    ingredients: [
      { name: '컵', time: 1000 },
      { name: '에스프레소', time: 2000 },
      { name: '우유', time: 1000 },
    ],
  },
  {
    id: 4,
    name: '우유',
    price: 1000,
    ingredients: [
      { name: '컵', time: 1000 },
      { name: '우유', time: 1000 },
    ],
  },
];

const validateMoney = (money: number) => {
  if (money <= 0) throw new Error('돈을 제대로 넣어주세요!');
  if (money % 10)
    throw new Error('10원으로 나누어떨어지는 금액만 입력 가능합니다!');
};

const VendingMachine = () => {
  const [moneyInput, setMoneyInput] = useState('');
  const [chargedMoney, setChargedMoney] = useState(0);
  const [isServing, setIsServing] = useState(false);
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [finished, setFinished] = useState('');
  const [changes, setChanges] = useState<TCoin>();

  const handleChangeInput = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    if (Number.isNaN(+value)) return;
    setMoneyInput(value);
  };

  const handleChargeMoney = () => {
    try {
      const money = Number(moneyInput);
      validateMoney(money);
      setChargedMoney(money + chargedMoney);
      setMoneyInput('');
    } catch (error) {
      if (isErrorWithMessage(error)) {
        alert(error.message);
      }
    }
  };

  const handleOrderMenu = (id: number) => () => {
    const orderedMenu = BEVERAGE.find((menu) => menu.id === id);
    if (orderedMenu === undefined) return;

    setChargedMoney((prevState) => prevState - orderedMenu.price);
    setIsServing(true);

    let totalTime = 0;
    const timers = [];
    orderedMenu.ingredients.forEach(({ name, time }) => {
      totalTime += time;
      timers.push(
        setTimeout(() => {
          setIngredients((prevState) => [name, ...prevState]);
        }, totalTime),
      );
    });
    timers.push(
      setTimeout(() => {
        setFinished(orderedMenu?.name ?? '');
      }, totalTime + 1000),
    );
  };

  const handlePickUpBeverage = () => {
    clearAllTimers();
    setFinished('');
    setIngredients([]);
    setIsServing(false);
  };

  const handleChangeMoney = () => {
    const newChanges: TCoin = { 500: 0, 100: 0, 50: 0, 10: 0 };

    let index = 0;
    let money = chargedMoney;
    while (money > 0) {
      if (money < CoinUnit[index]) index += 1;
      money -= CoinUnit[index];
      newChanges[CoinUnit[index]] += 1;
    }
    setChargedMoney(0);
    setChanges(newChanges);
  };

  useEffect(() => {
    return () => clearAllTimers();
  }, []);

  return (
    <Container>
      <Title>🌱 나는야 짱판기 🌱</Title>
      <FlexRow>
        <Input
          placeholder="💰 투입할 금액을 입력하세요 🧐"
          value={moneyInput}
          onChange={handleChangeInput}
          onKeyDown={(e) => e.key === 'Enter' && handleChargeMoney()}
        />
        <Button buttonStyle="primary" type="button" onClick={handleChargeMoney}>
          투입
        </Button>
      </FlexRow>
      <ChargedMoneyDescription>
        💰 투입된 금액 : {chargedMoney} 원 💰
      </ChargedMoneyDescription>

      <FlexRow>
        {BEVERAGE.map(({ id, name, price }) => (
          <Button
            key={id}
            buttonStyle="secondary"
            type="button"
            disabled={chargedMoney < price || isServing}
            onClick={handleOrderMenu(id)}
          >
            {name} / {price}원
          </Button>
        ))}
      </FlexRow>
      <FlexRow>
        <Dispenser finished={finished} ingredients={ingredients} />
        <ChangeBox coins={changes} />
      </FlexRow>
      <FlexRow>
        <Button
          buttonStyle="primary"
          type="button"
          onClick={handlePickUpBeverage}
          disabled={finished.length <= 0}
        >
          가져가기
        </Button>
        <Button
          buttonStyle="secondary"
          type="button"
          onClick={handleChangeMoney}
          disabled={chargedMoney === 0}
        >
          동전 반환하기
        </Button>
      </FlexRow>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 500px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.COLOR.WHITE};
  padding: 30px 40px;
  gap: 20px;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.COLOR.GREEN_200};
`;

const FlexRow = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
`;

const Input = styled.input`
  width: 80%;
  padding: 10px 5px;
  border: 1px solid ${({ theme }) => theme.COLOR.GREEN_200};
  border-radius: 4px;
`;

const ChargedMoneyDescription = styled.p`
  color: ${({ theme }) => theme.COLOR.BROWN_100};
  font-weight: bold;
`;

export default VendingMachine;
