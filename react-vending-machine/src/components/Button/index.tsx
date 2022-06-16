import StyledButton from "./index.styled";

interface ButtonType {
  type?: "button" | "submit";
  children: React.ReactNode;
}

export default function Button({ type = "button", children }: ButtonType) {
  return <StyledButton type={type}>{children}</StyledButton>;
}
