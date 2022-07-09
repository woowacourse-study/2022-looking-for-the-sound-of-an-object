import styled from "styled-components";

export const ButtonSectionContainer = styled.section`
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  grid-area: buttons;
`;

export const ListSectionContainer = styled.section`
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  grid-area: list;
`;

export const DrinkButtonList = styled.ul`
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

export const NoDrinkText = styled.li`
  color: ${({ theme }) => theme.black};
  font-weight: 700;
`;
