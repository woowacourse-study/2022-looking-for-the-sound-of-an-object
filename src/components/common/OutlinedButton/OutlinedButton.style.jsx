import styled from "styled-components";

export const Button = styled.button`
  width: fit-content;
  height: fit-content;
  padding: 0.5rem 1rem;

  box-shadow: 0.3rem 0.3rem 0 ${({ theme }) => theme.black};
  border: 0.13rem solid ${({ theme }) => theme.black};
  background-color: ${({ theme }) => theme.white};
  font-size: 1rem;
  font-weight: 700;

  &:hover {
    border: 0.13rem solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
  }

  &:active {
    border: 0.13rem solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
  }

  &:disabled {
    border: 0.13rem solid ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.secondaryDark};
  }
`;
