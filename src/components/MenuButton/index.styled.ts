import styled, { css } from 'styled-components';

const MenuButton = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;

  width: 100px;
`;

const Label = styled.label`
  color: ${({ theme: { colors } }) => colors.brown001};

  font-size: 14px;

  p {
    color: ${({ theme: { colors } }) => colors.gray001};

    font-size: 12px;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 20px;
  border-radius: 50px;
  background: ${({ theme: { colors } }) => colors.brown002};

  &:disabled {
    background: ${({ theme: { colors } }) => colors.gray002};
    pointer-events: none;
  }
`;

export { MenuButton, Label, Button };
