import React from 'react';
import styled, { keyframes } from 'styled-components';

interface Props {
  ingredients?: string[];
  finished?: string;
}

const Dispenser = ({ ingredients, finished }: Props) => {
  return (
    <Container>
      {finished && <Box>{finished} 나왔습니다 손님! 😆 </Box>}
      {ingredients?.map((name, index) => (
        <Box key={index}>{name} 👩🏻‍🍳 </Box>
      ))}
    </Container>
  );
};

const drop = keyframes`
  0% {transform: translateY(-200px) scaleY(0.9); opacity: 0;}
  5% {opacity: .7;}
  50% {transform: translateY(0px) scaleY(1); opacity: 1;}
  65% {transform: translateY(-17px) scaleY(.9); opacity: 1;}
  75% {transform: translateY(-22px) scaleY(.9); opacity: 1;}
  100% {transform: translateY(0px) scaleY(1); opacity: 1;}
`;

const Container = styled.section`
  width: 100%;
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

const Box = styled.div`
  border-radius: 4px;
  background-color: ${({ theme }) => theme.COLOR.GREY_100};
  padding: 10px 20px;
  width: 250px;
`;

export default React.memo(Dispenser);
