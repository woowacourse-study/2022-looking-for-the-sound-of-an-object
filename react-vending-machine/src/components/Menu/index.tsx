<<<<<<< HEAD
import styled from "styled-components";
import Button from "../Button";

=======
import Button from "../Button";

import { StyledMenu } from "./index.styled";

>>>>>>> 266826e76b0c958ff549ec0038844aa9c0cbec85
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
<<<<<<< HEAD
      <div>{price.toLocaleString("ko")}원</div>
=======
      <div>{price.toLocaleString("en")}원</div>
>>>>>>> 266826e76b0c958ff549ec0038844aa9c0cbec85
      <Button disabled={!lightOn} onClick={onClick}>
        {name}
      </Button>
    </StyledMenu>
  );
}
<<<<<<< HEAD

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

    background-color: ${({ lightOn, theme }) =>
      lightOn ? theme.color.blue : theme.color.gray};
    color: ${({ lightOn, theme }) => lightOn && theme.color.white};

    border-radius: 4px;

    :hover:enabled {
      filter: brightness(130%);
    }
  }
`;
=======
>>>>>>> 266826e76b0c958ff549ec0038844aa9c0cbec85
