import styled from "styled-components";

export const ButtonContainer = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  width: fit-content;
  height: fit-content;
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;

  box-shadow: 0.3rem 0.3rem 0 ${({ theme }) => theme.black};
  border: 2px solid ${({ theme }) => theme.black};
  background-color: ${({ theme }) => theme.primary};
  font-size: 1rem;
  font-weight: 700;

  &:hover {
    background-color: ${({ theme }) => theme.primaryLight};
  }

  &:active {
    background-color: ${({ theme }) => theme.primaryLight};
  }

  &:disabled {
    color: ${({ theme }) => theme.secondaryDark};
    border: 2px solid ${({ theme }) => theme.secondaryDark};
    background-color: ${({ theme }) => theme.secondary};
  }
`;

export const ButtonText = styled.p`
  font-size: 1rem;
  font-weight: 700;
`;
