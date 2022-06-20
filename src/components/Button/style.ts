import styled, { css } from 'styled-components';
import { Props } from '.';

const ButtonStyle = {
  primary: css`
    background-color: ${({ theme }) => theme.COLOR.GREY_100};

    &:hover {
      background-color: ${({ theme }) => theme.COLOR.GREEN_100};
    }

    &:disabled {
      background-color: ${({ theme }) => theme.COLOR.GREY_300};
      cursor: default;
    }
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.COLOR.GREY_100};
    &:hover {
      background-color: ${({ theme }) => theme.COLOR.BROWN_100};
    }

    &:disabled {
      background-color: ${({ theme }) => theme.COLOR.GREY_300};
      cursor: default;
    }
  `,
};

export const Container = styled.button<Props>`
  min-width: 150px;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  color: ${({ theme }) => theme.COLOR.BLACK_100};
  cursor: pointer;
  transition-duration: 400ms;
  ${({ buttonStyle }) => ButtonStyle[buttonStyle]}
`;
