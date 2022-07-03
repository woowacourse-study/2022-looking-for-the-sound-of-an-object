import styled from "styled-components";

export const ListItem = styled.li`
  width: fit-content;
  height: fit-content;
  padding: 0.5rem 1rem;

  border: 0.13rem solid ${({ theme }) => theme.black};
  border-radius: 0.5rem;
  box-shadow: 0.2rem 0.2rem 0 ${({ theme }) => theme.black} inset;
  background-color: ${({ theme }) => theme.primaryLight};
  font-weight: 700;
`;
