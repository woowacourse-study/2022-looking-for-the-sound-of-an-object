import styled from 'styled-components';

export const Container = styled.section`
  width: 100px;
  height: 200px;
  background-color: ${({ theme }) => theme.COLOR.GREY_100};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
