import styled from "styled-components";
import Button from "../Button";

interface MenuType {
  lightOn?: boolean;
  icon: string;
  price: number;
  name: string;
  onClick: any;
  // onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Menu({
  lightOn,
  icon,
  price,
  name,
  onClick,
}: MenuType) {
  return (
    <StyledMenu lightOn={lightOn}>
      {icon}
      <div>{price.toLocaleString("en")}원</div>
      <Button disabled={!lightOn} onClick={onClick}>
        {name}
      </Button>
    </StyledMenu>
  );
}

const StyledMenu = styled.div<{ lightOn?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 28px;

  div {
    font-size: 14px;
  }

  button {
    width: 80px;
    height: 30px;

    background-color: ${({ lightOn }) => (lightOn ? "#3e93f7" : "#dddddd")};
    color: ${({ lightOn }) => lightOn && "white"};

    border-radius: 4px;

    :hover:enabled {
      filter: brightness(130%);
    }
  }
`;
