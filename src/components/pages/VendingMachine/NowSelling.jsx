import styled from "styled-components";

const NowSellingContainer = styled.article`
  margin-bottom: 2rem;
`;

const NowSelling = () => {
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
          </tr>
          <tr>
            <td>50</td>
            <td>50</td>
            <td>50</td>
            <td>50</td>
          </tr>
        </tbody>
      </table>
    </NowSellingContainer>
  );
};

export default NowSelling;
