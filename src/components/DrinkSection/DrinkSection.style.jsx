import styled from "styled-components";

export const SectionConatainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  grid-area: dispenser;
`;

export const ActionList = styled.ul`
  min-width: 20rem;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  border: 0.13rem dashed ${({ theme }) => theme.black};
`;
