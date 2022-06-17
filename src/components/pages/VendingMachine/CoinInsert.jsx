import styled from "styled-components";
import Button from "../../common/Button";

const CoinInsertContainer = styled.article`
  margin-bottom: 2rem;
`;

const CoinInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const CoinInput = styled.input`
  width: 10rem;
  border: none;
  border-bottom: 0.1rem solid black;
  text-decoration: none;
  background-color: transparent;
`;

const CoinInsert = ({ amount }) => {
  return (
    <CoinInsertContainer>
      <h3>금액 투입하기</h3>
      <div>현재 투입된 금액 {amount}원</div>
      <CoinInputWrapper>
        <CoinInput placeholder="투입할 금액을 입력해주세요" />
        <Button>투입</Button>
      </CoinInputWrapper>
    </CoinInsertContainer>
  );
};

export default CoinInsert;
