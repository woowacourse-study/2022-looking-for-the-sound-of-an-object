import styled from 'styled-components';

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

export { VendingMachine };
