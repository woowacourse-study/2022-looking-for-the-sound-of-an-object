import { useSelector } from "react-redux";
import styled from "styled-components";

const NowSellingContainer = styled.article`
  margin-bottom: 2rem;
`;

const NowSelling = () => {
  const { espresso, milk, cup, coke, sida } = useSelector(
    (state) => state.stock
  );

  return (
    <NowSellingContainer>
      <h3>현재 구매 가능한 수량</h3>
      <table>
        <tbody>
          <tr>
            <th>에스프레소</th>
            <th>아메리카노</th>
            <th>카페라떼</th>
            <th>우유</th>
            <th>콜라</th>
            <th>사이다</th>
          </tr>
          <tr>
            <td>{Math.min(espresso, cup)}</td>
            <td>{Math.min(espresso, cup)}</td>
            <td>{Math.min(espresso, milk, cup)}</td>
            <td>{Math.min(milk, cup)}</td>
            <td>{Math.min(coke, cup)}</td>
            <td>{Math.min(sida, cup)}</td>
          </tr>
        </tbody>
      </table>
    </NowSellingContainer>
  );
};

export default NowSelling;
