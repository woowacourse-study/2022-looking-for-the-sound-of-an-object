import styled from "styled-components";

export const SectionContainer = styled.section`
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const DrinkButtonContainer = styled.section`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const DrinkList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  min-width: 20rem;
  min-height: 5rem;
  padding: 1rem;

  border: 0.13rem dashed ${({ theme }) => theme.black};
`;

export const NoDrinkText = styled.p`
  color: ${({ theme }) => theme.secondaryDark};
  font-weight: 700;
`;
