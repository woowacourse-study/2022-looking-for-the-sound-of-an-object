import { useSelector } from "react-redux";
import styled from "styled-components";
import { MENU_PRICE } from "../../../constants";
import Button from "../../common/Button";

const MenuSelectContainer = styled.article`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const MenuSelect = () => {
  const { coin } = useSelector((state) => state.coin);
  const { espresso, milk, cup } = useSelector((state) => state.stock);

  const availableEspresso =
    MENU_PRICE.espresso <= coin && espresso > 0 && cup > 0 ? false : true;

  const availableAmericano =
    MENU_PRICE.americano <= coin && espresso > 0 && cup > 0 ? false : true;

  const availableCaffeLatte =
    MENU_PRICE.cafelatte <= coin && espresso > 0 && cup > 0 && milk > 0
      ? false
      : true;

  const availableMilk =
    MENU_PRICE.milk <= coin && milk > 0 && cup > 0 ? false : true;

  return (
    <MenuSelectContainer>
      <h3 hidden>메뉴 고르는 곳</h3>
      <label>
        <Button width="5rem" disabled={availableEspresso}>
          에스프레소
        </Button>
        {MENU_PRICE.espresso}원
      </label>
      <label>
        <Button width="5rem" disabled={availableAmericano}>
          아메리카노
        </Button>
        {MENU_PRICE.americano}원
      </label>
      <label>
        <Button width="5rem" disabled={availableCaffeLatte}>
          카페라떼
        </Button>
        {MENU_PRICE.cafelatte}원
      </label>
      <label>
        <Button width="5rem" disabled={availableMilk}>
          우유
        </Button>
        {MENU_PRICE.milk}원
      </label>
    </MenuSelectContainer>
  );
};

export default MenuSelect;
