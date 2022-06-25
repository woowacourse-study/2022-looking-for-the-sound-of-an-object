<<<<<<< HEAD
import styled from "styled-components";
=======
import StyledMoneyInput from "./index.styled";
>>>>>>> 266826e76b0c958ff549ec0038844aa9c0cbec85

import Button from "../Button";

interface MoneyInputType {
  onSubmit: React.FormEventHandler;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
<<<<<<< HEAD
  value: string;
  disabled: boolean;
=======

  value: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
>>>>>>> 266826e76b0c958ff549ec0038844aa9c0cbec85
}

export default function MoneyInput({
  onSubmit,
  onChange,
  value,
<<<<<<< HEAD
  disabled,
=======
  onClick,
>>>>>>> 266826e76b0c958ff549ec0038844aa9c0cbec85
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
<<<<<<< HEAD
      <Button type="submit" onClick={onSubmit} disabled={disabled}>
=======
      <Button type="submit" onClick={onClick}>
>>>>>>> 266826e76b0c958ff549ec0038844aa9c0cbec85
        투입
      </Button>
    </StyledMoneyInput>
  );
}
<<<<<<< HEAD

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
=======
>>>>>>> 266826e76b0c958ff549ec0038844aa9c0cbec85
