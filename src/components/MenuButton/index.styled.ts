import styled, { css } from 'styled-components';

const MenuButton = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;

  width: 100px;
`;

const Label = styled.label`
  color: ${({ theme: { colors } }) => colors.gray001};

  font-size: 15px;
`;

const Button = styled.button`
  width: 100%;
  height: 20px;
  border-radius: 50px;

  ${({ canBuy }: { canBuy: boolean }) => css`
    background: ${({ theme: { colors } }) =>
      canBuy ? colors.brown001 : colors.gray002};
  `}
`;

export { MenuButton, Label, Button };
