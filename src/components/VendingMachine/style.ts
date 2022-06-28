import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 500px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.COLOR.WHITE_100};
  padding: 30px 40px;
  gap: 20px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.COLOR.GREEN_200};
`;

export const FlexRow = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Input = styled.input`
  width: 80%;
  padding: 10px 5px;
  border: 1px solid ${({ theme }) => theme.COLOR.GREEN_200};
  border-radius: 4px;
`;

export const ChargedMoneyDescription = styled.p`
  color: ${({ theme }) => theme.COLOR.BROWN_100};
  font-weight: bold;
`;
