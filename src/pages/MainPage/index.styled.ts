import styled, { css } from 'styled-components';

const VendingMachine = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 30px;

  width: 500px;
  height: 700px;
  box-sizing: border-box;
  border: 1px solid ${({ theme: { colors } }) => colors.gray001};
  border-radius: 5px;

  margin: 30px 0;
  padding: 50px 0;
`;

const Guiding = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 90%;
  height: 40px;

  border: none;
  border-radius: 5px;

  background: ${({ theme: { colors } }) => colors.black001};
  color: ${({ theme: { colors } }) => colors.white001};

  font-size: 16px;
`;

const MoneyInputForm = styled.form`
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

const ChangeContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;

  width: 90%;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 25%;
    height: 50px;

    border: none;
    border-radius: 5px;

    background: ${({ theme: { colors } }) => colors.black001};
    color: ${({ theme: { colors } }) => colors.white001};
  }

  button {
    width: 50px;
    height: 50px;

    border-radius: 50%;
  }
`;

const DispenserContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const Light = styled.div`
  width: 10px;
  height: 10px;
  border: none;
  border-radius: 50%;

  ${({ making }: { making: boolean }) => css`
    background: ${({ theme: { colors } }) =>
      making ? colors.red001 : colors.green001};
  `}
`;

const Dispenser = styled.div`
  width: 150px;
  height: 150px;
  border: none;
  border-radius: 5px;

  background: ${({ theme: { colors } }) => colors.gray001};
`;

export {
  VendingMachine,
  Guiding,
  MoneyInputForm,
  ChangeContainer,
  DispenserContainer,
  Light,
  Dispenser,
};
