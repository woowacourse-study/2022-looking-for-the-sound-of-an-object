import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { MENU_NAME } from "../../../constants";
import { addStock } from "../../../modules/stock";
import Button from "../../common/Button";

const StockChargeContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;

  margin-bottom: 2rem;
`;

const ChargeItemWrapper = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: row;
`;

const ChargeItemTitle = styled.label`
  width: 10rem;
`;

const StockCharge = () => {
  const dispatch = useDispatch();

  const [espresso, setEspresso] = useState(0);
  const [cup, setCup] = useState(0);
  const [milk, setMilk] = useState(0);
  const [coke, setCoke] = useState(0);
  const [sida, setSida] = useState(0);

  const chargeEspresso = () => {
    if (espresso < 0) {
      alert("0이상의 숫자를 입력해 주세요");
      return;
    }
    dispatch(addStock("espresso", espresso));
    setEspresso(0);
  };
  const chargeCup = () => {
    if (cup < 0) {
      alert("0이상의 숫자를 입력해 주세요");
      return;
    }
    dispatch(addStock("cup", cup));
    setCup(0);
  };
  const chargeMilk = () => {
    if (milk < 0) {
      alert("0이상의 숫자를 입력해 주세요");
      return;
    }
    dispatch(addStock("milk", milk));
    setMilk(0);
  };
  const chargeCoke = () => {
    if (coke < 0) {
      alert("0이상의 숫자를 입력해 주세요");
      return;
    }
    dispatch(addStock(MENU_NAME.coke, coke));
    setCoke(0);
  };
  const chargeSida = () => {
    if (sida < 0) {
      alert("0이상의 숫자를 입력해 주세요");
      return;
    }
    dispatch(addStock(MENU_NAME.sida, sida));
    setSida(0);
  };
  return (
    <StockChargeContainer>
      <ChargeItemWrapper>
        <ChargeItemTitle>
          원두
          <input
            value={espresso}
            onChange={(e) => setEspresso(e.target.value)}
          />
        </ChargeItemTitle>
        <Button onClick={chargeEspresso}>충전하기</Button>
      </ChargeItemWrapper>
      <ChargeItemWrapper>
        <ChargeItemTitle>
          우유
          <input value={milk} onChange={(e) => setMilk(e.target.value)} />
        </ChargeItemTitle>
        <Button onClick={chargeMilk}>충전하기</Button>
      </ChargeItemWrapper>
      <ChargeItemWrapper>
        <ChargeItemTitle>
          컵
          <input value={cup} onChange={(e) => setCup(e.target.value)} />
        </ChargeItemTitle>
        <Button onClick={chargeCup}>충전하기</Button>
      </ChargeItemWrapper>
      <ChargeItemWrapper>
        <ChargeItemTitle>
          콜라
          <input value={coke} onChange={(e) => setCoke(e.target.value)} />
        </ChargeItemTitle>
        <Button onClick={chargeCoke}>충전하기</Button>
      </ChargeItemWrapper>
      <ChargeItemWrapper>
        <ChargeItemTitle>
          사이다
          <input value={sida} onChange={(e) => setSida(e.target.value)} />
        </ChargeItemTitle>
        <Button onClick={chargeSida}>충전하기</Button>
      </ChargeItemWrapper>
    </StockChargeContainer>
  );
};

export default StockCharge;
