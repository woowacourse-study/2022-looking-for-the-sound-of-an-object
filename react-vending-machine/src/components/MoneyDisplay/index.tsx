import StyledMoneyDisplay from "./index.styled";

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
