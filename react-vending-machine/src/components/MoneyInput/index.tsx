import styled from "styled-components";

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

const StyledMoneyInput = styled.form`
  input {
    width: 70px;
    padding: 5px;

    margin: 3px;
    background-color: transparent;
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input:focus {
    outline: none;
  }
`;
