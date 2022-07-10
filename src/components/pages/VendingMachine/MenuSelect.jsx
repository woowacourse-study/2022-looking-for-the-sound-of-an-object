import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { MENU_NAME, MENU_PRICE } from "../../../constants";
import { buyDrinkByCard } from "../../../modules/card";
import { coinUse } from "../../../modules/coin";
import Button from "../../common/Button";

const MenuSelectContainer = styled.article`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-bottom: 2rem;
`;

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

const MenuSelect = () => {
  const dispatch = useDispatch();
  const { coin } = useSelector((state) => state.coin);
  const { card } = useSelector((state) => state.card);

  const { espresso, milk, cup, coke, sida } = useSelector(
    (state) => state.stock
  );
  const [isTake, setIsTake] = useState(true);
  const [drink, setDrink] = useState("");

  const availableEspresso =
    (MENU_PRICE.espresso <= coin || card) && espresso > 0 && cup > 0
      ? true
      : false;

  const availableAmericano =
    (MENU_PRICE.americano <= coin || card) && espresso > 0 && cup > 0
      ? true
      : false;

  const availableCaffeLatte =
    (MENU_PRICE.cafelatte <= coin || card) &&
    espresso > 0 &&
    cup > 0 &&
    milk > 0
      ? true
      : false;

  const availableMilk =
    (MENU_PRICE.milk <= coin || card) && milk > 0 && cup > 0 ? true : false;

  const availableCoke =
    (MENU_PRICE.coke <= coin || card) && coke > 0 && cup > 0 ? true : false;

  const availableSida =
    (MENU_PRICE.sida <= coin || card) && sida > 0 && sida > 0 ? true : false;

  const buyDrink = (menu) => {
    setIsTake(false);
    setDrink(menu);
    const price = MENU_PRICE[menu];
    if (card) {
      dispatch(buyDrinkByCard());
      alert(`${menu}가 구매되었습니다`);
      return;
    }

    dispatch(coinUse(price));
  };

  const takeDrink = () => {
    setIsTake(true);
    setDrink("");
  };

  return (
    <>
      <MenuSelectContainer>
        <h3 hidden>메뉴 고르는 곳</h3>
        <label>
          <Button
            width="5rem"
            disabled={!availableEspresso}
            onClick={() => buyDrink("espresso")}
          >
            에스프레소
          </Button>
          {MENU_PRICE.espresso}원
        </label>
        <label>
          <Button
            width="5rem"
            disabled={!availableAmericano}
            onClick={() => buyDrink("americano")}
          >
            아메리카노
          </Button>
          {MENU_PRICE.americano}원
        </label>
        <label>
          <Button
            width="5rem"
            disabled={!availableCaffeLatte}
            onClick={() => buyDrink("cafelatte")}
          >
            카페라떼
          </Button>
          {MENU_PRICE.cafelatte}원
        </label>
        <label>
          <Button
            width="5rem"
            disabled={!availableMilk}
            onClick={() => buyDrink("milk")}
          >
            우유
          </Button>
          {MENU_PRICE.milk}원
        </label>
        <label>
          <Button
            width="5rem"
            disabled={!availableCoke}
            onClick={() => buyDrink(MENU_NAME.coke)}
          >
            콜라
          </Button>
          {MENU_PRICE.coke}원
        </label>
        <label>
          <Button
            width="6rem"
            disabled={!availableSida}
            onClick={() => buyDrink(MENU_NAME.sida)}
          >
            사이다
          </Button>
          {MENU_PRICE.sida}원
        </label>
      </MenuSelectContainer>
      <DrinkDispenserContainer>
        <h2 hidden>음료가 나오는 곳</h2>
        <DispenserWrapper>{drink}</DispenserWrapper>
        <Button disabled={isTake} onClick={takeDrink}>
          음료 가져가기
        </Button>
      </DrinkDispenserContainer>
    </>
  );
};

export default MenuSelect;
