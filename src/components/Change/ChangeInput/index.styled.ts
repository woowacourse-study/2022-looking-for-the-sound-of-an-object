import styled, { css } from 'styled-components';
import theme from 'styles/theme';

const ChangeContainer = styled.div`
  display: flex;
  align-items: center;

  width: 90%;
`;

const ChangeInputForm = styled.form`
  display: flex;
  justify-content: center;
  gap: 10px;

  width: 80%;
  height: 30px;

  input {
    width: 60%;
    box-sizing: border-box;
    border: 1px solid ${({ theme: { colors } }) => colors.gray001};
    border-radius: 3px;

    &:focus {
      outline: none;
    }
  }

  button {
    width: 15%;
    border-radius: 3px;
  }
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  width: 70px;
  height: 50px;

  border-radius: 5px;

  font-size: 10px;

  cursor: pointer;

  ${({ isActive }: { isActive: boolean }) => css`
    background: ${isActive ? theme.colors.brown001 : theme.colors.gray002};
  `}
`;

export { ChangeContainer, ChangeInputForm, Card };
