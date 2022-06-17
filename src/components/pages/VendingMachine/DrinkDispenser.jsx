import styled from "styled-components";
import Button from "../../common/Button";

const DrinkDispenserContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

const DispenserWrapper = styled.div`
  width: 10rem;
  height: 10rem;
  border: 0.1rem solid black;
  border-radius: 0.4rem;
  margin-bottom: 2rem;
`;

const DrinkDispenser = () => {
  return (
    <DrinkDispenserContainer>
      <h2 hidden>음료가 나오는 곳</h2>
      <DispenserWrapper></DispenserWrapper>
      <Button>음료 가져가기</Button>
    </DrinkDispenserContainer>
  );
};

export default DrinkDispenser;
