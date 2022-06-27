import styled from "styled-components";
import { useState } from "react";

import Button from "../Button";
import { useEffect } from "react";

interface CoinDispenserType {
  money: number;
}

const coinArray = [500, 100, 50, 10] as const;
type coinType = typeof coinArray[number];

const initialCoins: Record<coinType, number> = {
  500: 0,
  100: 0,
  50: 0,
  10: 0,
};

const changeToCoin = (money: number) => {
  const returnCoins = { ...initialCoins };

  for (const coin of coinArray) {
    while (money >= coin) {
      money -= coin;
      returnCoins[coin] += 1;
    }
  }

  return returnCoins;
};

export default function CoinDispenser({ money }: CoinDispenserType) {
  const [coins, setCoins] = useState(initialCoins);

  const handlePickupClick = () => {
    setCoins(initialCoins);
  };

  useEffect(() => {
    if (money > 0) {
      const changedCoins = changeToCoin(money);

      setCoins((prev) => {
        const result = (
          Object.keys(prev) as unknown as Array<keyof typeof prev>
        ).reduce(
          (acc, key) => {
            acc[key] = changedCoins[key] + prev[key];
            return acc;
          },
          { ...initialCoins }
        );
        return result;
      });
    }
  }, [money]);

  return (
    <StyledDispenser>
      <h3>동전 나오는 곳</h3>
      <StyledFlex>
        <StyledItemOut>
          {Object.entries(coins).map(([key, value]) => (
            <StyledRow key={key}>
              <StyledCoin>{key}원</StyledCoin>
              <div>{value}개</div>
            </StyledRow>
          ))}
        </StyledItemOut>
        <Button onClick={handlePickupClick}>가져가기</Button>
      </StyledFlex>
    </StyledDispenser>
  );
}

const StyledDispenser = styled.div`
  width: 200px;
  height: 90px;

  background-color: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};

  padding: 8px;
  border-radius: 4px;

  h3 {
    margin: 5px 0;
  }

  button {
    width: 40px;
    height: 40px;

    background-color: ${({ theme }) => theme.color.white};
  }
`;

const StyledFlex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledItemOut = styled.div`
  width: 70%;
  height: 80px;

  display: flex;
  gap: 4px;
`;

const StyledCoin = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.yellow};
  text-align: center;
  color: black;
  line-height: 35px;
  font-size: 12px;
`;
