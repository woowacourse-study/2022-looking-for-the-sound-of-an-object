import styled from "styled-components";

interface ButtonType extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({
  type = "button",
  disabled,
  children,
  onClick,
}: ButtonType) {
  return (
    <StyledButton type={type} disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;

  :disabled {
    cursor: auto;
  }
`;
