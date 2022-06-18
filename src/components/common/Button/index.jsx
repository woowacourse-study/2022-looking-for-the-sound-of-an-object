import styled from "styled-components";
import { COLORS } from "../../../style/theme";

const ButtonWrapper = styled.button`
  width: ${(props) => props.width || "fit-content"};
  border: none;
  border-radius: 0.4rem;
  padding: 0.4rem;
  background-color: ${COLORS.ORANGE};

  &:hover {
    background-color: ${COLORS.PINK};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${COLORS.WHITE};
    color: black;
  }
`;

const Button = ({ width, children, onClick, disabled = false }) => {
  return (
    <ButtonWrapper onClick={onClick} width={width} disabled={disabled}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
