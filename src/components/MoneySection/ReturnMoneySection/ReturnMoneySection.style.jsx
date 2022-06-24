import styled from "styled-components";

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const TotalReturnMoneyText = styled.p`
  font-weight: 700;
`;

export const ReturnMoneyTable = styled.table`
  border-collapse: collapse;
  border: 0.13rem dashed ${({ theme }) => theme.black};

  & th,
  td {
    padding: 1rem;

    font-weight: 700;
    border-bottom: 0.13rem dashed ${({ theme }) => theme.black};
  }
`;
