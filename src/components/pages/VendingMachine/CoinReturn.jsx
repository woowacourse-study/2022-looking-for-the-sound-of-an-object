import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Button from "../../common/Button";

const CoinReturnContainer = styled.article`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const CoinOutputWrapper = styled.span`
  width: 8rem;
  height: 2rem;
  border: 1px solid black;
  border-radius: 2rem;
`;

const CoinReturn = () => {
  const dispatch = useDispatch();

  const { coin } = useSelector((state) => state.coin);

  const [coinOutput, setCoinOutput] = useState(0);
  const returnCoin = () => {
    setCoinOutput(coin);
    dispatch(returnCoin());
  };
  const takeCoin = () => {
    setCoinOutput(0);
  };

  return (
    <CoinReturnContainer>
      <Button onClick={returnCoin}>잔돈반환</Button>
      <Button onClick={takeCoin}>가져가기</Button>
      <CoinOutputWrapper>{coinOutput}</CoinOutputWrapper>
    </CoinReturnContainer>
  );
};
export default CoinReturn;
