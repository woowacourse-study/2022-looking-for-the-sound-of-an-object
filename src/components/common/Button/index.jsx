import styled from "styled-components";
import { COLORS } from "../../../style/theme";

const ButtonWrapper = styled.div`
  width: ${(props) => props.width || "fit-content"};
  border: none;
  border-radius: 0.4rem;
  padding: 0.4rem;
  background-color: ${COLORS.ORANGE};

  &:hover {
    background-color: ${COLORS.PINK};
  }
`;

const Button = ({ width, children, onClick }) => {
  return (
    <ButtonWrapper onClick={onClick} width={width}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
