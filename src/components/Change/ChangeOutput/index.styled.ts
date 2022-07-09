import styled from 'styled-components';

const ChangeContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;

  width: 90%;
`;

const Change = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 25%;
  height: 50px;

  border: none;
  border-radius: 5px;

  background: ${({ theme: { colors } }) => colors.black001};
  color: ${({ theme: { colors } }) => colors.white001};
`;

const ReturnButton = styled.button`
  width: 50px;
  height: 50px;

  border-radius: 50%;
`;

const ReturnCoinTable = styled.table`
  background: ${({ theme: { colors } }) => colors.gray001};
  color: ${({ theme: { colors } }) => colors.white001};

  border-radius: 10px;

  font-size: 12px;

  tr {
    display: flex;
    justify-content: space-between;
  }

  td {
    padding: 6px;
  }
`;

export { ChangeContainer, Change, ReturnButton, ReturnCoinTable };
