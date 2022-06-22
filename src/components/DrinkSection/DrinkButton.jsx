import styled from "styled-components";

import { DRINKS, INSERT_MONEY_RANGE } from "constants";

const Button = styled.button`
  padding: 0.5rem 1rem;

  border: none;
  border-radius: 2rem;
  box-shadow: 0 0.2rem 0.3rem ${({ theme }) => theme.primaryDark};
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};

  &:hover {
    color: ${({ theme }) => theme.black};
    background-color: ${({ theme }) => theme.primaryLight};
  }

  &:active {
    background-color: ${({ theme }) => theme.primaryDark};
  }

  &:disabled {
    box-shadow: 0 0.2rem 0.3rem ${({ theme }) => theme.secondaryDark};
    background-color: ${({ theme }) => theme.secondaryLight};
    color: ${({ theme }) => theme.secondaryDark};
  }
`;

function DrinkButton({ name, onClick, disabled, children }) {
  return (
    <Button type="button" name={name} onClick={onClick} disabled={disabled}>
      {children}
    </Button>
  );
}

export default DrinkButton;
