import styled from "styled-components";

interface MoneyDisplayType {
  children: number;
}

export default function MoneyDisplay({ children }: MoneyDisplayType) {
  return (
    <StyledMoneyDisplay>
      총액: {children?.toLocaleString("en")}원
    </StyledMoneyDisplay>
  );
}

const StyledMoneyDisplay = styled.div`
  text-align: center;
  line-height: 40px;

  width: 170px;
  height: 40px;

  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.red};
`;
