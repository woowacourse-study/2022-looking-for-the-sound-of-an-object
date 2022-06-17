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
  return (
    <CoinReturnContainer>
      <Button>환불하기</Button>
      <Button>잔돈반환</Button>
      <CoinOutputWrapper></CoinOutputWrapper>
    </CoinReturnContainer>
  );
};
export default CoinReturn;
