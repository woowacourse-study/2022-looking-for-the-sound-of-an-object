import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  align-items: flex-start;
  justify-items: center;
  gap: 1rem;

  padding: 2rem;

  background-color: ${({ theme }) => theme.white};
  border: 0.13rem solid ${({ theme }) => theme.black};
  box-shadow: 0.5rem 0.5rem 0 ${({ theme }) => theme.black};
`;
