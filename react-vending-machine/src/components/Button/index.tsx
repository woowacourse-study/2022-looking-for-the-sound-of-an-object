import StyledButton from "./index.styled";

interface ButtonType {
  type?: "button" | "submit";
  disabled?: boolean;
  children: React.ReactNode;
  onClick: any;
  // onClick: React.MouseEventHandler<HTMLButtonElement>;
}

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
