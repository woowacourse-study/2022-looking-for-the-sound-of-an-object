import styled from "styled-components";

import Button from "../Button";

interface MoneyInputType extends React.InputHTMLAttributes<HTMLInputElement> {
  onSubmit: React.FormEventHandler;
<<<<<<< HEAD
=======
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
>>>>>>> c74a7d1bee45ae95ace8300ce0b0b1baf808d753
  disabled: boolean;
}

export default function MoneyInput({
  onSubmit,
  onChange,
  value,
  disabled,
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
      <Button type="submit" onClick={onSubmit} disabled={disabled}>
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
