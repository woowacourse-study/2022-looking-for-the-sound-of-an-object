import styled from 'styled-components';

const ChangeInputForm = styled.form`
  display: flex;
  justify-content: center;
  gap: 30px;

  width: 90%;
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

export { ChangeInputForm };
