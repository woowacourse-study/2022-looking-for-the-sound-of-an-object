import React from 'react';
import styled, { css } from 'styled-components';

type buttonType = 'primary' | 'secondary';
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  buttonType: buttonType;
}

const Button = ({ children, ...rest }: Props) => {
  return <Container {...rest}>{children}</Container>;
};

const ButtonStyle = {
  primary: css`
    background-color: ${({ theme }) => theme.COLOR.GREY_100};
    &:disabled {
      background-color: ${({ theme }) => theme.COLOR.GREY_300};
    }
    &:hover {
      background-color: ${({ theme }) => theme.COLOR.GREEN_100};
    }
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.COLOR.GREY_100};
    &:hover {
      background-color: ${({ theme }) => theme.COLOR.BROWN_100};
    }
  `,
};

const Container = styled.button<Props>`
  min-width: 150px;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  color: ${({ theme }) => theme.COLOR.BLACK};
  cursor: pointer;
  transition-duration: 400ms;
  ${({ buttonType }) => ButtonStyle[buttonType]}
`;

export default Button;
