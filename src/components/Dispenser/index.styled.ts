import styled, { css } from 'styled-components';

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

export { DispenserContainer, Light, Dispenser };
