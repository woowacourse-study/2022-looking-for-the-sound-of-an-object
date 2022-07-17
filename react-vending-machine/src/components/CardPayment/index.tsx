import React from "react";
import styled from "styled-components";

import { STATUS } from "../../constants";
import { ValueOf } from "../../types";

interface CardPaymentType {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  vendingMachineState: ValueOf<typeof STATUS>;
}

const StyledCardPayment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;

  border-radius: 4px;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.black};
`;

const StyledCardTag = styled.button`
  width: 100px;
  height: 60px;
  margin-top: 5px;

  cursor: pointer;
  background-color: ${({ theme }) => theme.color.yellow};
`;

export default function CardPayment({
  onClick,
  vendingMachineState,
}: CardPaymentType) {
  return (
    <StyledCardPayment>
      <div>카드를 태그해주세요</div>
      <StyledCardTag
        onClick={onClick}
        disabled={vendingMachineState !== STATUS.READY}
      >
        태그하기
      </StyledCardTag>
    </StyledCardPayment>
  );
}
