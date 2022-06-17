import styled from "styled-components";
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
  return (
    <StockChargeContainer>
      <ChargeItemWrapper>
        <ChargeItemTitle>
          원두
          <input />
        </ChargeItemTitle>
        <Button>충전하기</Button>
      </ChargeItemWrapper>
      <ChargeItemWrapper>
        <ChargeItemTitle>
          우유
          <input />
        </ChargeItemTitle>
        <Button>충전하기</Button>
      </ChargeItemWrapper>
      <ChargeItemWrapper>
        <ChargeItemTitle>
          물
          <input />
        </ChargeItemTitle>
        <Button>충전하기</Button>
      </ChargeItemWrapper>
    </StockChargeContainer>
  );
};

export default StockCharge;
