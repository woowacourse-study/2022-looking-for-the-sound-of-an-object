import styled from "styled-components";
import { useState, useEffect, Dispatch, SetStateAction } from "react";

import Button from "../Button";
import { DrinkType, recipes, STATUS } from "../../constants";
import { ValueOf } from "../../types";

interface DrinkDispenserType {
  drink: DrinkType | undefined;
  setVendingMachineState: Dispatch<SetStateAction<ValueOf<typeof STATUS>>>;
}

export default function DrinkDispenser({
  drink,
  setVendingMachineState,
}: DrinkDispenserType) {
  const [recipe, setRecipe] = useState<string[]>([]);

  const handlePickupClick = () => {
    setVendingMachineState(STATUS.READY);
    setRecipe([]);
  };

  useEffect(() => {
    if (drink) {
      const orderedMenu = recipes[drink];

      orderedMenu.forEach((item, index) => {
        setTimeout(() => {
          setRecipe((prev) => [...prev, item]);
        }, 1000 * index);
      });
    }
  }, [drink]);

  return (
    <StyledDispenser>
      <h3>음료 나오는 곳</h3>
      <StyledFlex>
        <StyledItemOut>
          {recipe.map((item, index) => (
            <div className="drop" key={index}>
              {item}
            </div>
          ))}
        </StyledItemOut>
        <Button onClick={handlePickupClick}>가져가기</Button>
      </StyledFlex>
    </StyledDispenser>
  );
}

const StyledDispenser = styled.div`
  width: 200px;
  height: 90px;

  background-color: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};

  padding: 8px;
  border-radius: 4px;

  h3 {
    margin: 5px 0;
  }

  button {
    width: 40px;
    height: 40px;

    background-color: white;
  }

  .drop {
    position: absolute;
    width: 90%;
    padding: 5px;
    background: ${({ theme }) => theme.color.blue};
    animation: drop 1.2s forwards;
  }

  @keyframes drop {
    0% {
      transform-origin: center;
      opacity: 1;
    }
    20% {
      transform: translate3d(0, 20px, 0) rotate3d(0, 0, 1, -10deg);
      opacity: 1;
    }
    40%,
    45% {
      transform: translate3d(0, -20px, 0) rotate3d(0, 0, 1, 10deg);
      opacity: 1;
    }
    to {
      opacity: 1;
      transform: translate3d(0, 10px, 0) rotate3d(0, 0, 0, 0deg);
    }
  }
`;

const StyledFlex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledItemOut = styled.div`
  width: 70%;
  height: 80px;
  position: relative;
`;
