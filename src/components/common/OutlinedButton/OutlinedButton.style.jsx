import styled from "styled-components";

export const Button = styled.button`
  padding: 0.5rem 1rem;

  box-shadow: 0.3rem 0.3rem 0 ${({ theme }) => theme.black};
  border: 2px solid ${({ theme }) => theme.black};
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.black};
  font-size: 1rem;
  font-weight: 700;

  &:hover {
    border: 2px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
  }

  &:active {
    border: 2px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
  }

  &:disabled {
    border: 2px solid ${({ theme }) => theme.secondaryDark};
    color: ${({ theme }) => theme.secondaryDark};
  }
`;
