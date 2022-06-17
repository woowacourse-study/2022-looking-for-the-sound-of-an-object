import styled from "styled-components";
import { COLORS } from "../../../style/theme";

const ButtonWrapper = styled.div`
  width: fit-content;
  border: none;
  border-radius: 0.4rem;
  padding: 0.4rem;
  background-color: ${COLORS.ORANGE};

  &:hover {
    background-color: ${COLORS.PINK};
  }
`;

const Button = ({ children }) => {
  return <ButtonWrapper>{children}</ButtonWrapper>;
};

export default Button;
