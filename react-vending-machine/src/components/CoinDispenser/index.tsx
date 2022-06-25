import styled from "styled-components";
import { useState } from "react";

import Button from "../Button";
import { useEffect } from "react";

interface CoinDispenserType {
  money: number;
}

const initialCoins = {
  500: 0,
  100: 0,
  50: 0,
  10: 0,
};

const coinArray = [500, 100, 50, 10];
type coinType = 500 | 100 | 50 | 10;

const changeToCoin = (money: number) => {
  let index = 0;
  const returnCoins = { ...initialCoins };

  while (money > 0 && index < 4) {
    if (money >= coinArray[index]) {
      money -= coinArray[index];
      const prev = returnCoins[coinArray[index] as coinType];
      returnCoins[coinArray[index] as coinType] = prev + 1;
    } else {
      index += 1;
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

      // 이 부분이 맘에 안듭니다
      setCoins((prev) => {
        const result = Object.keys(prev).reduce(
          (acc, key) => {
            acc[key as unknown as coinType] =
              changedCoins[key as unknown as coinType] +
              prev[key as unknown as coinType];
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

  background-color: black;
  color: white;

  padding: 8px;
  border-radius: 4px;

  h3 {
    margin: 5px 0;
  }

  button {
    width: 40px;
    height: 40px;

    background-color: white;
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
  background-color: #f9f510;
  text-align: center;
  color: black;
  line-height: 35px;
  font-size: 12px;
`;
