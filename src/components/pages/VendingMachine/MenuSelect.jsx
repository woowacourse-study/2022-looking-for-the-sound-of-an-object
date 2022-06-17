import styled from "styled-components";
import Button from "../../common/Button";

const MenuSelectContainer = styled.article`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const MenuSelect = () => {
  return (
    <MenuSelectContainer>
      <h3 hidden>메뉴 고르는 곳</h3>
      <label>
        <Button width="5rem">에스프레소</Button>
        1000원
      </label>
      <label>
        <Button width="5rem">아메리카노</Button>
        1000원
      </label>
      <label>
        <Button width="5rem">카페라떼</Button>
        1000원
      </label>
      <label>
        <Button width="5rem">우유</Button>
        1000원
      </label>
    </MenuSelectContainer>
  );
};

export default MenuSelect;
