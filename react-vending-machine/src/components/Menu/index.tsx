import Button from "../Button";

import { StyledMenu } from "./index.styled";

interface MenuType {
  lightOn?: boolean;
  children: React.ReactNode;
}

export default function Menu({ lightOn, children }: MenuType) {
  return (
    <StyledMenu lightOn={lightOn}>
      {children === "우유" ? "🥛" : "☕️"}
      <Button disabled={!lightOn}>{children}</Button>
    </StyledMenu>
  );
}
