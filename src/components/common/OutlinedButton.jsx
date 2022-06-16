import styled from "styled-components";

const Button = styled.button`
  padding: 0.5rem 1rem;

  box-shadow: 0 0.2rem 0.3rem ${({ theme }) => theme.primary};
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 2em;
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.primary};

  &:hover {
    opacity: 0.9;
  }

  &:active {
    box-shadow: 0 0.2rem 0.3rem ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.primaryDark};
    border: 1px solid ${({ theme }) => theme.primaryDark};
  }

  &:disabled {
    opacity: 1;
    box-shadow: 0 0.2rem 0.3rem ${({ theme }) => theme.secondaryDark};
    background-color: ${({ theme }) => theme.secondaryLight};
    color: ${({ theme }) => theme.secondaryDark};
    border: 1px solid ${({ theme }) => theme.secondaryDark};
  }
`;

function BoxButton({ type, onClick, children, ...rest }) {
  return (
    <Button type={type} onClick={onClick} {...rest}>
      {children}
    </Button>
  );
}

export default BoxButton;
