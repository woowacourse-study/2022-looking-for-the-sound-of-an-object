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

export { ChangeContainer, Change, ReturnButton };
