import React from 'react';
import * as S from './style';

type buttonType = 'primary' | 'secondary';
export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  buttonStyle: buttonType;
}

const Button = ({ children, ...rest }: Props) => {
  return <S.Container {...rest}>{children}</S.Container>;
};

export default React.memo(Button);
