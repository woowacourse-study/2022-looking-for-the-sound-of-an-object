<<<<<<< HEAD
import styled from "styled-components";
=======
import StyledMoneyDisplay from "./index.styled";
>>>>>>> 266826e76b0c958ff549ec0038844aa9c0cbec85

interface MoneyDisplayType {
  children: number;
}

export default function MoneyDisplay({ children }: MoneyDisplayType) {
  return (
    <StyledMoneyDisplay>
<<<<<<< HEAD
      총액: {children?.toLocaleString("ko")}원
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
=======
      총액: {children?.toLocaleString("en")}원
    </StyledMoneyDisplay>
  );
}
>>>>>>> 266826e76b0c958ff549ec0038844aa9c0cbec85
