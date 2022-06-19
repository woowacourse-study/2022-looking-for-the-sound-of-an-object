import Button from "../Button";

import { StyledMenu } from "./index.styled";

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
