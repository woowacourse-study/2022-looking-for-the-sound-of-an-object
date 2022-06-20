import { useSelector } from "react-redux";
import styled from "styled-components";

const NowStockContainer = styled.article`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 2rem;
`;

const NowStockTitle = styled.th`
  width: 6rem;
  text-align: center;
`;

const NowStockItem = styled.td`
  width: 6rem;
  text-align: center;
`;

const NowStock = () => {
  const { espresso, milk, cup } = useSelector((state) => state.stock);

  return (
    <NowStockContainer>
      <h3>현재 재료 현황판</h3>
      <table>
        <tbody>
          <tr>
            <NowStockTitle>에스프레소</NowStockTitle>
            <NowStockTitle>우유</NowStockTitle>
            <NowStockTitle>컵</NowStockTitle>
          </tr>
          <tr>
            <NowStockItem>{espresso}</NowStockItem>
            <NowStockItem>{milk}</NowStockItem>
            <NowStockItem>{cup}</NowStockItem>
          </tr>
        </tbody>
      </table>
    </NowStockContainer>
  );
};

export default NowStock;
