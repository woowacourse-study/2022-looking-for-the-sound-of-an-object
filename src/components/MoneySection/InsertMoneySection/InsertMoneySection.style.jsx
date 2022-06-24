import styled from "styled-components";

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;

  padding: 0.5rem;
`;

export const Label = styled.label`
  font-weight: 700;
`;

export const InputButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const Input = styled.input`
  padding: 0.5rem 0.5rem 0.5rem 1rem;

  border: none;
  outline: 0.13rem solid ${({ theme }) => theme.black};
  font-weight: 700;
  font-size: 1rem;

  &:focus {
    outline: 0.13rem solid ${({ theme }) => theme.primaryDark};
  }

  &::placeholder {
    color: ${({ theme }) => theme.secondaryDark};
  }
`;

export const TotalMoneyText = styled.p`
  font-weight: 700;
`;
