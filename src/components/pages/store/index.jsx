import styled from "styled-components";
import NowStock from "./NowStock";
import StockCharge from "./StockCharge";

const StoreContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Store = () => {
  return (
    <StoreContainer>
      <NowStock />
      <StockCharge />
    </StoreContainer>
  );
};

export default Store;
