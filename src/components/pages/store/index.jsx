import styled from "styled-components";
import NowStock from "./NowStock";

const StoreContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Store = () => {
  return (
    <StoreContainer>
      <NowStock />
    </StoreContainer>
  );
};

export default Store;
