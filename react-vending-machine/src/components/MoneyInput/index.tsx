import StyledMoneyInput from "./index.styled";

import Button from "../Button";

interface MoneyInputType {
  onSubmit: React.FormEventHandler;
  onChange: React.ChangeEventHandler<HTMLInputElement>;

  value: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function MoneyInput({
  onSubmit,
  onChange,
  value,
  onClick,
}: MoneyInputType) {
  return (
    <StyledMoneyInput onSubmit={onSubmit}>
      <input
        type="number"
        value={value}
        onChange={onChange}
        min={10}
        max={1000000}
        step={10}
      />
      <Button type="submit" onClick={onClick}>
        투입
      </Button>
    </StyledMoneyInput>
  );
}
