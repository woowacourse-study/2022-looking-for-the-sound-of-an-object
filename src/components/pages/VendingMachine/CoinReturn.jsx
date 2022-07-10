import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { chargeCoin, returnCoin } from "../../../modules/coin";
import Button from "../../common/Button";

const CoinReturnContainer = styled.article`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const CoinOutputWrapper = styled.span`
  width: 20rem;
  height: 2rem;
  border: 1px solid black;
  border-radius: 2rem;
`;

const CoinReturn = () => {
  const { coin } = useSelector((state) => state.coin);
  const dispatch = useDispatch();

  const [coinOutput, setCoinOutput] = useState("");

  const handleReturnCoin = () => {
    const coinObj = { 500: 0, 100: 0, 50: 0, 10: 0 };
    let totalCoin = coin;
    Object.keys(coinObj)
      .reverse()
      .forEach((item) => {
        if (totalCoin === 0) return;
        coinObj[item] = Math.floor(totalCoin / item);
        totalCoin = totalCoin - Math.floor(totalCoin / item) * item;
      });

    setCoinOutput(
      `500: ${coinObj[500]}개, 100: ${coinObj[100]}개, 50: ${coinObj[50]}개, 10: ${coinObj[10]}개`
    );
    dispatch(returnCoin());
  };
  const takeCoin = () => {
    setCoinOutput(0);
  };

  return (
    <CoinReturnContainer>
      <Button onClick={handleReturnCoin}>잔돈반환</Button>
      <Button onClick={takeCoin}>가져가기</Button>
      <CoinOutputWrapper>{coinOutput}</CoinOutputWrapper>
    </CoinReturnContainer>
  );
};
export default CoinReturn;
