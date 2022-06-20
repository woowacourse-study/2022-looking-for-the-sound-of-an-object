import React from 'react';
import * as S from './style';

type buttonType = 'primary' | 'secondary';
export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonStyle: buttonType;
}

const Button = ({ children, ...rest }: React.PropsWithChildren<Props>) => {
  return <S.Container {...rest}>{children}</S.Container>;
};

export default React.memo(Button);
