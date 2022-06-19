import styled, { keyframes } from 'styled-components';

const drop = keyframes`
  0% {transform: translateY(-200px) scaleY(0.9); opacity: 0;}
  5% {opacity: .7;}
  50% {transform: translateY(0px) scaleY(1); opacity: 1;}
  65% {transform: translateY(-17px) scaleY(.9); opacity: 1;}
  75% {transform: translateY(-22px) scaleY(.9); opacity: 1;}
  100% {transform: translateY(0px) scaleY(1); opacity: 1;}
`;

export const Container = styled.section`
  width: 250px;
  height: 300px;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.COLOR.GREEN_100};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;

  > * {
    &:first-child {
      opacity: 0;
      animation: ${drop} 0.4s linear forwards 0.8s;
      background-color: ${({ theme }) => theme.COLOR.BROWN_100};
    }
  }
`;

export const Box = styled.div`
  border-radius: 4px;
  background-color: ${({ theme }) => theme.COLOR.GREY_100};
  padding: 10px 20px;
  width: 250px;
`;
