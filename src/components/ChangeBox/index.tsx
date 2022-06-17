import { TCoin, CoinUnit } from 'type';
import styled from 'styled-components';

interface Props {
  coins?: TCoin;
}

const ChangeBox = ({ coins }: Props) => {
  return (
    <Container>
      {coins &&
        CoinUnit.map((unit) => (
          <p key={unit}>
            🪙 {unit}원 {coins[unit]}개
          </p>
        ))}
    </Container>
  );
};

const Container = styled.section`
  width: 100px;
  height: 200px;
  background-color: ${({ theme }) => theme.COLOR.GREY_100};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default ChangeBox;
