import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import { isErrorWithMessage } from 'type';
import { useState } from 'react';

const validateMoney = (money: number) => {
  if (money <= 0) throw new Error('돈을 제대로 넣어주세요!');
  if (money % 10)
    throw new Error('10원으로 나누어떨어지는 금액만 입력 가능합니다!');
};

const VendingMachine = () => {
  const [moneyInput, setMoneyInput] = useState('');
  const [chargedMoney, setChargedMoney] = useState(0);

  const handleChangeInput = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const value = target.value;
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
        <Button buttonType="primary" type="button" onClick={handleChargeMoney}>
          투입
        </Button>
      </FlexRow>
      <ChargedMoneyDescription>
        💰 투입된 금액 : {chargedMoney} 원 💰
      </ChargedMoneyDescription>
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
