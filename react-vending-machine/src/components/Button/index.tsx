import StyledButton from "./index.styled";

interface ButtonType {
  type?: "button" | "submit";
  disabled?: boolean;
  children: React.ReactNode;
}

export default function Button({
  type = "button",
  disabled,
  children,
}: ButtonType) {
  return (
    <StyledButton type={type} disabled={disabled}>
      {children}
    </StyledButton>
  );
}
